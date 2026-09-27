
import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
  return (
    <>
      <Hero />

      {/* 1. NiveshX Trading - Image Left */}
      <LeftSection
        imageUrl="media/images/productImage.png"
        Pname="Trade with clarity"
        Pdescription="Track stocks, monitor prices, analyze market movements, and manage your trades from one clean and intuitive interface."
        trydemo="/try-demo"
        learnmore="/learn-more"
        googleplay="/google-play"
        appstore="/app-store"
      />

      {/* 2. NiveshX Portfolio - Image Right */}
      <RightSection
        imageUrl="media/images/portfolio.png"
        Pname="Your investments, all in one place"
        Pdescription="Monitor your holdings, portfolio performance, orders, and investment history through a unified NiveshX dashboard."
        trydemo="/try-demo"
        learnmore="/learn-more"
        googleplay="/google-play"
        appstore="/app-store"
      />

      {/* 3. NiveshX Mutual Funds - Image Left */}
      <LeftSection
        imageUrl="media/images/mutualFunds.png"
        Pname="Invest beyond stocks"
        Pdescription="Explore mutual funds and build a diversified investment portfolio based on your financial goals and preferences."
        trydemo="/try-demo"
        learnmore="/learn-more"
        googleplay="/google-play"
        appstore="/app-store"
      />

      {/* 4. NiveshX Market Insights - Image Right */}
      <RightSection
        imageUrl="media/images/market.png"
        Pname="Understand the market before you invest"
        Pdescription="Follow market trends, explore company information, and discover useful insights to make more informed investment decisions."
        trydemo="/try-demo"
        learnmore="/learn-more"
        googleplay="/google-play"
        appstore="/app-store"
      />

      <Universe />
    </>
  )
}

export default ProductPage
