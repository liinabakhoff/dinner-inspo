import { useParams } from 'react-router-dom'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

function Postitus({ postitused }) {
	const { uudis_id } = useParams()
	if (postitused?.length < 1) {
		return <div>Laen postitusi</div>
	}
	const postitus = postitused[uudis_id]
	console.log('postitus', postitus)
	return (
		<div>
			<h1>Postitus {postitus.title}</h1>
			<p>{postitus.loomine}</p>
			<div>{documentToReactComponents(postitus.intro)}</div>
			<div>{documentToReactComponents(postitus.components)}</div>
			<div>{documentToReactComponents(postitus.instructions)}</div>
			<div>{documentToReactComponents(postitus.author)}</div>
		</div>
	)
}
export default Postitus
