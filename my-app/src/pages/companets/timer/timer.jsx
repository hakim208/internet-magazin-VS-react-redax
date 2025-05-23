import React, { useState, useEffect } from 'react'

const FlashSalesTimer = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const update = () => {
      const updated = calculateTimeLeft(targetDate)
      setTimeLeft(updated)

      if (
        updated.seconds <= 0 &&
        updated.minutes <= 0 &&
        updated.hours <= 0 &&
        updated.days <= 0
      ) {
        onComplete && onComplete()
      }
    }

    update()

    const timerId = setInterval(update, 1000)

    return () => clearInterval(timerId)
  }, [targetDate, onComplete])

  return (
    <div className="flex lg:flex-row flex-col justify-between">
      <div className="flex md:items-center space-x-2 md:flex-row flex-col  ">
        <h2 className="text-[40px] font-bold">Flash Sales</h2>
        <div className="flex items-end space-x-1">
          <TimerUnit label="Days" value={timeLeft.days}/>
          <Colon />
          <TimerUnit label="Hours" value={timeLeft.hours} />
          <Colon />
          <TimerUnit label="Minutes" value={timeLeft.minutes} />
          <Colon />
          <TimerUnit label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  )
}

const TimerUnit = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-xl font-bold">{padZero(value)}</span>
    <span className="text-xs text-gray-500">{label}</span>
  </div>
)

const Colon = () => <span className="text-xl font-bold mb-[0.3rem]">:</span>

function calculateTimeLeft(targetDate) {
  const difference = +new Date(targetDate) - +new Date()
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

function padZero(num) {
  return num.toString().padStart(2, '0')
}

export default FlashSalesTimer
