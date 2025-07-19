import React from 'react';

// const FindTutor = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default FindTutor;



import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const FindTutor = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get(`/tutorials?language=${category}`)
      .then(res => setTutors(res.data))
      .finally(() => setLoading(false));
  }, [category]);

  const handleSearch = () => {
    setLoading(true);
    axios.get(`/tutorials?language=${search}`)
      .then(res => setTutors(res.data))
      .finally(() => setLoading(false));
  };

  if (loading) return <Loading />;

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by language"
          className="border px-4 py-2"
        />
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {tutors.map(tutor => (
          <div key={tutor._id} className="p-4 border rounded">
            <img src={tutor.image} alt={tutor.language} className="w-full h-40 object-cover" />
            <h3>{tutor.name}</h3>
            <p>{tutor.language}</p>
            <p>${tutor.price}</p>
            <p>Reviews: {tutor.review}</p>
            <a href={`/tutor/${tutor._id}`} className="btn btn-primary">Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutor;
