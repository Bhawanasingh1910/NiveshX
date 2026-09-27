import React from 'react'
function Hero() {
  return (
    <div className="container p-5 mb-5">
        <div className="row text-center">
            <img src="media/images/homeHero.png" alt="Hero" className="mb-5"/>

            <h1 className="mt-5">Invest smarter. Grow with confidence.</h1>
            <p>Build your portfolio with stocks, mutual funds, and more - all in one place.</p>
            <button className="p-2 btn btn-primary fs-5" style={{ backgroundColor: '#7848D0', borderColor: '#7038B8', width: "20%", margin: "0 auto"}}>Signup Now</button>

        </div>
      
    </div>
  )
}

export default Hero;