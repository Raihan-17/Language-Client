import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { AuthContext } from "../provider/AuthProvider";

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewedTutors, setReviewedTutors] = useState([]); // Track which tutors have been reviewed
  const userEmail = user?.email;

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
    if (userEmail) fetchBookings();
  }, [userEmail]);

   //sending jwt in axios request header
  axios.get(`http://localhost:3000/bookings?email=${user.email}`, {
  headers: {
    Authorization: `Bearer ${user.accessToken}`,
  },
});

  const handleReview = async (tutorId) => {
    try {
      await axios.patch(`http://localhost:3000/tutorials/${tutorId}/review`);
      
      // Update UI
      setBookings(prev =>
        prev.map(booking =>
          booking.tutorId === tutorId
            ? { ...booking, review: (booking.review || 0) + 1 }
            : booking
        )
      );
      
      // Mark this tutor as reviewed by this user
      setReviewedTutors(prev => [...prev, tutorId]);
      
    } catch (error) {
      console.error("Failed to update review:", error);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="p-6 w-11/12 mx-auto my-10 bg-slate-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-teal-950">
        My Booked Tutors
      </h2>
      {bookings.length === 0 ? (
        <p className="text-xl text-center text-red-500">You have not booked any tutors yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bookings.map((booking) => {
            const isReviewed = reviewedTutors.includes(booking.tutorId);
            
            return (
              <div key={booking._id} className="p-4 rounded shadow bg-white">
                <img
                  src={booking.image}
                  alt={booking.language}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-2">{booking.language} Tutor</h3>
                <p><strong>Price:</strong> ${booking.price}</p>
                <p><strong>Tutor Email:</strong> {booking.tutorEmail}</p>
                <p><strong>Reviews:</strong> {booking.review || 0}</p>
                
                <button
                  onClick={() => handleReview(booking.tutorId)}
                  disabled={isReviewed}
                  className={`w-full px-4 py-2 mt-2 rounded ${
                    isReviewed
                      ? "bg-green-600 text-white cursor-not-allowed"
                      : "bg-black text-white hover:bg-blue-950"
                  }`}
                >
                  {isReviewed ? "Review Added ✓" : "Add Review"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyBookedTutors;