import SwapiAPI from '../services/SWAPI'
import { useState, useEffect } from "react"
import { Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../helpers/index'

const Person = () => {
    const [person, setPerson] = useState("")
    const { id } = useParams()
    const [films, setFilms] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    // Get one person
    const getPerson = async (id) => {
        setLoading(true) 
        try {
            const data = await SwapiAPI.getOnePerson(id)
            setPerson(data)
            setFilms(data.films)
            setLoading(false)
        } catch (err) {
            setError(err.message)
        }
    }

    // Get person from API when component is first mounted
    useEffect(() => {
        getPerson(id)
    }, [id])

    return (
        <>
            {error && {error}}

            {loading && !person && (
                <h3>Loading...</h3>
            )}

            {person && (
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

                                    <Col className="cardColRight">
                                        {films.map(films => (
                                            <Link   
                                                to={`/films/${getIdFromUrl(films)}`} 
                                                key={getIdFromUrl(films)}>
                                                <li>Film {getIdFromUrl(films)}</li>
                                            </Link>
                                        ))} 
                                    </Col>
                                </Row>
                            </div>
                            <div className='buttonWrapper'>
                                <Button 
                                    className="btn"
                                    primary="dark" 
                                    as={Link} 
                                    to={'/people'}
                                >Back</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default Person