import React from 'react'

import './extra.css'
function Content({ htmldata }) {

  return (
    <div className='flex-1 bg-[#fff] mt-2 mx-5 rounded-2xl '>
      <div className='flex items-center justify-between px-4'>
        <div className='py-2 flex items-center gap-4 '>
          <div>
            <div dangerouslySetInnerHTML={{ __html: htmldata }} className='myclass pb-16 max-h-[700px] overflow-y-scroll' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
