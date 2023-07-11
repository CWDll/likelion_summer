import React, { useState, useEffect } from 'react';

function Timer() {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const targetTime = new Date();
    //오늘의 24:00:00으로 설정 -> setHours(hour, min, sec, millisec)
    targetTime.setHours(24, 0, 0);

    //setInterval을 1000으로 설정해 1초마다 작동
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = targetTime.getTime() - currentTime.getTime();

      if (timeDiff <= 0) {
        clearInterval(interval);
        setRemainingTime('00:00:00');
      } else {
        //Math.floor은 소수점 버림을 하는 것임.
        //hour은 1000ms(1초) * 60 * 60
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setRemainingTime(
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        );

        //초가 0으로 돌아올 때마다 1분 지났다는 콘솔 메시지 출력
        if(seconds == 0) console.log("1분이 지났다..");
      }
      
    }, 1000);
    
    //컴포넌트가 언마운트되거나 업데이트되기 직전에 실행 -> clearInterval로 setInterval
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
        <p>오늘이</p>
        <div style={{ fontWeight: 'bold' }}>{remainingTime}</div>
        <p>밖에 안 남았다니..</p>
    </>
  )
}

export default Timer;
