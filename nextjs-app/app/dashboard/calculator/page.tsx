'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip, useDisclosure } from '@nextui-org/react';
import styles from '../../ui/home.module.css';

import { useState } from "react";
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function Page() {
      
    const [wordCount, setWordCount] = useState(0);
    const [readingSpeed, setReadingSpeed] = useState(0);
    const [timeToRead, setTimeToRead] = useState<string>("");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const InfoIcon = InformationCircleIcon;

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
            <Button key='instructions' onPress={onOpen} className={`m-2`}>Click for Instructions</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>  
                <ModalContent>
                    {
                        (onClose)=>(
                            <>
                                <ModalHeader className="flex flex-col gap-1">How it works:</ModalHeader> 
                                <ModalBody>
                                    <p>Enter the number of words you want to read and your reading speed in the provided form.</p>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="primary" onPress={onClose}>   
                                    Close
                                </Button>
                                </ModalFooter>
                            </>
                        )
                    }
                </ModalContent>
            </Modal>
            <br />
            <form onSubmit={onSubmit}>
                <div className={`${styles.input}`}>
                    <label
                        className={clsx(
                            'flex items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3'
                        )}
                    >
                        <p className="hidden md:block">Word count: </p>
                        <Tooltip key='wordCountInfo' color='secondary' content="The word count of the book or passage you want to read">
                            <InfoIcon className="w-6" />
                        </Tooltip>
                    </label>
                    <input 
                        type="number" 
                        name="wordCount"
                        value={wordCount}
                        // @ts-expect-error
                        onChange={e => setWordCount(e.target.value)}
                    />
                </div>
                <div className={`${styles.input}`}>
                    <label
                        className={clsx(
                            'flex items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3'
                        )}
                    >
                        <p className="hidden md:block">Reading Speed (WPM): </p>
                        <Tooltip key='wordCountInfo' color='secondary' content="Words Per Minute">
                            <InfoIcon className="w-6" />
                        </Tooltip>
                    </label>
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