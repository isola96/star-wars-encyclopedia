import SwapiAPI from '../services/SWAPI'
import { useState, useEffect } from "react"
import { Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../helpers/index'

const FilmInfo = () => {
    const [film, setFilm] = useState([])
    const { id } = useParams()
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    // Get one film
    const getFilm = async (id) => {
        setLoading(true) 
        try {
            const data = await SwapiAPI.getOneFilm(id)
            setFilm(data)
            setCharacters(data.characters)
            setLoading(false)
        } catch (err) {
            setError(err.message)
        }
	}

    // Get film from API when component is first mounted
	useEffect(() => {
		getFilm(id)
	}, [id])

    return (
        <>
            {error && {error}}

            {loading && !film && (
                <h3>Loading...</h3>
            )}

            {film && (
                <Row>
                    <Col>
                        <div className="card">
                            <div className="cardHeader"><h2>{film.title}</h2></div>
                            <div className="cardBody">
                                <Row className="cardRow" md={3}>
                                    <Col className="cardColLeft">
                                        <p>Episode: </p>
                                    </Col>
                                    <Col className="cardColRight">
                                        <p>{film.episode_id}</p>
                                    </Col>
                                </Row>

                                <Row className="cardRow" md={3}>
                                    <Col className="cardColLeft">
                                        <p>Director: </p>
                                    </Col>
                                    <Col className="cardColRight">
                                        <p>{film.director}</p>
                                    </Col>
                                </Row>

                                <Row className="cardRow" md={3}>
                                    <Col className="cardColLeft">
                                        <p>Producer: </p>
                                    </Col>
                                    <Col className="cardColRight">
                                        <p>{film.producer}</p>
                                    </Col>
                                </Row>

                                <Row className="cardRow"  md={3}>
                                    <Col className="cardColLeft">
                                        <p>Release date: </p>
                                    </Col>
                                    <Col className="cardColRight">
                                        <p>{film.release_date}</p>
                                    </Col>
                                </Row>

                                <Row className="cardRow" md={1}>
                                    <Col>
                                        <h3>Characters in this film:</h3>
                                    </Col>
                                </Row>

                                <Row className="cardRow" md={3}>
                                    <Col className="cardColLeft">
                                        <p>Characters</p>
                                    </Col>

                                    <Col className="cardColRight">
                                        {characters.map(character => (
                                            <Link to={`/people/${getIdFromUrl(character)}`} key={character}>
                                                <li>Character {getIdFromUrl(character)}</li>
                                            </Link>
                                        ))} 
                                    </Col>
                                </Row>
                            </div>
                            <div className='buttonWrapper'>
                                <Button 
                                    className="btn" 
                                    variant="outline-dark"
                                    as={Link} 
                                    to={'/films'}
                                >Back</Button>
                            </div>
                        </div>
                    </Col>
                </Row>  
            )}
        </>
    )
}

export default FilmInfo