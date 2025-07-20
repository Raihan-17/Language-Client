import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "./Loading";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTutorial, setSelectedTutorial] = useState(null); 
  const [showModal, setShowModal] = useState(false);

  
useEffect(() => {
  const fetchMyTutorials = async () => {
    if (!user?.email) return;

    try {
    
      const token = await user.getIdToken();

      
      const res = await axios.get(`http://localhost:3000/my-tutorials?email=${user.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTutorials(res.data);
    } catch (err) {
      console.error("Error fetching tutorials:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchMyTutorials();
}, [user]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This tutorial will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/tutorials/${id}`)
          .then(() => {
            setTutorials(tutorials.filter(t => t._id !== id));
            Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
          })
          .catch(err => console.error(err));
      }
    });
  };


  const handleUpdateClick = (tutorial) => {
    setSelectedTutorial(tutorial);
    setShowModal(true);
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      image: form.image.value,
      language: form.language.value,
      price: form.price.value,
      description: form.description.value
    };

    axios.put(`http://localhost:3000/tutorials/${selectedTutorial._id}`, updatedData)
      .then(() => {
        setTutorials(tutorials.map(t => t._id === selectedTutorial._id ? { ...t, ...updatedData } : t));
        Swal.fire("Updated!", "Tutorial updated successfully.", "success");
        setShowModal(false);
      })
      .catch(err => console.error(err));
  };

  if (loading) return <Loading />;

  return (
    <div className="w-11/12 mx-auto my-8 bg-slate-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-teal-950">My Tutorials</h2>
      {tutorials.length === 0 ? (
        <p>No tutorials added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full text-center border-2 border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th>Image</th>
                <th>Language</th>
                <th>Price</th>
                <th>Description</th>
                <th>Review</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tutorials.map(tutorial => (
                <tr key={tutorial._id}>
                  <td><img src={tutorial.tutorialImage} alt="" className="w-16 h-16 object-cover rounded" /></td>
                  <td className="font-bold text-slate-800">{tutorial.language}</td>
                  <td className="font-bold text-slate-800">${tutorial.price}</td>
                  <td className="font-bold text-slate-800">{tutorial.description}</td>
                  <td className="font-bold text-slate-800">{tutorial.review}</td>
                  <td className="flex gap-2">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleUpdateClick(tutorial)}
                        className="bg-cyan-900 text-white px-3 py-1 rounded hover:bg-teal-600"
                      >
                        Update
                      </button>
                  
                      <button
                        onClick={() => handleDelete(tutorial._id)}
                        className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

     
      {showModal && selectedTutorial && (
        <div className="fixed inset-0 bg-black  flex items-center justify-center ">
          <div className="bg-gray-100 p-6 rounded-lg w-6/12 h-screen my-5">
            <h3 className="text-lg font-semibold mb-4">Update Tutorial</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input type="text" value={selectedTutorial.name} readOnly className="w-full border px-3 py-2 bg-gray-100" />
              <input type="email" value={selectedTutorial.email} readOnly className="w-full border px-3 py-2 bg-gray-100" />
              <input name="image" defaultValue={selectedTutorial.image} className="w-full border px-3 py-2" />
              <input name="language" defaultValue={selectedTutorial.language} className="w-full border px-3 py-2" />
              <input name="price" defaultValue={selectedTutorial.price} type="number" className="w-full border px-3 py-2" />
              <textarea name="description" defaultValue={selectedTutorial.description} className="w-full border px-3 py-2" rows="3" />
              <input type="text" value={selectedTutorial.review} readOnly className="w-full border px-3 py-2 bg-gray-100" />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTutorials;
