import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Container, Spinner, Table } from "react-bootstrap"
import { Link } from "react-router-dom"

function PeopleList({ apiURL }) {
    const [employees, setEmployees] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            const fetchEmployees = async () => {
                const response = await axios.get(apiURL)
                setEmployees(response.data)
                setIsLoading(false)
            }

            fetchEmployees()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const renderEmployees = employees.map((employee) => {
        return (
            <tr key={ employee._id }>
                <td>{ employee.name }</td>
                <td>{ employee.email }</td>
                <td>{ employee.department }</td>
                <td>{ employee.status }</td>
                <td>
                    <Button variant="info">
                        <Link className="nav-link" to={`/funcionarios/${employee._id}`}>Ver detalhes</Link>
                    </Button>
                </td>
            </tr>
        )
    })

    return (
        <Container>
            { isLoading && <Spinner animation="border" /> }
            { !isLoading &&
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Endereço de E-mail</th>
                        <th>Departamento</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { renderEmployees }
                </tbody>
            </Table>
            }
        </Container>
    )
}

export default PeopleList