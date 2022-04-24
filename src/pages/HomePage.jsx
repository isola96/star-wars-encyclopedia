import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
 
const HomePage = () => {
    return (
        <>
            <h1>Welcome to the Star Wars Encyclopedia</h1>

            <Button variant="primary" as={Link} to="/search">Search me, you must</Button>
        </>
    )
}

export default HomePage