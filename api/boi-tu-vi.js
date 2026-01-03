export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, dob, tob, sex } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Bạn là thầy bói tử vi. Chỉ trả về JSON hợp lệ, không markdown, không giải thích. JSON gồm: CongDanh, TinhDuyen, SoMayMan, MauHop.",
          },
          {
            role: "user",
            content: `
Tên: ${name}
Ngày sinh: ${dob}
Giờ sinh: ${tob}
Giới tính: ${sex}
            `,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const result = JSON.parse(data.choices[0].message.content);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "OpenAI error" });
  }
}
