
import React from 'react'

function Brokerage() {
  return (
    <div className="container pb-5">

      {/* Intro Section */}
      <div className="text-center py-5 mb-5">
        <h1 className="fw-semibold mb-3">
          Invest smarter. Grow with confidence.
        </h1>

        <p className="text-muted fs-5 mx-auto mb-4" style={{ maxWidth: "650px" }}>
          Build and manage your portfolio with stocks, mutual funds,
          and more — all through one simple investment platform.
        </p>

        <button
          className="btn btn-primary px-4 py-2 fs-5"
          style={{
            backgroundColor: '#9169dc',
            borderColor: '#7848D0'
          }}
        >
          Sign Up Now
        </button>
      </div>


      {/* Pricing Cards */}
      <div className="row g-5">

        {/* Equity Delivery */}
        <div className="col-12 col-md-6 col-lg-3">
          <div
            className="border rounded-4 p-4 h-100 text-center"
            style={{ transition: "0.3s" }}
          >
            <img
              src="media/images/zero.png"
              alt="Zero brokerage"
              className="img-fluid mb-3"
              style={{ height: "90px" }}
            />

            <h5 className="fw-semibold">
              Equity Delivery
            </h5>

            <p className="text-muted mt-3 mb-0">
              Invest in stocks for the long term with
              zero brokerage in this project demo.
            </p>
          </div>
        </div>


        {/* Intraday */}
        <div className="col-12 col-md-6 col-lg-3">
          <div
            className="border rounded-4 p-4 h-100 text-center"
            style={{ transition: "0.3s" }}
          >
            <img
              src="media/images/twenty.png"
              alt="Twenty rupees brokerage"
              className="img-fluid mb-3"
              style={{ height: "100px" }}
            />

            <h5 className="fw-semibold">
              Intraday
            </h5>

            <p className="text-muted mt-3 mb-0">
              Flat pricing per executed order for
              intraday trading in this project demo.
            </p>
          </div>
        </div>


        {/* Futures */}
        <div className="col-12 col-md-6 col-lg-3">
          <div
            className="border rounded-4 p-4 h-100 text-center"
            style={{ transition: "0.3s" }}
          >
            <img
              src="media/images/twenty.png"
              alt="Twenty rupees brokerage"
              className="img-fluid mb-3"
              style={{ height: "100px " }}
            />

            <h5 className="fw-semibold">
              Futures
            </h5>

            <p className="text-muted mt-3 mb-0">
              Simple flat pricing for futures orders,
              along with applicable charges.
            </p>
          </div>
        </div>


        {/* Options */}
        <div className="col-12 col-md-6 col-lg-3">
          <div
            className="border rounded-4 p-4 h-100 text-center"
            style={{ transition: "0.3s" }}
          >
            <img
              src="media/images/twenty.png"
              alt="Twenty rupees brokerage"
              className="img-fluid mb-3"
              style={{ height: "100px" }}
            />

            <h5 className="fw-semibold">
              Options
            </h5>

            <p className="text-muted mt-3 mb-0">
              Flat pricing per executed options order
              in the NiveshX project demo.
            </p>
          </div>
        </div>

      </div>


      {/* Additional Charges */}
      <div className="mt-5 pt-5">

        <div className="text-center mb-4">
          <h2 className="fw-semibold">
            Understand your charges
          </h2>

          <p className="text-muted">
            A simple breakdown of pricing across investment products.
          </p>
        </div>

        <div className="table-responsive border rounded-4 overflow-hidden">

          <table className="table table-hover align-middle mb-0">

            <thead style={{ backgroundColor: "#f7f4fc" }}>
              <tr>
                <th className="p-3">Investment Type</th>
                <th className="p-3">Brokerage</th>
                <th className="p-3">Additional Charges</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="p-3">Equity Delivery</td>
                <td className="p-3 fw-semibold">₹0</td>
                <td className="p-3 text-muted">
                  Applicable statutory charges
                </td>
              </tr>

              <tr>
                <td className="p-3">Intraday</td>
                <td className="p-3 fw-semibold">₹20 / order</td>
                <td className="p-3 text-muted">
                  Applicable taxes and exchange charges
                </td>
              </tr>

              <tr>
                <td className="p-3">Futures</td>
                <td className="p-3 fw-semibold">₹20 / order</td>
                <td className="p-3 text-muted">
                  Applicable statutory charges
                </td>
              </tr>

              <tr>
                <td className="p-3">Options</td>
                <td className="p-3 fw-semibold">₹20 / order</td>
                <td className="p-3 text-muted">
                  Applicable statutory charges
                </td>
              </tr>

              <tr>
                <td className="p-3">Mutual Funds</td>
                <td className="p-3 fw-semibold">₹0</td>
                <td className="p-3 text-muted">
                  Applicable fund-related charges
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>



      {/* Project Disclaimer */}
      <p className="text-muted small text-center mt-4">
        * The pricing shown is for the NiveshX project demonstration
        and does not represent actual brokerage or regulatory charges.
      </p>

    </div>
  )
}

export default Brokerage
