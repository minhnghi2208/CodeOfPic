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

        // 🔒 BẮT BUỘC MODEL TRẢ JSON
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "boi_tu_vi",
            schema: {
              type: "object",
              properties: {
                CongDanh: { type: "string" },
                TinhDuyen: { type: "string" },
                SoMayMan: { type: "string" },
                MauHop: { type: "string" },
              },
              required: ["CongDanh", "TinhDuyen", "SoMayMan", "MauHop"],
            },
          },
        },

        input: [
          {
            role: "system",
            content: "Bạn là thầy bói tử vi.",
          },
          {
            role: "user",
            content: `Tên: ${name}
Ngày sinh: ${dob}
Giờ sinh: ${tob}
Giới tính: ${sex}`,
          },
        ],
      }),
    });

    const data = await response.json();

    // ✅ LẤY JSON AN TOÀN
    const result =
      data.output_parsed ||
      data.output?.[0]?.content?.find(
        (c) => c.type === "output_json"
      )?.json;

    if (!result) {
      throw new Error("No JSON returned from OpenAI");
    }

    res.status(200).json(result);
  } catch (err) {
    console.error("Boi tu vi error:", err);
    res.status(500).json({ error: "Không thể xem tử vi lúc này" });
  }
}
