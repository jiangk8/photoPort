const API_URL = process.env.REACT_APP_API_URL;

export const getImages = async (tag, max_results, nextCursor) => {
	const params = new URLSearchParams();
    params.append(`max_results`, max_results)

	if (nextCursor) {
		params.append('next_cursor', nextCursor);
	}

	if (tag){
		params.append('tag', tag);
	}

	const response = await fetch(`${API_URL}/photos?${params}`);
	const responseJson = await response.json();

    //console.log("json response")
    //console.log(responseJson)

	return responseJson;
};

export const getTagImages = async (tag, max_results, nextCursor) => {
	const params = new URLSearchParams();

	params.append(`tag`, tag);

	params.append(`max_results`, max_results)

	if (nextCursor) {
		params.append('next_cursor', nextCursor);
	}

	const response = await fetch(`${API_URL}/tagPhotos?${params}`);
	const responseJson = await response.json();

	return responseJson;
};