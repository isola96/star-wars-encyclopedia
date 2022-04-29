import Swapi from '../services/SWAPI'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'
import { getIdFromUrl } from '../helpers/index'

const People = () => {
    const [people, setPeople] = useState("")
    const [page, setPage] = useState(1)

    // Get people from API
    const getPeople = async (page) => {
            const data = await Swapi.getPeople(page)
            setPeople(data)
        }

    // Get people from API when component is first mounted
    useEffect(() => {
        getPeople(page)
    }, [page])

    return (
        <>
            <h1>People</h1>
            <Row xs={1} md={2} lg={3}>

            {people && people.results.map((person) => (
                <Col>
                    <div className="card"> 
                        <div className="cardHeader">
                            <h3>{person.name}</h3>
                        </div>
                        <div className="cardBody">
                            <Row>
                                Gender: {person.gender}
                            </Row>
                            <Row>
                                Born: {person.birth_year}
                            </Row>
                            <Row>
                                In: {person.films.length} films
                            </Row>
                        </div>

                        <div className='buttonWrapper'>
                            <Button 
                                variant="primary" 
                                as={Link} 
                                to={`/people/${getIdFromUrl(person.url)}`}
                            >Read more</Button>
                        </div>
                    </div>
                </Col>
            ))}
            </Row>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="prev">
                    <Button
                        disabled={!people.previous || page <= 1}
                        onClick={() => setPage(prevValue => prevValue - 1)}                        
                        variant="primary"
                    >Previous Page</Button>
                </div>
                <div className="page">{page}</div>
                <div className="next">
                    <Button
                        disabled={!people.next || page >= 9}
                        onClick={() => setPage(prevValue => prevValue + 1)}
                        variant="primary"
                    >Next Page</Button>
                </div>
		    </div>
        </>
    )
}

export default People