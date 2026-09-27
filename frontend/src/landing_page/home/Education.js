import React from 'react'
function Education() {
  return (
    <div className="container p-5 ">
      <div className="row">

        <div className="col-6 p-5">
          <img src="media/images/varsity.png" className="img-fluid" alt="varsityBook" />
        </div>

        <div className="col-6 p-5">
          <h3 className="mb-5">Free & open market education</h3>
            <div className="mb-4">
              <p className="mb-3">The largest online stock market education book in the world, covering everything from basics to advanced trading.</p>
              <a href="/pricing" className='mx-1' style={{ color: "#6d36b5"}}>Varsity <span>→</span></a>
            </div>

            <div className="mb-4">
              <p className="mb-3">The most active trading and investment community in India, for market-related queries.</p>
              <a href="/pricing" className='mx-1' style={{ color: "#6d36b5"}}>TradingQ&A <span>→</span></a>
            </div>

        </div>

        

      </div>      
    </div>
  )
}
export default Education;