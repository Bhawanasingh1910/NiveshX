import React from "react";

function Team() {
  return (
    <div className="container py-5">

      <div
        className="row align-items-center p-5 p-md-5"
        style={{
          backgroundColor: "#f8f6fc",
          borderRadius: "14px"
        }}
      >

        {/* Left Side - Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">

          <div
            className="p-2 d-inline-block"
            style={{
              backgroundColor: "#c0a4cf",
              borderRadius: "200px",
              
            }}
          >
            <img
              src="media/images/bhawana2.png"
              className="img-fluid"
              alt="Bhawana"
              style={{
                width: "310px",
                height: "310px",
                objectFit: "cover",
                borderRadius: "200px"
              }}
            />
          </div>

        </div>


        {/* Right Side - Content */}
        <div className="col-md-8 ps-md-5">

          <p
            className="mb-2 fw-semibold"
            style={{ color: "#6d36b5" }}
          >
            THE CREATOR
          </p>

          <h1 className="fw-semibold mb-2">
            Bhawana :)
          </h1>

          <p className="text-muted mb-4">
            Developer & Creator of NiveshX
          </p>

          <p className="text-muted">
           a 3rd-yr CSE student at IGDTUW. I enjoy building practical projects and exploring new technologies.
          </p>

          <p className="text-muted">
            I designed and developed NiveshX as a practical project to
            explore how a real-world financial platform works, from
            user interface and backend services to data management and
            application flow.
          </p>


          {/* Technology Stack */}
          <h5 className="fw-semibold mt-4 mb-3">
            Technology Stack
          </h5>

          <div className="d-flex flex-wrap gap-2">

            <span
              className="badge px-3 py-2"
              style={{
                backgroundColor: "#ede5f8",
                color: "#6d36b5",
                fontSize: "14px"
              }}
            >
              React
            </span>

            <span
              className="badge px-3 py-2"
              style={{
                backgroundColor: "#ede5f8",
                color: "#6d36b5",
                fontSize: "14px"
              }}
            >
              Bootstrap
            </span>

            <span
              className="badge px-3 py-2"
              style={{
                backgroundColor: "#ede5f8",
                color: "#6d36b5",
                fontSize: "14px"
              }}
            >
              JavaScript
            </span>

            <span
              className="badge px-3 py-2"
              style={{
                backgroundColor: "#ede5f8",
                color: "#6d36b5",
                fontSize: "14px"
              }}
            >
              Node.js
            </span>

            <span
              className="badge px-3 py-2"
              style={{
                backgroundColor: "#ede5f8",
                color: "#6d36b5",
                fontSize: "14px"
              }}
            >
              Express.js
            </span>

            <span
              className="badge px-3 py-2"
              style={{
                backgroundColor: "#ede5f8",
                color: "#6d36b5",
                fontSize: "14px"
              }}
            >
              MongoDB
            </span>

          </div>


          {/* Bottom */}
          <div className="mt-4">

            <a
              href="/"
              className="text-decoration-none fw-semibold"
              style={{ color: "#6d36b5" }}
            >
              Explore NiveshX
              <span className="ms-2">→</span>
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Team;