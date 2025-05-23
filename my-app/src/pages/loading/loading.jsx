import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className="flex-col gap-4 w-full flex items-center md:pt-[20%] pt-[80%] justify-center">
        <div
          className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
        >
          <div
            className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
          ></div>
        </div>
      </div>

    </div>
  )
}

export default Loading
