import React, { useEffect } from 'react'

function ProgressBar({ name, percentage, logo }) {
  return (
    <div className="flex justify-center items-center space-x-3 m-4">
      <div>
        <img src={logo} alt="" className="h-10 w-10" />
      </div>
      <div className={``}>
        <div className="flex ">
          <div className="flex-grow">{name}</div>
          <div>{percentage}%</div>
        </div>
        <div className="rounded-md bg-gray-200  dark:bg-gray-800" style={{width : 200}}>
          <div
            className={`rounded-md bg-blue-500 p-2 dark:bg-blue-400 `}
            style={{ width: percentage * 2}}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
