import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "./Loading";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTutorial, setSelectedTutorial] = useState(null); // For update modal
  const [showModal, setShowModal] = useState(false);

  // Fetch user tutorials
  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:3000/my-tutorials?email=${user.email}`)
        .then(res => {
          setTutorials(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  // Delete tutorial
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

  // Open update modal
  const handleUpdateClick = (tutorial) => {
    setSelectedTutorial(tutorial);
    setShowModal(true);
  };

  // Update tutorial
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
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">My Tutorials</h2>
      {tutorials.length === 0 ? (
        <p>No tutorials added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="bg-gray-100">
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
                  <td><img src={tutorial.image} alt="" className="w-16 h-16 object-cover rounded" /></td>
                  <td>{tutorial.language}</td>
                  <td>${tutorial.price}</td>
                  <td>{tutorial.description}</td>
                  <td>{tutorial.review}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleUpdateClick(tutorial)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(tutorial._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Update Modal */}
      {showModal && selectedTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
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
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
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
