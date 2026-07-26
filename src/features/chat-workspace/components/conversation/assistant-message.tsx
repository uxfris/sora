"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeBlock } from "@/features/chat-workspace/components/codeBlock";
import { UIMessage, useChat } from "@ai-sdk/react";
import { ChatStatus } from "ai";

// Extend the default sanitize schema so the extra tags LLM output tends to
// use (definition lists, collapsible sections, KaTeX spans) survive
// sanitization instead of being stripped.
const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames || []),
    "details",
    "summary",
    "dl",
    "dt",
    "dd",
    "sup",
    "sub",
  ],
  attributes: {
    ...defaultSchema.attributes,
    // KaTeX output relies on span/math class + style attributes; allow them
    // through so rehype-katex's markup isn't gutted by sanitization.
    span: [...(defaultSchema.attributes?.span || []), "className", "style"],
    div: [...(defaultSchema.attributes?.div || []), "className", "style"],
    code: [...(defaultSchema.attributes?.code || []), "className"],
  },
};

export type ConversationProps = {
  messages: UIMessage[];
  status: ChatStatus;
  error: Error | undefined;
  regenerate: ReturnType<typeof useChat>["regenerate"];
};

export function AssistantMessage({ text }: { text: string }) {
  return (
    <div className="max-w-3xl">
      <div className="prose prose-base max-w-none dark:prose-invert text-foreground text-[17px]">
        <ReactMarkdown
          remarkPlugins={[
            remarkGfm,
            [remarkMath, { singleDollarTextMath: true }],
          ]}
          // Order matters: rehype-raw parses raw HTML nodes
          // first, rehype-sanitize strips anything unsafe
          // (and anything not in our extended schema), then
          // rehype-katex renders the remaining math nodes.
          rehypePlugins={[
            rehypeRaw,
            [rehypeSanitize, sanitizeSchema],
            rehypeKatex,
          ]}
          components={{
            h1({ children, ...props }) {
              return (
                <h1 className="font-medium" {...props}>
                  {children}
                </h1>
              );
            },
            h2({ children, ...props }) {
              return (
                <h2 className="font-medium" {...props}>
                  {children}
                </h2>
              );
            },
            h3({ children, ...props }) {
              return (
                <h3 className="font-medium" {...props}>
                  {children}
                </h3>
              );
            },
            h4({ children, ...props }) {
              return (
                <h4 className="font-medium" {...props}>
                  {children}
                </h4>
              );
            },
            h5({ children, ...props }) {
              return (
                <h5 className="font-medium" {...props}>
                  {children}
                </h5>
              );
            },
            // Definition lists — no special handling needed
            // beyond letting them through sanitize/raw, but
            // adding light styling so they read clearly.
            dl({ children, ...props }) {
              return (
                <dl className="space-y-2 my-4" {...props}>
                  {children}
                </dl>
              );
            },
            dt({ children, ...props }) {
              return (
                <dt className="font-medium" {...props}>
                  {children}
                </dt>
              );
            },
            dd({ children, ...props }) {
              return (
                <dd className="ml-4 text-muted-foreground" {...props}>
                  {children}
                </dd>
              );
            },
            details({ children, ...props }) {
              return (
                <details
                  className="border border-border rounded-xl px-4 py-2 my-4"
                  {...props}
                >
                  {children}
                </details>
              );
            },
            summary({ children, ...props }) {
              return (
                <summary
                  className="cursor-pointer font-medium select-none"
                  {...props}
                >
                  {children}
                </summary>
              );
            },
            pre({ children }: any) {
              return <CodeBlock>{children}</CodeBlock>;
            },
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");
              const isMath = className?.includes("math");

              if (isMath) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }

              // Fenced block WITH a language -> syntax highlight.
              if (!inline && match) {
                return (
                  <SyntaxHighlighter
                    style={oneLight}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-2xl text-base"
                    {...props}
                    customStyle={{
                      borderRadius: "1rem",
                      padding: "1rem",
                      margin: 0,
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              }
              if (!inline && !match) {
                return (
                  <code
                    className="block whitespace-pre-wrap rounded-2xl bg-muted p-4 font-mono text-sm text-foreground"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </code>
                );
              }

              // True inline code (single backticks).
              return (
                <code
                  className="text-foreground px-1.5 py-0.5 rounded-md bg-muted text-xs font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
}
