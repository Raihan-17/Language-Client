import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const AddTutorial = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    image: "",
    language: "",
    price: "",
    description: "",
    review: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/tutorials", formData);
      if (response.status === 200 || response.status === 201) {
        alert("Tutorial added successfully!");
        setFormData({
          name: user?.displayName || "",
          email: user?.email || "",
          image: "",
          tutorialImage: "",
          language: "",
          price: "",
          description: "",
          review: 0,
        });
      }
    } catch (error) {
      console.error("Error adding tutorial:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-100 shadow-md rounded-lg shadow-2xl p-6 my-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-950">Add New Tutorial</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-200"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-200"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white"
            placeholder="Enter tutor image URL"
            required
          />
        </div>
         <div>
          <label className="block mb-2 font-semibold">Tutorial Related Image URL</label>
          <input
            type="text"
            name="tutorialImage"
            value={formData.tutorialImage}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white"
            placeholder="Enter tutorial image URL"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Language</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white"
            placeholder="Enter language"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white"
            placeholder="Enter price"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white"
            rows="4"
            placeholder="Enter description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-teal-700"
        >
          Add Tutorial
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
