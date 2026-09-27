
import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      {/* Top Support Header */}
      <div
        className="container py-5"
        id="supportWrapper"
      >
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-semibold mb-0">
            NiveshX Support
          </h4>

          <button
            className="btn btn-link text-decoration-none fw-semibold"
            style={{ color: "#7848D0" }}
          >
            Track Tickets →
          </button>
        </div>
      </div>

      {/* Main Support Section */}
      <div className="container py-5">
        <div className="row g-5">

          {/* Left Section */}
          <div className="col-12 col-md-7">

            <h1 className="fw-semibold mb-3">
              How can we help you?
            </h1>

            <p className="text-muted fs-5 mb-4">
              Search for answers or explore our help topics
              to get the support you need.
            </p>

            {/* Search Box */}
            <div
              className="d-flex align-items-center border rounded-3 px-3 py-2 mb-4"
              style={{
                maxWidth: "650px",
                boxShadow: "0 4px 15px rgba(120, 72, 208, 0.08)"
              }}
            >
              <span
                className="me-2"
                style={{ color: "#7848D0", fontSize: "20px" }}
              >
                🔍
              </span>

              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Eg. How do I activate F&O?"
              />
            </div>

            {/* Popular Topics */}
            <h5 className="fw-semibold mb-3">
              Popular topics
            </h5>

            <div className="d-flex flex-wrap gap-2">

              <button
                className="btn btn-outline-secondary rounded-pill px-3"
              >
                Account Opening
              </button>

              <button
                className="btn btn-outline-secondary rounded-pill px-3"
              >
                Segment Activation
              </button>

              <button
                className="btn btn-outline-secondary rounded-pill px-3"
              >
                Intraday Margins
              </button>

              <button
                className="btn btn-outline-secondary rounded-pill px-3"
              >
                Trading Platform
              </button>

            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-5">

            <div
              className="p-4 rounded-4 h-100"
              style={{
                backgroundColor: "#f7f3fc",
                border: "1px solid #eee5fa"
              }}
            >

              <div className="d-flex align-items-center mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#7848D0",
                    color: "white",
                    fontSize: "20px"
                  }}
                >
                  ★
                </div>

                <h4 className="fw-semibold mb-0">
                  Featured
                </h4>
              </div>

              <ol className="ps-3 mb-0">

                <li className="mb-4">
                  <button
                    className="btn btn-link text-decoration-none p-0 text-start"
                    style={{ color: "#7848D0" }}
                  >
                    Current Takeovers and Delisting
                  </button>
                  <p className="text-muted small mt-1 mb-0">
                    Important updates and announcements
                  </p>
                </li>

                <li>
                  <button
                    className="btn btn-link text-decoration-none p-0 text-start"
                    style={{ color: "#7848D0" }}
                  >
                    Latest Intraday Leverages
                  </button>
                  <p className="text-muted small mt-1 mb-0">
                    Understand MIS and available trading limits
                  </p>
                </li>

              </ol>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Help Banner */}
      <div className="container pb-5">
        <div
          className="text-center p-5 rounded-4"
          style={{
            backgroundColor: "#7848D0",
            color: "white"
          }}
        >
          <h3 className="fw-semibold mb-2">
            Still need help?
          </h3>

          <p className="mb-4 opacity-75">
            Create a support ticket and our team can help you
            with your NiveshX account.
          </p>

          <button className="btn btn-light px-4 py-2 fw-semibold">
            Create a Ticket →
          </button>
        </div>
      </div>

    </section>
  );
}

export default Hero;
