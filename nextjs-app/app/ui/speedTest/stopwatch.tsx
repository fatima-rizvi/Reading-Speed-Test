import React, { useState, useEffect } from "react";
import styles from '../home.module.css';
import { Link, Tooltip } from "@nextui-org/react";
import { CalculatorIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { getReadingSpeedCalcResult } from "@/app/dashboard/sharedFunctions/utils";

export default function Stopwatch () {
    
    const [showPassage, setShowPassage] = useState(false);

    const [time, setTime] = useState(0);
  
    const [isRunning, setIsRunning] = useState(false);

    const [wordsPerMinute, setWordsPerMinute] = useState<number>(0);

    const [isRedo, setIsRedo] = useState(false);

    const CalcIcon = CalculatorIcon;
  
    useEffect(() => {
      let intervalId: number | NodeJS.Timeout | undefined;
      if (isRunning) {
        // setting time from 0 to 1 every 10 millisecond using javascript setInterval method
        intervalId = setInterval(() => setTime(time + 1), 10);
      }
      return () => clearInterval(intervalId);
    }, [isRunning, time]);
    
    const hours = Math.floor(time / 360000);
  
    const minutes = Math.floor((time % 360000) / 6000);
  
    const seconds = Math.floor((time % 6000) / 100);
  
    const milliseconds = time % 100;
  
    const startTimer = () => {
        setTime(0);
        setIsRunning(!isRunning);
        setShowPassage(true);
        setIsRedo(true);
    };

    const stopTimer = () => {
        setShowPassage(false);
        setIsRunning(!isRunning);
        calculateReadingSpeed(time);
    };

    /** Call util to calculate the reading speed */
    async function calculateReadingSpeed(timeSpentReading: number) {
        const seconds = Math.floor((timeSpentReading % 6000) / 100);
        const result = await getReadingSpeedCalcResult(330, seconds)    // 330 is the legnth of the passage below
        setWordsPerMinute(result);
    }

    return (
      <div>
        <div className={`${styles.timerbuttonsContainer}`}>
            {isRedo ?
                <>
                    {isRunning ?
                        <button className={`${styles.timerbuttonsContainer} ${styles.stop}`} onClick={stopTimer}>
                            Stop
                        </button>
                        :
                        <Tooltip key='danger' color='danger' content='WARNING: Re-starting the timer will erase your previous result. Write down your reading speed if you want to keep it.' className="capitalize">
                            <button className={`${styles.timerbuttonsContainer} ${styles.start}`} onClick={startTimer}>
                                Redo
                            </button>
                        </Tooltip>
                    }
                </>
                :
                <>
                    {isRunning ?
                        <button className={`${styles.timerbuttonsContainer} ${styles.stop}`} onClick={stopTimer}>
                            Stop
                        </button>
                        :
                        <button className={`${styles.timerbuttonsContainer} ${styles.start}`} onClick={startTimer}>
                            Start
                        </button>
                    }
                </>
            }
        </div>
        {
            showPassage &&
            <div>
                <hr />
                <br />
                <p>It was a matter of chance that I should have rented a house in one of the strangest communities in North America. It was on that slender riotous island which extends itself due east of New York — and where there are, among other natural curiosities, two unusual formations of land. Twenty miles from the city a pair of enormous eggs, identical in contour and separated only by a courtesy bay, jut out into the most domesticated body of salt water in the Western hemisphere, the great wet barnyard of Long Island Sound. They are not perfect ovals — like the egg in the Columbus story, they are both crushed flat at the contact end — but their physical resemblance must be a source of perpetual confusion to the gulls that fly overhead. To the wingless a more arresting phenomenon is their dissimilarity in every particular except shape and size. </p>
                <br />
                <p>I lived at West Egg, the — well, the less fashionable of the two, though this is a most superficial tag to express the bizarre and not a little sinister contrast between them. My house was at the very tip of the egg, only fifty yards from the Sound, and squeezed between two huge places that rented for twelve or fifteen thousand a season. The one on my right was a colossal affair by any standard — it was a factual imitation of some Hotel de Ville in Normandy, with a tower on one side, spanking new under a thin beard of raw ivy, and a marble swimming pool, and more than forty acres of lawn and garden. It was Gatsby’s mansion. Or, rather, as I didn’t know Mr. Gatsby, it was a mansion inhabited by a gentleman of that name. My own house was an eyesore, but it was a small eyesore, and it had been overlooked, so I had a view of the water, a partial view of my neighbor’s lawn, and the consoling proximity of millionaires — all for eighty dollars a month.</p>
            </div>
        }
        {(time > 0 && isRunning === false) &&
            <div>
                <p className={`${styles.time}`}>
                    Time: {hours}h {minutes.toString().padStart(2, "0")}m {seconds.toString().padStart(2, "0")}s {milliseconds.toString().padStart(2, "0")}ms
                </p>
                <p className={`text-center mt-8 text-m md:text-m`}>Your reading speed is:</p>
                <p className={`${styles.results}`}>{wordsPerMinute} WPM</p>
                <p className={`text-center mb-2 text-m md:text-m`}>(words per minute)</p>
                <div className={`${styles.calculatorButtonContainer}`}>
                    <Tooltip key='secondary' color='secondary' content="Write down your WPM and navigate to the Reading Time Calculator" className="capitalize">
                        <Link
                        key="Reading Time Calculator"
                        href="/dashboard/calculator"
                        className={clsx(
                            'gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-end md:p-2 md:px-3'
                        )}
                        >
                        <CalcIcon className="w-6" />
                            <p className="hidden md:block">Next: Go to the Reading Time Calculator</p>
                        </Link>
                    </Tooltip>
                </div>
            </div>
        }
      </div>
    );
  };