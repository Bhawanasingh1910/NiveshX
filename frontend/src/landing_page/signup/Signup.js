import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary signup flow
    // Currently redirects to the deployed dashboard.
    window.location.href = "https://nivesh-x-dashboard.vercel.app/";
  };

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "60px 20px",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1050px",
        }}
      >
        <div
          className="row bg-white rounded-4 overflow-hidden shadow-sm"
          style={{ minHeight: "600px" }}
        >
          {/* Left Section */}
          <div
            className="col-md-6 text-white d-flex flex-column justify-content-center"
            style={{
              backgroundColor: "#4C1D95",
              padding: "60px",
            }}
          >
            <h2 className="fw-bold mb-5">NiveshX</h2>

            <h1 className="fw-bold mb-3" style={{ fontSize: "42px" }}>
              Start your investing journey.
            </h1>

            <p
              className="mb-4"
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                opacity: "0.9",
              }}
            >
              Build your portfolio, explore the markets, and make informed
              investment decisions with NiveshX.
            </p>

            <div className="mt-3">
              <p>
                <span
                  className="badge rounded-circle me-2"
                  style={{
                    backgroundColor: "#FBBF24",
                    color: "#4C1D95",
                  }}
                >
                  ✓
                </span>
                Simple and intuitive investing experience
              </p>

              <p>
                <span
                  className="badge rounded-circle me-2"
                  style={{
                    backgroundColor: "#FBBF24",
                    color: "#4C1D95",
                  }}
                >
                  ✓
                </span>
                Track your portfolio in one place
              </p>

              <p>
                <span
                  className="badge rounded-circle me-2"
                  style={{
                    backgroundColor: "#FBBF24",
                    color: "#4C1D95",
                  }}
                >
                  ✓
                </span>
                Explore market insights and opportunities
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="col-md-6"
            style={{
              padding: "60px",
            }}
          >
            <h2 className="fw-bold">Create your account</h2>

            <p className="text-secondary mb-4">
              Join NiveshX and get started today.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Create Account */}
              <button
                type="submit"
                className="btn text-white w-100 py-2 fw-semibold"
                style={{
                  backgroundColor: "#7C3AED",
                }}
              >
                Create Account
              </button>
            </form>

            {/* Login */}
            <p className="text-center text-secondary mt-4">
              Already have an account?{" "}
              <a
                href="https://nivesh-x-dashboard.vercel.app/"
                style={{
                  color: "#7C3AED",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Log in
              </a>
            </p>

            {/* Disclaimer */}
            <p
              className="text-center text-secondary mt-4"
              style={{
                fontSize: "11px",
              }}
            >
              By continuing, you agree to the NiveshX Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;