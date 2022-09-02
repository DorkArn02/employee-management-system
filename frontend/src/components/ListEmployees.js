import { Box, Heading, VStack, Button, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navigation } from './Navigation'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { getEmployees, removeEmployee } from '../api/EmployeeApi'
import { useNavigate } from 'react-router-dom'

export const ListEmployees = () => {

    const [data, setData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const response = await getEmployees()
            setData(response)
        }
        getData()
    }, [data])

    const removeEmployeeC = async (id) => {
        const response = await removeEmployee(id)
        console.log(response)
    }

    return (
        <>
            <Navigation />
            <VStack justify={"center"}>
                <Box>
                    <Heading size={{ base: "base", sm: "sm", md: "md", lg: "lg" }} fontWeight={"md"}>List of employees</Heading>
                </Box>
                <Box>
                    <TableContainer >
                        <Button onClick={() => navigate('/addEmployee')} size="sm" mb={5} variant={"outline"} colorScheme={"cyan"}>Add new employee</Button>
                        <Table size={"sm"} variant='striped'>
                            <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>First name</Th>
                                    <Th>Last name</Th>
                                    <Th>Email</Th>
                                    <Th>Country</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data && data.map(item => {
                                    return (
                                        <Tr key={item.id}>
                                            <Td>{item.id}</Td>
                                            <Td>{item.first_name}</Td>
                                            <Td>{item.last_name}</Td>
                                            <Td>{item.email}</Td>
                                            <Td>{item.country}</Td>
                                            <Td>
                                                <HStack>
                                                    <Button onClick={() => navigate(`/editEmployee/${item.id}`)} variant={"outline"} colorScheme="blue">Edit</Button>
                                                    <Button onClick={() => removeEmployeeC(item.id)} variant={"outline"} colorScheme="red">Delete</Button>
                                                </HStack>
                                            </Td>
                                        </Tr>)
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </VStack>
        </>
    )
}
