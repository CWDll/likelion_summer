import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
    // timer State 생성
    const [time, setTime] = useState(0);
    // isRunning State 생성
    const [isRunning, setIsRunning] = useState(false);

    
    useEffect(() => {
        
        // isRunning 이 true 이면 1초마다 time State 를 1씩 증가
        if (isRunning) {
        const timeoutId = setTimeout(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        // time 이 10이라면 
        if (time === 10) {
            // isRunning 을 false 로 변경
            setIsRunning(false);
            // time 을 0으로 변경
            setTime(0);
            // timeoutId 를 clearTimeout
            clearTimeout(timeoutId);
        }

        // isRunning 이 false 이면 clearTimeout
        // unmount될 때 사용하는 것. 이걸 해야 timer가 쌓이는 걸 없애고 같은 시간 기준으로 타이머 만들 수 있음.
        return () => {
            clearTimeout(timeoutId);
        };
        }
    }, [isRunning, time]);

    // Start 버튼 클릭 시 실행할 함수
    const handleStart = () => {
        setIsRunning(true);
    };

    return (
        <div>
        {isRunning ? (
            <>
                <h1>Time: {time} seconds</h1>
                <h2>남은 시간 : {10-time}</h2>
            </>
        ) : (
            <button onClick={handleStart}>타이머 시작</button>
        )}
        </div>
    );
};

export default TimerComponent;