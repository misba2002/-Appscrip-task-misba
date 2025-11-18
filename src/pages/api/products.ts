import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "User-Agent": "NetlifyServerlessFunction", // important for Netlify
      },
    });

    if (!response.ok) {
      throw new Error(`External API failed with status ${response.status}`);
    }

    const data = await response.json();

    return res.status(200).json(data);

  } catch (error: any) {
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
