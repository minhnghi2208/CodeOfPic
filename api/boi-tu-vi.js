/* eslint-env node */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, dob, tob, sex } = req.body;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://code-of-pic.vercel.app", // domain của bạn
          "X-Title": "Boi Tu Vi App",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-8b-instruct:free",
          messages: [
            {
              role: "system",
              content:
                "Bạn là thầy bói tử vi. CHỈ trả về JSON hợp lệ. KHÔNG markdown. KHÔNG giải thích.",
            },
            {
              role: "user",
              content: `
Tên: ${name}
Ngày sinh: ${dob}
Giờ sinh: ${tob}
Giới tính: ${sex}

JSON bắt buộc:
{
  "CongDanh": "",
  "TinhDuyen": "",
  "SoMayMan": "",
  "MauHop": ""
}
            `,
            },
          ],
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();

    console.log("OPENROUTER RAW:", JSON.stringify(data, null, 2));

    const text = data.choices?.[0]?.message?.content;
    if (!text) throw new Error("No text returned");

    const result = JSON.parse(text.trim());

    res.status(200).json(result);
  } catch (err) {
    console.error("Boi tu vi error:", err);
    res.status(500).json({ error: "Không thể xem tử vi lúc này" });
  }
}
