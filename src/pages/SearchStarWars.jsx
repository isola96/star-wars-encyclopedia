import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SearchStarWars = () => {
  return (
    <>
      <h1>👽🔎🛸</h1>
      <Form>
        <Form.Group>
          <Form.Label>Search Query</Form.Label>
          <Form.Control
            placeholder="Enter your search query here"
            type="text"
          />
        </Form.Group>
        
        <div className="d-flex justify-content-between">
          <Button variant="success" type="submit">Search</Button>
        </div>
      </Form>
    </>
  )
}

export default SearchStarWars
