import { Outlet, Link } from 'react-router-dom'

function Layout() {
	return (
		<div className='container'>
			<h1>Siia tulevad postitused</h1>
			<nav>
				<ul>
					<li>
						<Link to='/'>Esileht</Link>
					</li>
					<li>
						<Link to='/kontakt'>Kontakt</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</div>
	)
}
export default Layout
