import React from 'react'
function Stats() {
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col-6 p-5">
          <h2 className="mb-5">Invest with confidence</h2>
            <div className="mb-4">
              <h5>Built for investors</h5>
              <p>NiveshX is designed to make investing simple, clear, and accessible for everyone.</p>
            </div>

            <div className="mb-4">
              <h5>Simple, not complicated</h5>
              <p>No confusing screens or unnecessary distractions. Get the information you need and invest at your own pace.</p>
            </div>

            <div className="mb-4">
              <h5>Everything in one place</h5 >
              <p>Explore stocks, mutual funds, ETFs, bonds, and more through one easy-to-use platform.</p>
            </div>

            <div className="mb-4">
              <h5>Make smarter decisions</h5>
              <p>Track your investments, understand market trends, and stay informed so you can make better financial decisions.</p>
            </div>

        </div>

        <div className="col-6">
          <img src="media/images/ecosystem.png" className="img-fluid" alt="Ecosystem" />
          <div className="text-center p-4" >
            <a href="/pricing" className='mx-5' style={{ color: "#6d36b5"}}>Explore Our Product <span>→</span></a>
            <a href="/pricing"  style={{ color: "#6c2fbd" }}>Try Kite Demo <span>→</span></a>
          </div>
        </div>

      </div>      
    </div>
  )
}
export default Stats;