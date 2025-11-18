import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Mozilla/5.0",    
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch from external API" });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err: any) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}
