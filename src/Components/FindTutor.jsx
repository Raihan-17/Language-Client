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
    <div className="p-7 bg-slate-300 rounded-lg shadow-2xl w-11/12 mx-auto my-10">
      <h2 className="col-span-3 text-3xl font-bold mb-4 text-center text-teal-950">Search Tutor By Specific Language</h2>
      <div className="flex  mb-10  justify-center">
        <input
          type="text"
          placeholder="Search by language..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 bg-white p-2 rounded rounded-tr-none rounded-br-none  w-full  md:w-1/3"
        />
        <button onClick={handleSearch} className="bg-black text-white p-2 rounded rounded-bl-none rounded-tl-none">
          Search
        </button>
      </div>

      {loading ? (
       <Loading></Loading>
      ) : tutors.length === 0 ? (
        <p className="text-center text-red-500">No tutors found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <div key={tutor._id} className=" p-2 rounded-xl shadow-xl bg-white">
              <img src={tutor.image} alt={tutor.language} className="w-full h-40 object-cover rounded-xl rounded-b-none" />
             <div className="p-2">
                 <h3 className="text-xl font-bold mt-2">{tutor.userName}</h3>
              <p className="font-bold">Language: {tutor.language}</p>
              <p className="text">Price: ${tutor.price}</p>
              <p className="text">Review: {tutor.review}</p>
              <Link to={`/tutor/${tutor._id}`} className="btn w-full text-white mt-2 bg-black border-black hover:bg-white hover:text-black">
                View Details
              </Link>
             </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindTutor;
