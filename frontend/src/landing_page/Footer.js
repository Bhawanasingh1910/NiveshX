import React from "react";

function Footer() {
  return (
    <footer className="border-top mt-5 shadow-sm" style={{ backgroundColor: "#f7f2fce2" }}>
      <div className="container py-5">

        {/* Main Footer */}
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-4 mb-4">
            <img
              src="media/images/logoF.svg"
              alt="NiveshX Logo"
              width="170"
              height="70"
            />

            <p className="text-muted mt-2">
              NiveshX is a technology platform designed to make investing
              simple, clear, and accessible.
            </p>

            <p className="text-muted">
              Explore stocks, mutual funds, ETFs, and more in one place.
            </p>
          </div>

          <div className="col-md-1 mb-4"> </div>

          {/* Column 2 */}
          <div className="col-md-2 mb-4">
            <h5>Company</h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">About</li>
              <li className="mb-2">Products</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">NiveshX Blog</li>
              <li className="mb-2">Press & Media</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-2 mb-4">
            <h5>Support</h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">Contact</li>
              <li className="mb-2">Support Center</li>
              <li className="mb-2">Help & FAQs</li>
              <li className="mb-2">Downloads & Resources</li>
              <li className="mb-2">Terms & Conditions</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h5>Account</h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">Open an account</li>
              <li className="mb-2">Fund transfer</li>
              <li className="mb-2">NiveshX Challenge</li>
              <li className="mb-2">Account Settings</li>
            </ul>
          </div>

        </div>

        <hr />

        {/* Important Information */}
        <div className="row mt-4">

          <div className="col-md-8">
            <h5>Important Information</h5>

            <p className="text-muted mt-3 mb-0">
              Please read all applicable terms, conditions, and risk
              disclosures carefully before investing.
            </p>

            <p className="text-muted">
              Never share your passwords, OTPs, PINs, or other confidential
              account information with anyone.
            </p>
          </div>

        </div>

        <hr className="mt-4" />

        {/* Disclaimer */}
        <div className="mt-4">
          <h5>Disclaimer</h5>

          <p className="text-muted small">
            NiveshX is a student project created for educational and
            demonstration purposes. It does not provide financial,
            investment, or brokerage services. Investments in securities
            markets are subject to market risks. Please consult a qualified
            financial professional before making investment decisions.
          </p>
        </div>

        {/* Bottom */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <p className="text-muted small mb-0">
            © 2026 NiveshX. All rights reserved.
          </p>

          <p className="text-muted small mb-0">
            Made with care by NiveshX
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;