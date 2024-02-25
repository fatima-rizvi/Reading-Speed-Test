'use client'

import Stopwatch from "@/app/ui/speedTest/stopwatch";
import { Button, Chip, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import styles from "../../ui/home.module.css"

export default function Page() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
            {/* <h2 className={`mb-2 text-2m md:text-2m font-bold underline underline-offset-2`}>Instructions: </h2>
            <p>When you're ready, click the start button below. A passage will load on the page for you to read, and the timer will start. Once you've finished reading, click the stop button to stop the timer and calculate your reading speed.</p> */}
            <br />
            <div>
                <Stopwatch />
            </div>
        </>
    );
}