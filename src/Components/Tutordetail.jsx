import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const TutorDetail = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const userEmail = user?.email;

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/tutorials/${id}`);
        setTutor(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTutor();
  }, [id]);

  const handleBooking = async () => {
    try {
      const booking = {
        tutorId: tutor._id,
        tutorEmail: tutor.email,
        image: tutor.image,
        language: tutor.language,
        price: tutor.price,
        email: userEmail,
      };

      const res = await axios.post("http://localhost:3000/bookings", booking);
      alert("Tutor booked successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to book tutor.");
    }
  };

  if (loading) return <p className="text-center text-lg">Loading tutor details...</p>;
  if (!tutor) return <p className="text-center text-lg">Tutor not found.</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto border rounded shadow">
      <img src={tutor.image} alt={tutor.language} className="w-full h-64 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{tutor.name}</h2>
      <p className="mt-2">{tutor.description}</p>
      <p className="mt-2"><strong>Language:</strong> {tutor.language}</p>
      <p><strong>Price:</strong> ${tutor.price}</p>
      <p><strong>Reviews:</strong> {tutor.review}</p>
      <button
        onClick={handleBooking}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Book Tutor
      </button>
    </div>
  );
};

export default TutorDetail;

