import React from 'react'

const DashboardTitle = ({text}) => {
  return (
    <div className='text-center sm:text-left p-4 sm:text-[36px] font-bold text-[24px] text-gray-one'>
        <h2>
            {text}
        </h2>

    </div>
  )
}

export default DashboardTitle