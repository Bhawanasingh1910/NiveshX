import React from 'react'
function Pricing() {
  return (
    <div className="container p-5" >
      <div className="row">
        <div className="col-4">
          <h2 className="mb-4">Transparent pricing</h2>
          <p>Invest without confusing fees or hidden charges. NiveshX keeps pricing clear and easy to understand.</p>
          <a href="/pricing" className='mx-5' style={{ color: "#6d36b5"}}>See Price <span>→</span></a>
        </div>

        <div className="col-2">
        </div>

        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 p-4" style={{ border: "1px solid #635b5b"}}>
              <h1 className="mb-4">₹0</h1>
              <p>Zero charges on selected investments</p>
            </div>
            <div className="col-6 p-4" style={{ border: "1px solid #635b5b"}}>
              <h1 className="mb-4">₹20</h1>
              <p>Low fees on intraday and derivatives</p >
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Pricing;