
import React from 'react'

function RightSection({
  imageUrl,
  Pname,
  Pdescription,
  trydemo,
  learnmore,
  googleplay,
  appstore
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center py-5">

        {/* Content */}
        <div className="col-12 col-md-6 px-md-5 order-2 order-md-1">

          <h1 className="fw-semibold mb-4">
            {Pname}
          </h1>

          <p className="text-muted fs-5 lh-lg mb-4">
            {Pdescription}
          </p>

          {/* Links */}
          <div className="mb-4">
            <a
              href={trydemo}
              className="text-decoration-none me-4 fw-semibold"
            >
              Try Demo →
            </a>

            <a
              href={learnmore}
              className="text-decoration-none fw-semibold"
            >
              Learn More →
            </a>
          </div>

          {/* App Buttons */}
          <div className="d-flex gap-3 align-items-center">
            <a href={googleplay}>
              <img
                src="media/images/googlePlay.png"
                alt="Google Play"
                style={{ width: "140px" }}
              />
            </a>

            <a href={appstore}>
              <img
                src="media/images/appStore.png"
                alt="App Store"
                style={{ width: "140px" }}
              />
            </a>
          </div>

        </div>

        {/* Image */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-1 order-md-2">
          <img
            src={imageUrl}
            alt={Pname}
            className="img-fluid"
            style={{ maxWidth: "90%", maxHeight: "400px" }}
          />
        </div>

      </div>
    </div>
  )
}

export default RightSection

