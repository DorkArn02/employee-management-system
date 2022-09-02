import { VStack, Heading, Box, FormControl, FormLabel, Input, Button, Flex, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editEmployee, getEmployeeById } from '../api/EmployeeApi'
import { Navigation } from './Navigation'

export const EditEmployee = () => {

    const [data, setData] = useState({})
    const toast = useToast()
    const navigate = useNavigate()

    const { id } = useParams()

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const getData = async () => {
            const response = await getEmployeeById(id)
            setData(response)
        }
        getData()
    }, [id])

    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await editEmployee(id, data)
        console.log(response)

        toast({
            title: 'Success',
            description: "Employee's data has been set.",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        navigate('/')
    }
    return (
        <>
            <Navigation />
            <VStack justify={"center"}>
                <Box>
                    <Heading mb={5} size={{ base: "base", sm: "sm", md: "md", lg: "lg" }} fontWeight={"md"}>Edit employee's details</Heading>
                    <form onSubmit={onSubmit}>
                        <Flex direction={"column"} gap={5}>
                            <FormControl isRequired>
                                <FormLabel>First name</FormLabel>
                                <Input defaultValue={data.first_name} onChange={handleInput} name="first_name" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Last name</FormLabel>
                                <Input defaultValue={data.last_name} onChange={handleInput} name="last_name" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input defaultValue={data.email} onChange={handleInput} name="email" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Country</FormLabel>
                                <Input defaultValue={data.country} onChange={handleInput} name="country" type='text' />
                            </FormControl>
                            <FormControl>
                                <Button type="submit" width="100%">Edit</Button>
                            </FormControl>
                        </Flex>
                    </form>
                </Box>
            </VStack>
        </>
    )
}
