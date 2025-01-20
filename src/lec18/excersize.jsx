// Implement countdown 'timer with useeffects
// pass arry of string as arguments  convert array to unnoderd list  


import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(5 * 60); 

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Clear interval on unmount
    }
  }, [timeLeft]);

 
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return <div>Time Left: {formatTime(timeLeft)}</div>;
}

export default CountdownTimer;
