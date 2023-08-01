import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar name="Pete" src="https://i.pravatar.cc/150?img=7" size="2xl"/>
      <Heading as='h1' size='sm' noOfLines={1}>{greeting}</Heading>
      <br/>
      <Heading as='h2' size='2xl' noOfLines={1}>{bio1}</Heading>
      <Heading as='h2' size='2xl' noOfLines={1}>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
