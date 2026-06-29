const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const RAPIDAPI_KEY = "a61865140amsh2b788b410ad67c4p13a010jsn53967ea9e494";

app.use(express.static("public"));

app.get("/download", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.json({ error: "Instagram URL do" });
  }

  try {
    const response = await axios.get(
      "https://instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com/convert",
      {
        params: { url: url },
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": "instagram-downloader-download-instagram-stories-videos4.p.rapidapi.com"
        }
      }
    );

    res.json({
      status: "success",
      data: response.data
    });

  } catch (error) {
    res.json({
      status: "error",
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log("Server port 3000 par chal raha hai");
});