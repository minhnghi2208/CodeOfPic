export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, dob, tob, sex } = req.body;

    if (!name || !dob || !tob || !sex) {
      return res.status(400).json({ error: "Thiếu thông tin" });
    }
    /* eslint-disable */
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "Missing OpenAI API Key" });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: `
Bạn là thầy bói tử vi phương Đông.
Chỉ trả về JSON thuần, KHÔNG markdown, KHÔNG giải thích.

Dữ liệu:
- Tên: ${name}
- Ngày sinh: ${dob}
- Giờ sinh: ${tob}
- Giới tính: ${sex}

JSON bắt buộc:
{
  "CongDanh": "",
  "TinhDuyen": "",
  "SoMayMan": "",
  "MauHop": ""
}
        `,
      }),
    });

    const data = await response.json();

    const text = data.output_text;
    const result = JSON.parse(text);

    res.status(200).json(result);
  } catch (err) {
    console.error("Boi tu vi error:", err);
    res.status(500).json({ error: "Server error" });
  }
}
