'use client'
import styles from '../../ui/home.module.css';

import { useState } from "react";

// interface IFormInputs  {
//     wordCount: number;
//     readingSpeed: number;
// }

export default function Page() {
      
    const [wordCount, setWordCount] = useState(0);
    const [readingSpeed, setReadingSpeed] = useState(0);
    const [timeToRead, setTimeToRead] = useState<string>("");

    const onSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        // @ts-expect-error
        calculateReadingTime(formJson.wordCount, formJson.readingSpeed)
    }

    const calculateReadingTime = (numberOfWords: string, wpm: string) => {
        console.log(`Words: ${numberOfWords}`)
        console.log(`Wpm: ${wpm}`)
        let numWords = parseInt(numberOfWords)
        let numWpm = parseInt(wpm)

        console.log(`Num Words: ${numberOfWords}`)
        console.log(`Num Wpm: ${wpm}`)
        let totalMinutes = Math.floor(numWords / numWpm)

        console.log(`totalMinutes: ${totalMinutes}`)
        let hours = Math.floor(totalMinutes / 60)
        let minutesToSubtract = hours * 60
        let minutes = totalMinutes - minutesToSubtract

        console.log(`Hours: ${hours}, Minutes: ${minutes}`)
        setTimeToRead(`${hours} hours, ${minutes} minutes`)
    }
    
    return (
        <>
            <h1 className={`text-center mb-2 text-2xl md:text-2xl font-bold underline underline-offset-2`}>Reading Time Calculator</h1>
            <h2 className={`mb-2 text-2m md:text-2m font-bold underline underline-offset-2`}>Instructions: </h2>
            <p>Enter the number of words you want to read and your reading speed below:</p>
            <br />
            <form onSubmit={onSubmit}>
                <div className={`${styles.input}`}>
                    <p>Word count:
                    </p>
                        <input 
                            type="number" 
                            name="wordCount"
                            value={wordCount}
                            // @ts-expect-error
                            onChange={e => setWordCount(e.target.value)}
                        />
                </div>
                <div className={`${styles.input}`}>
                    <p>Reading speed (words per minute):
                    </p>
                        <input 
                            type="number" 
                            name="readingSpeed"
                            value={readingSpeed}
                            // @ts-expect-error
                            onChange={e => setReadingSpeed(e.target.value)}
                        />
                </div>
                <input type="submit" className={`${styles.submitButton}`}/>
            </form>
            {
                timeToRead &&
                <div>
                    <h1 className={`mb-2 text-xl md:text-xl font-bold`}>Estimated time to read: {timeToRead}</h1>
                </div>
            }
        </>
    );
}