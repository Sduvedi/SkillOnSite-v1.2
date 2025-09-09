import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message) {
    return new Response(JSON.stringify({ error: "Missing message" }), { status: 400 });
  }

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });

    const reply = response.choices[0].message.content;
    return new Response(JSON.stringify({ reply }));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error generating reply" }), { status: 500 });
  }
}
