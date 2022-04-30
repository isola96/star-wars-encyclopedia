import SwapiApi from "../services/SWAPI"
import { getIdFromUrl } from '../helpers/index'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'

const Films = () => {
    const [films, setFilms] = useState("")
    const [page, setPage] = useState(1)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    // Get films from API
	const getFilmsFromSwapi = async () => {
        setLoading(true)
        try {
            const data = await SwapiApi.getFilms()
		    setFilms(data)
            setLoading(false)
        } catch (err) {
            setError(err.message)
        }
	}

    // Get films from API when component is first mounted
	useEffect(() => {
		getFilmsFromSwapi()
	}, [])  

    return (
       <>
        <h1>Films</h1>
        <Row xs={1} md={2} lg={3}>
        {error && {error}}

        {loading && !films && (
            <p>Loading...</p>
        )}

        {films && films.results.map((film, index) => (
            <Col key={index}>
                <div className="card"> 
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
        <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="prev">
                <Button
                    disabled={page === 1}
                    onClick={() => setPage(prevValue => prevValue - 1)}
                    variant="primary"
                >Previous Page</Button>
            </div>
            <div className="page">{page}</div>
            <div className="next">
                <Button
                    disabled={page + 1 >= page}
                    onClick={() => setPage(prevValue => prevValue + 1)}
                    variant="primary"
                >Next Page</Button>
            </div>
        </div>
        </>
    )
}

export default Films