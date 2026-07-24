export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    let videoUrl = req.query.url || (req.body && req.body.url);

    if (!videoUrl) {
      return res.status(400).json({ error: "URL is required" });
    }

    const tikwmResponse = await fetch("https://tikwm.com/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      body: `url=${encodeURIComponent(videoUrl)}&hd=1`
    });

    if (!tikwmResponse.ok) {
      return res.status(500).json({ error: "Failed to fetch from TikWM" });
    }

    const data = await tikwmResponse.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: "Function failed",
      message: error.message
    });
  }
}
