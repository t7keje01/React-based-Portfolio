import { Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack>
      <Box bg="white" borderRadius="10px" color="black">
        <Image 
          src={imageSrc}
          borderRadius="10px"
        />
        <Box p="15px" pr="50px">
          <Heading as="h1" size="sm" pb="15px">{title}</Heading>
          <Text color="grey" pb="15px">{description}</Text>
          <a>
            See more &nbsp;
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </Box>
      </Box>
    </VStack>
  )
};

export default Card;
