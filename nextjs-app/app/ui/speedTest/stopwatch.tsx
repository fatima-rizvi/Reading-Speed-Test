import React, { useState, useEffect } from "react";
import styles from '../home.module.css';
import { lusitana } from "../fonts";

export default function Stopwatch () {
    // state to store time
    const [time, setTime] = useState(0);
  
    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);

    // state to store result
    const [finalResult, setFinalResult] = useState<number>(0);

    // state to store readingSpeed
    const [wordsPerMinute, setWordsPerMinute] = useState<number>(0);
  
    useEffect(() => {
      let intervalId: number | NodeJS.Timeout | undefined;
      if (isRunning) {
        // setting time from 0 to 1 every 10 millisecond using javascript setInterval method
        intervalId = setInterval(() => setTime(time + 1), 10);
      }
      return () => clearInterval(intervalId);
    }, [isRunning, time]);
    
    // Hours calculation
    const hours = Math.floor(time / 360000);
  
    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);
  
    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);
  
    // Milliseconds calculation
    const milliseconds = time % 100;
  
    // Method to start timer
    const startTimer = () => {
        setTime(0)
        setIsRunning(!isRunning);
    };

    // Method to stop timer
    const stopTimer = () => {
        setIsRunning(!isRunning);
        setFinalResult(time)
        calculateTime(time)
        console.log(`stopTimer: ${time}`)
        console.log(finalResult) // this is not ready yet, but it may be ready in time to send to the api
    };

    const calculateTime = (timeSpentReading: number) => {
        const seconds = Math.floor((timeSpentReading % 6000) / 100);
        let minutes = Math.floor((timeSpentReading % 360000) / 6000);
        let wordsPerSecond = 330 / seconds;
        let wordsPerMinute = wordsPerSecond * 60
        setWordsPerMinute(wordsPerMinute);
    }

    return (
      <div>
        <div className={`${styles.timerbuttonsContainer}`}>
            {isRunning ?
                <button className={`${styles.timerbuttonsContainer} ${styles.stop}`} onClick={stopTimer}>
                    Stop
                </button>
                :
                <button className={`${styles.timerbuttonsContainer} ${styles.start}`} onClick={startTimer}>
                    Start
                </button>
            }
        </div>
        {(time > 0 && isRunning === false) &&
            <div>
                <p className={`${styles.time}`}>
                    Time: {hours}h {minutes.toString().padStart(2, "0")}m {seconds.toString().padStart(2, "0")}s {milliseconds.toString().padStart(2, "0")}ms
                </p>
                <p className={`text-center mt-8 text-m md:text-m`}>Your reading speed is:</p>
                <p className={`${styles.results}`}>{wordsPerMinute} WPM</p>
                <p className={`text-center mb-2 text-m md:text-m`}>(words per minute)</p>
            </div>
        }
      </div>
    );
  };