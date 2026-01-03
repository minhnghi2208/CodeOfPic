/* eslint-env node */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, dob, tob, sex } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content:
              "Bạn là thầy bói tử vi. CHỈ trả về JSON hợp lệ, KHÔNG markdown, KHÔNG giải thích.",
          },
          {
            role: "user",
            content: `Tên: ${name}
Ngày sinh: ${dob}
Giờ sinh: ${tob}
Giới tính: ${sex}

JSON gồm:
{
  "CongDanh": "",
  "TinhDuyen": "",
  "SoMayMan": "",
  "MauHop": ""
}`,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    // 🔍 DEBUG – CỰC QUAN TRỌNG
    console.log("OPENAI RAW RESPONSE:", JSON.stringify(data, null, 2));

    // ✅ LẤY TEXT Ở MỌI TRƯỜNG HỢP
    let text =
      data.output_text || data.output?.[0]?.content?.find((c) => c.text)?.text;

    if (!text) {
      throw new Error("OpenAI returned no text");
    }

    // 🧼 PHÒNG MODEL TRẢ THÊM CHỮ
    text = text.trim();

    const json = JSON.parse(text);

    res.status(200).json(json);
  } catch (err) {
    console.error("Boi tu vi error:", err);
    res.status(500).json({ error: "Không thể xem tử vi lúc này" });
  }
}
