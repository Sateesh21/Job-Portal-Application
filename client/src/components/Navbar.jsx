import React, { useContext } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);
  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <a target="_blank" href="https://github.com/Sateesh21"><span className="cursor-pointer font-bold italic">Boundary.IO</span></a>
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={'/applications'} className="text-slate-500 font-bold">Applied Jobs</Link>
            {/* <p>|</p> */}
            <p className="text-slate-950 max-sm:hidden">Hello {user.firstName} </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button onClick={e => setShowRecruiterLogin(true)} className="cursor-pointer text-gray-600">
              Recruiters Login
            </button>
            <button
              onClick={(e) => openSignIn()}
              className="cursor-pointer bg-slate-600 text-white px-6 sm:px-9 py-2 rounded "
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
