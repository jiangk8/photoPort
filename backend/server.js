const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(json());

const { parsed: config } = dotenv.config();

const BASE_URL = `https://api.cloudinary.com/v1_1/dewiz62o5`;

const auth = {
  username: "373622281636534",
  password: "cBibY-9tmcREnTytfVV-f6O0Cwg",
};

app.get("/photos", async (req, res) => {
  const response = await axios.get(BASE_URL + "/resources/image", {
    auth,
    params: {
      next_cursor: req.query.next_cursor,
      max_results: req.query.max_results,
      tag: req.query.tag,
    },
  });
  return res.send(response.data);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
