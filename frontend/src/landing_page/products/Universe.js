
import React from 'react'

function Universe() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-semibold">
          Explore the NiveshX Universe
        </h1>

        <p className="text-muted fs-5 mt-3">
          Discover different ways to invest, diversify your portfolio,
          and grow your financial knowledge.
        </p>
      </div>

      <div className="row g-4">

        {/* Stocks */}
        <div className="col-12 col-md-4">
          <div className="border rounded-4 p-4 h-100">
            <h3 className="fw-semibold mb-3">
              Stocks
            </h3>

            <p className="text-muted">
              Explore companies, track stock prices, and build your
              portfolio with stocks that match your investment goals.
            </p>

            
          </div>
        </div>

        {/* Mutual Funds */}
        <div className="col-12 col-md-4">
          <div className="border rounded-4 p-4 h-100">
            <h3 className="fw-semibold mb-3">
              Mutual Funds
            </h3>

            <p className="text-muted">
              Discover mutual funds across different categories and
              explore options for building a diversified portfolio.
            </p>

          </div>
        </div>

        {/* ETFs */}
        <div className="col-12 col-md-4">
          <div className="border rounded-4 p-4 h-100">
            <h3 className="fw-semibold mb-3">
              ETFs
            </h3>

            <p className="text-muted">
              Explore exchange-traded funds and understand how they
              can add diversification to your investment strategy.
            </p>

          </div>
        </div>

        {/* IPOs */}
        <div className="col-12 col-md-4">
          <div className="border rounded-4 p-4 h-100">
            <h3 className="fw-semibold mb-3">
              IPOs
            </h3>

            <p className="text-muted">
              Keep track of upcoming and ongoing IPOs and explore
              newly listed companies.
            </p>

          </div>
        </div>

        {/* Bonds */}
        <div className="col-12 col-md-4">
          <div className="border rounded-4 p-4 h-100">
            <h3 className="fw-semibold mb-3">
              Bonds
            </h3>

            <p className="text-muted">
              Learn about bonds and fixed-income opportunities as
              another way to diversify your investments.
            </p>

          </div>
        </div>

        {/* Government Securities */}
        <div className="col-12 col-md-4">
          <div className="border rounded-4 p-4 h-100">
            <h3 className="fw-semibold mb-3">
              Government Securities
            </h3>

            <p className="text-muted">
              Explore government-backed securities and understand
              their role in a diversified investment portfolio.
            </p>

          </div>
        </div>

      </div>


    </div>
  )
}

export default Universe
