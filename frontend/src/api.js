const API_URL = process.env.REACT_APP_API_URL;
const EMAIL_USERID = process.env.USER_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;

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

export const handleSubmit = (e) => 
{
	e.preventDefault(); // Prevents default refresh by the browser
	emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
	.then((result) => {
		console.log("Message Sent, We will get back to you shortly", result.text);
	},
	(error) => {
		console.log("An error occurred, Please try again", error.text);
	});
	
};

export const 