import emailjs from "@emailjs/browser";

const API_URL = "http://localhost:7000";
const EMAIL_USERID = "user_IJmALnqSMnD2mAqBXzJxq";
const TEMPLATE_ID = "template_hih80iq";
const SERVICE_ID = "service_wrld7cn";

export const getImages = async (tag, max_results, nextCursor) => {
  const params = new URLSearchParams();
  params.append(`max_results`, max_results);

  if (nextCursor) {
    params.append("next_cursor", nextCursor);
  }

  if (tag) {
    params.append("tag", tag);
  }

  const response = await fetch(`${API_URL}/photos?${params}`);
  const responseJson = await response.json();

  //console.log("json response")
  //console.log(responseJson)

  return responseJson;
};

export const handleSubmit = (form) => {
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, EMAIL_USERID).then(
    (result) => {
      console.log("Message Sent, We will get back to you shortly", result.text);
    },
    (error) => {
      console.log("ERROR ERROR ERROR ERROR");
      console.log("An error occurred, Please try again", error.text);
    }
  );
};
