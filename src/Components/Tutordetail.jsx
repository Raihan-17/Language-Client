import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";

const TutorDetail = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBooked, setIsBooked] = useState(false); 
  const userEmail = user?.email;

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/tutorials/${id}`);
        setTutor(res.data);
        
        
        if (userEmail) {
          const bookingCheck = await axios.get(`http://localhost:3000/bookings?tutorId=${id}&email=${userEmail}`);
          if (bookingCheck.data.length > 0) {
            setIsBooked(true);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTutor();
  }, [id, userEmail]);

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
      setIsBooked(true); 
    } catch (err) {
      console.error(err);
      alert("Failed to book tutor.");
    }
  };

  if (loading) return <Loading></Loading>;
  if (!tutor) return <p className="text-center text-lg">Tutor not found.</p>;

  return (
    <div className="p-6 w-7/12 mx-auto my-8 bg-slate-800 rounded-xl shadow">
      <h1 className="text-3xl text-center font-bold text-white mb-4">{tutor.language} Tutor</h1>
      <img src={tutor.image} alt={tutor.language} className="w-full object-cover rounded-xl" />
      <h2 className="text-2xl text-white font-bold mt-5">{tutor.name}</h2>
      <p className="mt-2 text-white">{tutor.description}</p>
      <p className="mt-2 text-white"><strong>Language:</strong> {tutor.language}</p>
      <p className="text-white"><strong>Price:</strong> ${tutor.price}</p>
      <p className="text-white"><strong>Reviews:</strong> {tutor.review}</p>
      <button
        onClick={handleBooking}
        disabled={isBooked}
        className={`w-full text-black px-4 py-2 rounded-xl mt-4 ${
          isBooked
            ? "bg-green-600 cursor-not-allowed"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
      >
        {isBooked ? "Tutor Booked" : "Book Tutor"}
      </button>
    </div>
  );
};

export default TutorDetail;