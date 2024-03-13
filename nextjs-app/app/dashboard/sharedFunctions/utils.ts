export const getReadingSpeedCalcResult = async (wordCount: number, secondsSpentReading: number) => {
    const req = { 
        time: secondsSpentReading,
        words: wordCount };
    const response = await fetch('http://localhost:3000/reading-speed-test', {
        mode: 'cors',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        },
        body: JSON.stringify(req)
    });
    const result = await response.json();
    return result.wordsPerMinute;
}