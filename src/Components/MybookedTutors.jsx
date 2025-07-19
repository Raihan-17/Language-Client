import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { updateCurrentUser } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";

const MyBookedTutors = () => {
    const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = user?.email; // Replace with actual logged-in user email

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/bookings?email=${userEmail}`);
        setBookings(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <Loading></Loading>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Booked Tutors</h2>
      {bookings.length === 0 ? (
        <p>You have not booked any tutors yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bookings.map((booking) => (
            <div key={booking._id} className="border p-4 rounded shadow">
              <img src={booking.image} alt={booking.language} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-bold mt-2">{booking.language} Tutor</h3>
              <p>Price: ${booking.price}</p>
              <p><strong>Tutor Email:</strong> {booking.tutorEmail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookedTutors;
