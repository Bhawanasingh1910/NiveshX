import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a NiveshX Account</h1>

        <p>
          Build your portfolio with stocks, mutual funds, and more - all in one place.
        </p>

        <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5"
          style={{
            backgroundColor: "#7848D0",
            borderColor: "#7038B8",
            width: "20%",
            margin: "0 auto",
          }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;