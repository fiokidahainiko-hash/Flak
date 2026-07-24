const https = require("https");
const http = require("http");

function fixUrl(url) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return "https://tikwm.com" + url;
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === "/api/download" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        const videoUrl = parsed.url;

        if (!videoUrl) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "URL is required" }));
          return;
        }

        const postData = `url=${encodeURIComponent(videoUrl)}&hd=1`;

        const options = {
          hostname: "tikwm.com",
          path: "/api/",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": Buffer.byteLength(postData),
            "User-Agent": "Mozilla/5.0"
          }
        };

        const request = https.request(options, (response) => {
          let data = "";
          response.on("data", (chunk) => { data += chunk; });
          response.on("end", () => {
            try {
              const result = JSON.parse(data);

              if (result.code === 0 && result.data) {
                result.data.play = fixUrl(result.data.play);
                result.data.wmplay = fixUrl(result.data.wmplay);
                result.data.music = fixUrl(result.data.music);
                result.data.cover = fixUrl(result.data.cover);
              }

              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify(result));
            } catch(e) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ error: "Invalid response from API" }));
            }
          });
        });

        request.on("error", (error) => {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: error.message }));
        });

        request.write(postData);
        request.end();

      } catch(e) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid request" }));
      }
    });

  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Flak API server running on port ${PORT}`);
});
