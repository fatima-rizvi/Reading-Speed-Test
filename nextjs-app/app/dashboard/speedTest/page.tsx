'use client'

import Stopwatch from "@/app/ui/speedTest/stopwatch";

export default function Page() {

    return (
        <>
            <h1 className={`text-center mb-2 text-2xl md:text-2xl font-bold underline underline-offset-2`}>Reading Speed Test</h1>
            <h2 className={`mb-2 text-2m md:text-2m font-bold underline underline-offset-2`}>Instructions: </h2>
            <p>When you're ready, click the start button below. A passage will load on the page for you to read, and the timer will start. Once you've finished reading, click the stop button to stop the timer and calculate your reading speed.</p>
            <div>
                <Stopwatch />
            </div>
            <br />
        </>
    );
}