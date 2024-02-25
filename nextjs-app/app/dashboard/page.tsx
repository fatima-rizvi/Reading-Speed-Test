'use client'

import { Button, Modal, ModalContent, ModalBody, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { lusitana } from "../ui/fonts";
import { SetStateAction, useState } from "react";

export default function Page() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure(); 
    const [feature, setFeature] = useState<{name: string, description: string}>();
    const features = [
        {
            name: "Reading Speed Test: ",
            description: "Can calculate your reading speed. You will be presented with a passage to read. The time it takes you to read the passage and the number of words in the passage will be used to calculate how many words you can read per minute."
        },
        {
            name: "Reading Time Calculator: ",
            description: "Can calculate how long it will take you to read a book. To find the estimated time, enter the number of words in the book you want to read and enter your reading speed. The calculator will determine how long it will take to read it."
        }
    ]

    const handleOpen = ( selectedFeature: {name: string, description: string} ) => {     
        setFeature(selectedFeature)
        onOpen();
      }

    return (
        <>
            <h1 className={`text-center mb-2 text-2xl md:text-2xl font-bold underline underline-offset-2`}>Features</h1>
            {features.map((f)=>(  
                <li className={`mb-2 text-2m md:text-2m font-bold`}>
                    {f.name}<Button key={f.name}onPress={()=>handleOpen(f)} className={`m-2`}>Click for Description</Button> 
                </li>
                   
            ))}  
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>  
                <ModalContent>
                    {
                        (onClose)=>(
                            <>
                                <ModalHeader className="flex flex-col gap-1">How it works:</ModalHeader> 
                                <ModalBody>
                                    <p>{feature?.description}</p>
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