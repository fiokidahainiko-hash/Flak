export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if(req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { url } = req.body;

  if(!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await fetch("https://tikwm.com/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        url: url,
        hd: "1"
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch(error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
}
