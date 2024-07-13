"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Button, Lorem } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
   <>
    <Box m={110} bgColor="red" alignItems="center">
      <h1>Hola mundo</h1>
    </Box>
    <Box>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    <Box>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>
            <h1>Titulo</h1>
          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <p>fguioaheswpifhaesupifhuiseahfiasehfihase9o8fashe9pouifshe</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
   </>
  );
}
