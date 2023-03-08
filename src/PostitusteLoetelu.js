import { Link } from 'react-router-dom'
function PostitusteLoetelu({ postitused }) {
	console.log('postitused: ', postitused)
	if (postitused?.length < 1) {
		return <div>Laen postitusi</div>
	}
	return (
		<div>
			{postitused.map((element, index) => {
				return (
					<div className='postitus' key={index}>
						<div>
							<h3>{element.title}</h3>
						</div>
						<div>
							<Link to={'/uudis/' + index}>Loe edasi</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default PostitusteLoetelu
