import React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Usage = () => {
    return (
        <div className='relative z-10 flex justify-center items-center mb-5'>
          <div className='box box1'>Join the Waitlist</div>
          <div className='arrow'><p className='absolute -mt-0.5'><ArrowForwardIcon /></p></div>
          <div className='box box2'>Input Your Domain</div>
          <div className='arrow'><p className='absolute -mt-0.5'><ArrowForwardIcon /></p></div>
          <div className='box box3'>Analysis your  product with AI</div>
          <div className='arrow'><p className='absolute -mt-0.5'><ArrowForwardIcon /></p></div>
          <div className='box box4'>Increase your SEO rate</div>
        </div>
    )
}


const Hero = () => {
  return (
    <div>
      <div className='elipses absolute flex justify-center items-center mt-72 left-0 w-screen z-0'>
        <div className='elipse elipse-1'></div>
        <div className='elipse elipse-2'></div>
        <div className='elipse elipse-3'></div>
        <div className='elipse elipse-4'></div>
      </div>
      <div className='flex justify-center flex-col items-center mt-12 relative z-10'>
        <h2 className='genericText'>STARTUP CENTRIC ALL IN ONE</h2>
        <h1 className='mainTitle'>Seo Management Software</h1>
        <h2 className='genericText'>Big SEO results for startups</h2>

        <button className='mainWaitlist'>JOIN THE WAITLIST</button>
      </div>
      <Usage />
    </div>
  )
}

export default Hero