import SwapiAPI from '../services/SWAPI'
import { useState, useEffect } from "react"
import { Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Person = () => {
    const [person, setPerson] = useState("")
    const { id } = useParams()

    // Get one person
    const getPerson = async () => {
        const data = await SwapiAPI.getOnePerson(id)
        setPerson(data)
    }

    // Get person from API when component is first mounted
    useEffect(() => {
        getPerson(id)
    }, [id])

    return (
        <>
            <Row>
                <Col>
                <div className="card">
                        <div className="cardHeader"><h2>{person.name}</h2></div>
                        <div className="cardBody">
                            <Row className="cardRow" md={1}>
                                <Col>
                                    <h3>Attributes </h3>
                                </Col>
                            </Row>

                            <Row className="cardRow" md={3}>
                                <Col className="cardColLeft">
                                    <p>Gender </p>
                                </Col>
                                <Col className="cardColRight">
                                    <p>{person.gender}</p>
                                </Col>
                            </Row>

                            <Row className="cardRow" md={3}>
                                <Col className="cardColLeft">
                                    <p>Birth year </p>
                                </Col>
                                <Col className="cardColRight">
                                    <p>{person.birth_year}</p>
                                </Col>
                            </Row>

                            <Row className="cardRow" md={3}>
                                <Col className="cardColLeft">
                                    <p>Height </p>
                                </Col>
                                <Col className="cardColRight">
                                    <p>{person.height}</p>
                                </Col>
                            </Row>

                            <Row className="cardRow"  md={3}>
                                <Col className="cardColLeft">
                                    <p>Mass </p>
                                </Col>
                                <Col className="cardColRight">
                                    <p>{person.mass}</p>
                                </Col>
                            </Row>

                            <Row className="cardRow"  md={3}>
                                <Col className="cardColLeft">
                                    <p>Hair color </p>
                                </Col>
                                <Col className="cardColRight">
                                    <p>{person.hair_color}</p>
                                </Col>
                            </Row>

                            <Row className="cardRow"  md={3}>
                                <Col className="cardColLeft">
                                    <p>Skin color </p>
                                </Col>
                                <Col className="cardColRight">
                                    <p>{person.skin_color}</p>
                                </Col>
                            </Row>

                            <Row className="cardRow"  md={3}>
                                <Col className="cardColLeft">
                                    <p>Eye color </p>
                                </Col>
                                <Col className="cardColRight">
                                    <p>{person.eye_color}</p>
                                </Col>
                            </Row>

                            <Row className="cardRow" md={1}>
                                <Col>
                                    <h3>Links </h3>
                                </Col>
                            </Row>

                            <Row className="cardRow"  md={3}>
                                <Col className="cardColLeft">
                                    <p>Films </p>
                                </Col>
                            </Row>
                        </div>
                        <div className='buttonWrapper'>
                            <Button 
                                className="btn" 
                                as={Link} 
                                to={'/persons'}
                            >Back</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Person