import Container from 'react-bootstrap/Container'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import HomePage from './pages/HomePage'
import SearchStarWars from './pages/SearchStarWars'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/search" element={<SearchStarWars />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
