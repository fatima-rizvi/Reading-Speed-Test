'use client'

import { Button, Modal, ModalContent, ModalBody, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import styles from "../ui/home.module.css";

export default function Page() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure(); 
    const [modal, setModal] = useState<{name: string, header: string, description: string}>();
    const modals = [
        {
            name: "Click Here for Directions",
            header: "Directions: ",
            description: "If you don't know your reading speed, use the Reading Speed Test first in order to get the necessary information to use the Reading Time Calculator"
        },
        {
            name: "Reading Speed Test: ",
            header: "How it works: ",
            description: "Can calculate your reading speed. You will be presented with a passage to read. The time it takes you to read the passage and the number of words in the passage will be used to calculate how many words you can read per minute."
        },
        {
            name: "Reading Time Calculator: ",
            header: "How it works: ",
            description: "Can calculate how long it will take you to read a book. To find the estimated time, enter the number of words in the book you want to read and enter your reading speed. The calculator will determine how long it will take to read it."
        }
    ]

    const handleOpen = ( selectedModal: {name: string, header: string, description: string} ) => {     
        setModal(selectedModal)
        onOpen();
      }

    return (
        <>
            <h1 className={`text-center mb-2 text-2l md:text-2xl font-bold underline underline-offset-2`}>Features</h1>
            <div className={styles.directionsContainer}>
                <Button key={modals[0].name}onPress={()=>handleOpen(modals[0])} className={`m-2 ${styles.directionsButton}`}>{modals[0].name}</Button> 
            </div>
            <h2 className={`text-start mb-2 text-2l md:text-2l italic`}>Navigate to the listed tools using the navigation tabs</h2>
            <ol className={styles.featuresListContainer}>
                <li className={`mb-2 text-2m md:text-2m font-bold`}>
                    {modals[1].name}<Button key={modals[1].name}onPress={()=>handleOpen(modals[1])} className={`m-2`}>Click for Description</Button> 
                </li>
                <li className={`mb-2 text-2m md:text-2m font-bold`}>
                    {modals[2].name}<Button key={modals[2].name}onPress={()=>handleOpen(modals[2])} className={`m-2`}>Click for Description</Button> 
                </li>
            </ol>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>  
                <ModalContent>
                    {
                        (onClose)=>(
                            <>
                                <ModalHeader className="flex flex-col gap-1">{modal?.header}</ModalHeader> 
                                <ModalBody>
                                    <p>{modal?.description}</p>
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
        </>
    );
}