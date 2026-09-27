import React from 'react'

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" className="img-fluid" alt="Largest Broker" />
        </div>
        <div className="col-6 mt-3">
          <h2>Invest in India’s growing markets</h2>
          <p>Thousands of investors use NiveshX to explore and manage their investments across:</p>
        

            <div className="row">
              <div className="col-6"> 
                <ul>
                  <li className='mb-2'>Stocks & IPOs</li>
                  <li className='mb-2'>Futures and Options</li>
                  <li className='mb-2'>Mutual Funds</li>
                </ul>

              </div>

              <div className="col-6">
                <ul>
                  <li className='mb-2'>Bonds and ETFs</li>
                  <li className='mb-2'>Government Securities</li>
                  <li className='mb-2'>More investment opportunities</li>
                </ul>

              </div>
            </div>
            <img src="media/images/bottom.png" className="img-fluid mt-5" alt="Bottom" />
        </div>
      </div>
      <div className="row p-8">
        
      </div>
      
    </div>
  )
}
export default Awards;