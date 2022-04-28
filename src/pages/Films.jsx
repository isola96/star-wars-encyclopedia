import SwapiApi from "../services/SWAPI"
import { getIdFromUrl } from '../helpers/index'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'

const Films = () => {
    const [films, setFilms] = useState("")

    // Get films from API
	const getFilmsFromSwapi = async () => {
        const data = await SwapiApi.getFilms()
		setFilms(data)
	}

    // Get films from API when component is first mounted
	useEffect(() => {
		getFilmsFromSwapi()
	}, [])  

    return (
       <>
        <h1>Films</h1>
            <Row xs={1} md={2} lg={3}>
            {films && films.results.map((film) => (
                <Col>
                    <div key={film.episode_id} className="card"> 
                        <div className="cardHeader">
                            <h3>{film.title}</h3>
                        </div>

                        <div className="cardBody">
                            <Row>
                                Episode {film.episode_id}
                            </Row>
                            <Row>
                                Released {film.release_date}
                            </Row>
                            <Row>
                                {film.characters.length} characters
                            </Row>
                        </div>

                        <div className='buttonWrapper'>
                            <Button 
                                variant="primary" 
                                as={Link} 
                                to={`/films/${getIdFromUrl(film.url)}`}
                            >Read more</Button>
                        </div>
                    </div>
                </Col>
            ))}
            </Row>
        </>
    )
}

export default Films