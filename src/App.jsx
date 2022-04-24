import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navigation from './components/Navigation'

// Pages
import HomePage from './pages/HomePage'
import Films from './pages/Films'
import Film from './pages/Film'
import People from './pages/People'
import Person from './pages/Person'

// Styling
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/people" element={<People />} />
					<Route path="/films" element={<Films />} />
					<Route path="/films/:id" element={<Film />} />
					<Route path="/people/:id" element={<Person />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
