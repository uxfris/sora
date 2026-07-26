import {
  UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  smoothStream,
  streamText,
  toUIMessageStream,
} from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const MAX_MESSAGES = 10;
  const recentMessages = messages.slice(-MAX_MESSAGES);

  const result = streamText({
    model: "inclusionai/ling-3.0-flash-free",
    instructions: "You are a helpful assistant",
    messages: await convertToModelMessages(recentMessages),
    experimental_transform: smoothStream({
      delayInMs: 20, // Optional: defaults to 10ms
      chunking: "line", // Optional: options are 'word' or 'line' (defaults to 'word')
    }),
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
