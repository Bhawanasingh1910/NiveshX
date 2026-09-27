import React from 'react'
function Hero() {
  return (
   
    <div className="container text-center py-5">

      <h1 className="fw-semibold">
        Powerful tools for every investor
      </h1>

      <p className="lead text-muted mt-3">
        Explore a simple and intuitive platform to track markets, discover investments, and manage your portfolio.
      </p>

      <p className="mt-3">
        Explore our{" "}
        <a
          href="/products"
          className="text-decoration-none"
          style={{ color: "#6d36b5" }}
        >
          investment solutions →
        </a>
      </p>

    </div>
  );
}



export default Hero;