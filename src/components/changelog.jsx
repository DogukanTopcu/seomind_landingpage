import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Changelog = () => {
  return (
    <div className='bgColorChangelog flex justify-between h-[64px] items-center px-5 mt-4'>
      <h1 className='changelogText'>NEW CHANGELOG !</h1>
      <h1 className='changelog'>WE CREATED A NEW TEAM STRUCTURE 🚀</h1>
      <div className='flex items-center justify-center readChangelog'>
        READ CHANGELOG <ArrowForwardIosIcon sx={{ fontSize: 12, marginLeft: 1 }} />
      </div>
    </div>
  )
}

export default Changelog