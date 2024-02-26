'use client'

import Stopwatch from "@/app/ui/speedTest/stopwatch";
import { Button, Chip, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip, useDisclosure } from "@nextui-org/react";
import styles from "../../ui/home.module.css"
import clsx from "clsx";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Page() {

    const [wordCount, setWordCount] = useState();
    const [time, setTime] = useState();
    const [timeToRead, setTimeToRead] = useState();

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const InfoIcon = InformationCircleIcon;

    const onSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        // @ts-expect-error
        calculateReadingSpeed(formJson.wordCount, formJson.time)
    }

    const calculateReadingSpeed = (wordCount: number, time: number) => {
        console.log(`wordCount: ${wordCount}`)
        console.log(`time: ${time}`)

        let wordsPerSecond = wordCount / time;
        let wordsPerMinute = Math.floor(wordsPerSecond * 60);
        // @ts-expect-error
        setTimeToRead(wordsPerMinute);

        console.log(`wordsPerMinute: ${wordsPerMinute}`)
    }

    return (
        <>
            <h1 className={`text-center mb-2 text-2xl md:text-2xl font-bold underline underline-offset-2`}>Reading Speed Test</h1>
            <div className={styles.chipContainer}>
                <Chip color="warning" variant="flat">WARNING:</Chip> <p className={`ml-2`}>Navigating away from this page or reloading it will erase your results. Write them down if you want to keep them.</p>
            </div>
            <Button key='instructions' onPress={onOpen} className={`m-2`}>Click for Instructions</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>  
                <ModalContent>
                    {
                        (onClose)=>(
                            <>
                                <ModalHeader className="flex flex-col gap-1">How it works:</ModalHeader> 
                                <ModalBody>
                                    <p>When you're ready, click the start button below. A passage will load on the page for you to read, and the timer will start. Once you've finished reading, click the stop button to stop the timer and calculate your reading speed.</p>
                                    <p>You can redo this test as many times as you want.</p>
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
            <div>
                <Stopwatch />
            </div>
            <br />
            <br />
            <h1 className={`text-left mb-2 text-l md:text-l font-bold underline underline-offset-2`}>Manual Input for Reading Speed Test</h1>
            <div className={styles.chipContainer}>
                <Chip color="primary" variant="flat">Note:</Chip> <p className={`ml-2`}>If you would rather manually enter your word count and time spent reading, you can use the form below to calculate your reading speed.</p>
            </div>
            <form onSubmit={onSubmit}>
                <div className={`${styles.input}`}>
                    <label
                        className={clsx(
                            'flex items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3'
                        )}
                    >
                        <p className="hidden md:block">1. Word count: </p>
                        <Tooltip key='wordCountInfo' color='secondary' content="The word count of the book or passage you have read">
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
                        <p className="hidden md:block">2. Time (seconds): </p>
                        <Tooltip key='wordCountInfo' color='secondary' content="TIme in seconds that it took you to read the number of words entered">
                            <InfoIcon className="w-6" />
                        </Tooltip>
                    </label>
                    <input 
                        type="number" 
                        name="time"
                        value={time}
                        // @ts-expect-error
                        onChange={e => setReadingSpeed(e.target.value)}
                    />
                </div>
                <Tooltip key='danger' color='danger' content='WARNING: Running a new calculation will erase your previous result. Write down your reading time if you want to keep it.' className="capitalize">
                    <input type="submit" className={`${styles.submitButton}`}/>
                </Tooltip>
            </form>
            {
                timeToRead &&
                <div>
                    <p className={`text-center mt-8 text-m md:text-m`}>Your reading speed is:</p>
                    <p className={`${styles.results}`}>{timeToRead} WPM</p>
                    <p className={`text-center mb-2 text-m md:text-m`}>(words per minute)</p>
                </div>
            }
        </>
    );
}