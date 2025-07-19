import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import Loading from "./Loading";

const FindTutor = () => {
  const { category } = useParams(); // for /find-tutors/:category
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        const url = category
          ? `http://localhost:3000/tutorials?language=${category}`
          : `http://localhost:3000/tutorials`;
        const res = await axios.get(url);
        setTutors(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, [category]);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:3000/tutorials?language=${search}`
      );
      setTutors(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Find Tutors</h2>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by language..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </div>

      {loading ? (
       <Loading></Loading>
      ) : tutors.length === 0 ? (
        <p>No tutors found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tutors.map((tutor) => (
            <div key={tutor._id} className="border p-4 rounded shadow">
              <img src={tutor.image} alt={tutor.language} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-bold mt-2">{tutor.name}</h3>
              <p>Language: {tutor.language}</p>
              <p>Price: ${tutor.price}</p>
              <p>Review: {tutor.review}</p>
              <Link to={`/tutor/${tutor._id}`} className="text-blue-600 mt-2 inline-block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindTutor;
