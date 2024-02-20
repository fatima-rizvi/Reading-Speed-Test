'use client'

import Stopwatch from "@/app/ui/speedTest/stopwatch";
import { useState } from "react";

export default function Page() {
    const [showPassage, setShowPassage] = useState(false);

    return (
        <>
            <h1 className={`text-center mb-2 text-2xl md:text-2xl font-bold underline underline-offset-2`}>Reading Speed Test</h1>
            <h2 className={`mb-2 text-2m md:text-2m font-bold underline underline-offset-2`}>Instructions: </h2>
            <p>When you're ready, click the start button below. A passage will load on the page for you to read, and the timer will start. Once you've finished reading, click the stop button to stop the timer and calculate your reading speed.</p>
            <div onClick={() => setShowPassage(!showPassage)}>
                <Stopwatch />
            </div>
            <br />
            {/* Note, passage below is 330 words */}
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
        </>
    );
}