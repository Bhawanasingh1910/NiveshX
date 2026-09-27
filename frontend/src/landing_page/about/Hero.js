import React from "react";

function Hero() {
  return (
    <div>

      {/* Hero Section */}
      <section className="container py-3">
        <div className="row align-items-center py-3">

          <div className="col-md-7">
            <h1 className="display-5 fw-semibold">
              About NiveshX
            </h1>

            <p className="lead text-muted mt-0">
              Investing made simple, clear, and accessible.
            </p>

            <p className="text-muted">
              NiveshX is a modern investment platform that brings
              different investment options together in one place.
            </p>
          </div>

          <div className="col-md-5 text-center">
            <img
              src="media/images/logoF.svg"
              alt="NiveshX"
              className="img-fluid"
              style={{ maxWidth: "430px" }}
            />
          </div>

        </div>
      </section>


      {/* About NiveshX */}
      <section className="container py-3">
        <div className="row g-4">

          <div className="col-md-6">
            <div className="p-4 border rounded-3 h-100">
              <h3>What is NiveshX?</h3>

              <p className="text-muted mt-3 mb-0">
                NiveshX brings investment information and tools together
                in one simple platform, making it easier to explore
                stocks, mutual funds, ETFs, and more.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 border rounded-3 h-100">
              <h3>Vision</h3>

              <p className="text-muted mt-3 mb-0">
                Our goal is to create a simple and user-friendly
                investing experience that helps people understand
                and explore financial markets.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Why NiveshX */}
      <section className="container py-5">

        <h2 className="text-center mb-0">
          Why NiveshX?
        </h2>

        <div className="row text-center g-4">

          <div className="col-md-4">
            <div className="p-3">
              <h4>Simple</h4>
              <p className="text-muted">
                A clean and easy-to-use platform for exploring investments.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3">
              <h4>Clear</h4>
              <p className="text-muted">
                Understand different investment options with clear information.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3">
              <h4>Accessible</h4>
              <p className="text-muted">
                Explore multiple investment opportunities in one place.
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Hero;