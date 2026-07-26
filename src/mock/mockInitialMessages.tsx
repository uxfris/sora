import { UIMessage } from "@ai-sdk/react";

export const mockMarkdownString = `## Executive Summary

An **Agentic AI Workflow** integrates large language models with tool execution capabilities, enabling automated decision-making and task resolution across heterogeneous enterprise systems.

> **Key Rule for Production:** Never grant autonomous agents unconstrained write access to persistent data stores without an intermediate human-in-the-loop approval step.

---

### 1. System Comparison

| Attribute | Traditional Scripting | Rule-Based Automation | Agentic AI Workflow |
| :--- | :--- | :--- | :--- |
| **Logic Source** | Deterministic code | Static conditional trees | Dynamic prompt reasoning |
| **Error Handling** | Hardcoded exception handling | Branch fallback rules | Self-reflection & healing |
| **Flexibility** | Extremely low | Low to moderate | High |
| **Latency ($T_{avg}$)** | $< 50\\text{ ms}$ | $< 100\\text{ ms}$ | $500\\text{ ms} - 3.5\\text{ s}$ |

---

### 2. Core Execution Steps

1. **User Request Ingestion:** Captures the natural language prompt and request metadata.
2. **Intent Parsing:** Breaks down high-level requests into sequential tool invocation steps.
3. **Tool Execution Loop:**
   * Validate schema parameters using Zod.
   * Execute external function/API call.
   * Feed observation back into context.

---

### 3. Mathematical Cost Model

The total cost $C_{total}$ of an agentic run is modeled as a function of input tokens $T_{in}$, output tokens $T_{out}$, and tool execution overhead $E_{tool}$:

$$C_{total} = (T_{in} \\times P_{in}) + (T_{out} \\times P_{out}) + \\sum_{i=1}^{n} E_{tool,i}$$

Where $P_{in}$ is cost per input token and $n$ is the total step count ($n \\le 5$).

---

### 4. Code Implementation

Below is a minimal implementation defined in TypeScript:

\`\`\`typescript
import { generateText, tool } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

async function executeAgentFlow(userPrompt: string) {
  const response = await generateText({
    model: openai("gpt-4o"),
    system: "You are an automated infrastructure monitoring agent.",
    prompt: userPrompt,
    tools: {
      checkServerHealth: tool({
        description: "Checks CPU utilization of a target server.",
        parameters: z.object({
          serverId: z.string().describe("Target server ID"),
        }),
        execute: async ({ serverId }) => {
          return { serverId, status: "healthy", cpuUsagePercent: 24.5 };
        },
      }),
    },
    maxSteps: 5,
  });

  return response.text;
}
\`\`\``;

