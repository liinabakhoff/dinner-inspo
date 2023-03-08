const APIBase = 'https://cdn.contentful.com'
const spaceID = 'wuzmt0q7cwlf'
const contentDeliveryAPIAccessToken = 'gc3Ezndu6LV0rsUXqd8hyX4xlOof1inGvKSGfmJnVtg'
const endPoint = `/spaces/${spaceID}/environments/master/entries?access_token=${contentDeliveryAPIAccessToken}`

async function loadEntries() {
	const result = await fetch(APIBase + endPoint)
	const andmed = await result.json()
	return andmed
}

export { loadEntries }
