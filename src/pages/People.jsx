import axios from "axios"
import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../helpers/index'

const People = () => {
    const [people, setPeople] = useState([])
    const [page, setPage] = useState(1)

    // Get people from API
    const getPeople = async () => {
        try {
            const res = await axios.get('https://swapi.dev/api/people')
            const data = res.data.results
            setPeople(data)
            return data
        } catch (err) {
            return { message: err.message }
        }
    }

    // Get people from API when component is first mounted
    useEffect(() => {
        getPeople()
    }, [])

    console.log(people)

    return (
        <>
            <h1>People</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                {people.map(person => (
                    <div key={person.name} className='card border-secondary m-3 col-3'>
                        <div className='card-header'>
                            <h2>{person.name}</h2>
                        </div>
                        <div className='card-body'>
                            <p className='text-dark'>
                                <span>Gender: </span>
                                {person.gender}
                            </p>
                            <hr />
                            <p className='text-dark'>
                                <span>Born: </span>
                                {person.birth_year}
                            </p>
                            <hr />
                            <p className='text-dark'>
                                <span>In: </span>
                                {person.films.length}
                            </p>
                            <Button 
                                variant="primary" 
                                as={Link}
                                to={`/people/${getIdFromUrl(person.url)}`}
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

export default People