export const mockMarkdownString2 = `# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Text Formatting

This is a paragraph with **bold text**, *italic text*, ***bold and italic***, ~~strikethrough~~, and \`inline code\`. You can also combine them like **bold with \`code\` inside** or *italic with [a link](https://example.com) inside*.

Here's a line with a  
hard break (two trailing spaces) and here's a paragraph
that just wraps normally without a break.

Superscript-like note<sup>1</sup> and subscript-like note<sub>2</sub> using raw HTML tags.

---

## Lists

### Unordered List

- First item
- Second item
  - Nested item one
  - Nested item two
    - Deeply nested item
- Third item with **bold** and \`code\`

### Ordered List

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step
4. Fourth step

### Mixed Nested List

1. Ordered parent
   - Unordered child
   - Another child
     1. Ordered grandchild
2. Another ordered parent

### Task List

- [x] Completed task
- [x] Another completed task
- [ ] Incomplete task
- [ ] Task with **bold** text
  - [x] Nested completed subtask
  - [ ] Nested incomplete subtask

---

## Blockquotes

> This is a simple blockquote.

> This is a multi-line blockquote.
> It continues on this line.
>
> And has a second paragraph.

> Nested blockquote:
> > This is nested one level.
> > > This is nested two levels.

> **Note:** Blockquotes can contain other markdown like \`code\`, **bold**, and [links](https://example.com).

---

## Code

Inline code: \`const x = 42;\`

\`\`\`
Plain fenced code block with no language specified.
Line two of plain block.
\`\`\`

\`\`\`javascript
// JavaScript code block
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(\\\`Result: \\\${result}\\\`);
\`\`\`

\`\`\`python
# Python code block
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

print(quicksort([3, 6, 1, 8, 2, 9, 4]))
\`\`\`

\`\`\`json
{
  "name": "markdown-test",
  "version": "1.0.0",
  "nested": {
    "array": [1, 2, 3],
    "boolean": true,
    "nullValue": null
  }
}
\`\`\`

\`\`\`bash
#!/bin/bash
echo "Hello, World!"
for i in {1..5}; do
  echo "Iteration $i"
done
\`\`\`

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}
\`\`\`

\`\`\`tsx
interface Props {
  title: string;
  count?: number;
}

const Component: React.FC<Props> = ({ title, count = 0 }) => {
  return <div className="wrapper">{title}: {count}</div>;
};
\`\`\`

---

## Tables

| Feature       | Supported | Notes                  |
|---------------|:---------:|-------------------------|
| Headings      | Yes       | H1 through H6           |
| Lists         | Yes       | Ordered and unordered   |
| Code blocks   | Yes       | With syntax highlighting|
| Tables        | Yes       | Including alignment     |

### Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:---------------:|---------------:|
| a            | b               | c               |
| longer text  | more text       | 123.45          |
| x            | y               | z               |

### Table with Inline Formatting

| Item | Description | Price |
|------|--------------|-------|
| **Widget** | A \`useful\` tool | $9.99 |
| *Gadget* | ~~Discontinued~~ item | ~~$19.99~~ $14.99 |
| [Gizmo](https://example.com) | Link inside a cell | $24.99 |

---

## Links and Images

[Inline link](https://example.com)

[Link with title](https://example.com "Example Website")

<https://example.com/autolink>

Reference-style [link][ref-link] using a reference.

[ref-link]: https://example.com/reference "Reference Link Title"

![Alt text for image](https://via.placeholder.com/150 "Placeholder image")

---

## Horizontal Rules

Above the rule.

---

Between rules (dashes).

***

Between rules (asterisks).

___

Below the rule (underscores).

---

## Math (if KaTeX/remark-math supported)

Inline math: $E = mc^2$ and $a^2 + b^2 = c^2$.

Block math:

$$
\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}
$$

$$
\\begin{aligned}
f(x) &= x^2 + 2x + 1 \\\\
     &= (x + 1)^2
\\end{aligned}
$$

---

## Definition List Style (HTML)

<dl>
  <dt>Term One</dt>
  <dd>Definition of term one.</dd>
  <dt>Term Two</dt>
  <dd>Definition of term two.</dd>
</dl>

---

## Escaped Characters

\\*Not italic\\* and \\# not a heading and \\\`not code\\\`.

Backslash: \\\\ Asterisk: \\* Underscore: \\_ Tilde: \\~

---

## Footnotes

Here is a statement with a footnote.[^1]

Here is another one with a named footnote.[^note]

[^1]: This is the first footnote.
[^note]: This is a named footnote with more detail.

---

## Long Paragraph (Wrapping Test)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

## Emoji and Unicode

Emoji support: 🚀 🎉 ✅ ❌ 💡 🔥

Unicode symbols: → ← ↑ ↓ ★ ☆ © ® ™ § ¶

---

## HTML Passthrough

<div style="padding: 8px; border: 1px solid #ccc;">
  <strong>Raw HTML block</strong> inside markdown.
</div>

<details>
<summary>Click to expand</summary>

Hidden content revealed on click, including a nested list:

- Detail item one
- Detail item two

</details>

---

## Edge Cases

Empty code block:

\`\`\`
\`\`\`

Single-character emphasis: *a* **b** \`c\`

Consecutive inline elements: **bold***italic* \`code\`[link](https://example.com)

A list immediately followed by a heading:
- item a
- item b
## Heading Right After List

A table with an empty cell:

| A | B | C |
|---|---|---|
| 1 |   | 3 |
|   | 5 |   |

Trailing whitespace and multiple blank lines below.



## End of Document

That concludes the comprehensive markdown test content.
`;

export const mockInitialMessages: UIMessage[] = [
  {
    id: "mock-user-1",
    role: "user",
    parts: [
      {
        type: "text",
        text: "Explain agentic AI workflows with examples and code.",
      },
    ],
  },
  {
    id: "mock-ai-1",
    role: "assistant",
    parts: [{ type: "text", text: mockMarkdownString }],
  },
];
