import './App.css'
import { useEffect, useState } from 'react'
import { loadEntries } from './content'
import PostitusteLoetelu from './PostitusteLoetelu'
import Layout from './Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Kontakt from './Kontakt'
import Postitus from './Postitus'

function App() {
	const [andmed, setAndmed] = useState({
		postitused: [],
		error: '',
	})

	const laePostitused = (uuedPostitused) => {
		setAndmed((prevState) => {
			return { ...prevState, postitused: uuedPostitused }
		})
	}

	useEffect(() => {
		const laadimine = async () => {
			const tulemus = await loadEntries()
			let postitused = tulemus.items.filter((element) => {
				return element.sys.contentType.sys.id === 'dinnerInspo'
			})
			console.log(postitused)
			postitused = postitused.map((element) => {
				return { ...element.fields, loomine: element.sys.createdAt }
			})
			console.log(postitused)
			laePostitused(postitused)
		}
		laadimine()
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route
						index
						element={<PostitusteLoetelu postitused={andmed.postitused} />}
					></Route>
					<Route path='kontakt' element={<Kontakt />}></Route>
					<Route
						path='uudis/:uudis_id'
						element={<Postitus postitused={andmed.postitused} />}
					></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
