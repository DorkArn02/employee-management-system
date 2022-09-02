import { VStack, Heading, Box, FormControl, FormLabel, Input, Button, Flex, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { addNewEmployee } from '../api/EmployeeApi'
import { Navigation } from './Navigation'

export const AddEmployee = () => {

    const [data, setData] = useState({})
    const toast = useToast()

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const resp = await addNewEmployee(data)
        console.log(resp)
        toast({
            title: 'Success',
            description: "Employee has been added.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return (
        <>
            <Navigation />
            <VStack justify={"center"}>
                <Box>
                    <Heading mb={5} size={{ base: "base", sm: "sm", md: "md", lg: "lg" }} fontWeight={"md"}>Add a new employee</Heading>
                    <form onSubmit={onSubmit}>
                        <Flex direction={"column"} gap={5}>
                            <FormControl isRequired>
                                <FormLabel>First name</FormLabel>
                                <Input onChange={handleInput} name="first_name" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Last name</FormLabel>
                                <Input onChange={handleInput} name="last_name" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input onChange={handleInput} name="email" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Country</FormLabel>
                                <Input onChange={handleInput} name="country" type='text' />
                            </FormControl>
                            <FormControl>
                                <Button type="submit" width="100%">Add</Button>
                            </FormControl>
                        </Flex>
                    </form>
                </Box>
            </VStack>
        </>
    )
}
