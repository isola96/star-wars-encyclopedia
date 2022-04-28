import SwapiAPI from '../services/SWAPI'
import { useState, useEffect } from "react"
import { Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Film = () => {
    const [film, setFilm] = useState([])
    const { id } = useParams()

    // Get one film
    const getFilm = async () => {
        const data = await SwapiAPI.getOneFilm(id)
        setFilm(data)
	}

    // Get film from API when component is first mounted
	useEffect(() => {
		getFilm(id)
	}, [id])

    return (
        <>
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
                        </div>
                        <div className='buttonWrapper'>
                            <Button 
                                className="btn" 
                                as={Link} 
                                to={'/films'}
                            >Back</Button>
                        </div>
                    </div>
                </Col>
            </Row>  
            
        </>
    )
}

export default Film