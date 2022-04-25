import { useState, useEffect } from "react"
import axios from "axios"
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../helpers/index'

const Films = () => {
    const [films, setFilms] = useState([])
    const [page, setPage] = useState(1)

    // Get films from API
	const getFilms = async () => {
        try {
			const res = await axios.get('https://swapi.dev/api/films')
			const data = res.data.results
			setFilms(data)
			return data
		} catch (err) {
			return { message: err.message }
		}
	}

    // Get films from API when component is first mounted
	useEffect(() => {
		getFilms()
	}, [])

    return (
       <>
        <h1>Films</h1>
        <div className='d-flex flex-wrap justify-content-center'>
            {films.map(film => (
                <div key={film.episode_id} className='card border-secondary m-3 col-3'>
                    <div className='card-header'>
                        <h2>{film.title}</h2>
                    </div>
                    <div className='card-body'>
                        <p className='text-dark'>
                            <span>Episode: </span>
                            {film.episode_id}
                        </p>
                        <hr />
                        <p className='text-dark'>
                            <span>Released: </span>
                            {film.release_date}
                        </p>
                        <hr />
                        <p className='text-dark'>
                            <span>Characters: </span>
                            {film.characters.length}
                        </p>
                        <Button 
                            variant="primary" 
                            as={Link} 
                            to={`/films/${getIdFromUrl(film.url)}`}
                        >Read more</Button>
                    </div>
                </div>
            ))}
        </div>
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