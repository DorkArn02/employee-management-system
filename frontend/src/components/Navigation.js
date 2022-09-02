import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navigation = () => {
    const navigate = useNavigate()
    return (
        <Flex mb={2} width={"100%"} flexDirection={{ base: "column", lg: "row" }} p={3} gap={5} boxShadow={"lg"} align={"center"}>
            <Box>
                <Heading fontWeight={"light"} size={{ base: "base", sm: "sm", md: "md", lg: "md" }}>Employee Management App</Heading>
            </Box>
            <Box>
                <Button onClick={() => navigate("/")} color={"gray.400"} variant={"ghost"}>Employees</Button>
            </Box>
        </Flex>
    )
}
