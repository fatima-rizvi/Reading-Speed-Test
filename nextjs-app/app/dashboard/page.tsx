import { lusitana } from "../ui/fonts";

export default function Page() {
    return (
        <>
            <h1 className={`text-center mb-2 text-2xl md:text-2xl font-bold underline underline-offset-2`}>How it works:</h1>
            <h2 className={`mb-2 text-2m md:text-2m font-bold underline underline-offset-2`}>Reading Speed Test: </h2>
            <p>Can calculate your reading speed. You will be presented with a passage to read. The time it takes you to read the passage and the number of words in the passage will be used to calculate how many words you can read per minute.</p>
            <br />
            <h2 className={`mb-2 text-2m md:text-2m font-bold underline underline-offset-2`}>Reading Time Calculator: </h2>
            <p>Can calculate how long it will take you to read a book. To find the estimated time, enter the number of words in the book you want to read and enter your reading speed. The calculator will determine how long it will take to read it.</p>
        </>
    );
}