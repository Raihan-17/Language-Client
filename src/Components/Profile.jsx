import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
// import { Helmet } from 'react-helmet-async';


const Profile = () => {

const {user , logOut}= use(AuthContext);

    return (
       <div>
        {/* <Helmet>
            <title>JobHut / Profile</title>
        </Helmet> */}
         <div className="flex  items-center justify-center w-11/12 mx-auto p-20 gap-5 rounded-3xl shadow-2xl bg-gray-100">
           <div>  <img
          className="rounded-2xl w-40 h-40 object-cover border-4 border-cyan-700"
          src={`${user &&  user.photoURL}`}
          alt=""
        /></div>
              <div className='text-2xl font-semibold text-cyan-800'>
                <h2>Name: {user && user.displayName}</h2>
                <h2>Email: {user && user.email}</h2>
              </div>
              
        </div>

        <div className="flex justify-center mt-10">
             <Link to="/auth/update" className="btn bg-cyan-700 text-white ">
                    Update Profile
                  </Link>
        </div>

       </div>
    );
};

export default Profile;