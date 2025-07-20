
import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import {getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
// import { Helmet } from "react-helmet-async";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const emailRef =useRef();
  

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {

    const auth = getAuth();
    // auth.signInWithPopup(provider)
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  }


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 8) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    if (!uppercaseRegex.test(password)) {
      setPasswordError("Password must include at least one uppercase letter.");
      return;
    }
    if (!lowercaseRegex.test(password)) {
      setPasswordError("Password must include at least one lowercase letter.");
      return;
    }
    else {
       setPasswordError("");
    }
    
   
    // console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
   
        setError(errorCode);
      });

      form.reset();
    // setErrorMessage('');

    }   

      const handleForgetPassword= () => {
        const email = emailRef.current.value;

        setErrorMessage('');
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
          .then(() => {
            alert("Password reset email sent. Please check your inbox.");
          })
          .catch((error) => {
            setErrorMessage(error.message);
      })
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
     
      <div className="card bg-slate-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center text-cyan-800">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            
            <label className="label">Email</label>
            <input
              name="email"
              ref={emailRef}
              type="email"
              className="input"
              placeholder="Email"
              required
            />
    
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
             {passwordError && <p className="text-xs text-error">{passwordError}</p>}

            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <p className="text-center font-extrabold">Or</p>

            <button onClick={handleGoogleLogin} className="btn bg-blue-100 shadow-xl text-black border-[#e5e5e5]">
             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
              </button>

            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;