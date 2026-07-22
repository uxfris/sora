├── public/                 # Static assets (icons, brand logos)
├── src/
│ ├── app/                  # APP ROUTER (Routing & Page Layouts Only)
│ │ ├── (auth)/             # Route Group: Auth flows (Login, Register)
│ │ ├── (dashboard)/        # Route Group: Chat History & Workspaces
│ │ │ ├── history/          # Past conversations list/gallery
│ │ │ └── chat/[id]/        # Dynamic Route: The active chat conversation workspace
│ │ ├── api/                # Core API endpoints
│ │ │ └── chat/             # AI generation handlers (Streaming endpoints)
│ │ │     └── route.ts
│ │ ├── layout.tsx          # Global providers (Theme, Auth, React Query)
│ │ └── page.tsx            # Landing / Marketing page
│ │
│ ├── features/             # DOMAIN CODE (UI + Client-Side logic)
│ │ ├── chat-workspace/     # The main AI conversation interface
│ │ │ ├── components/       # Chat UI (ChatWindow, MessageList, MessageItem, ChatInput)
│ │ │ ├── hooks/            # useChatStream.ts, useScrollToBottom.ts
│ │ │ └── store.ts          # Zustand store for streaming states, active model choice, etc.
│ │ └── history-sidebar/    # Left sidebar for searching & managing past chats
│ │
│ ├── services/             # SERVER CODE (AI Engines, DB, API SDKs)
│ │ ├── ai/                 # Core AI architecture
│ │ │ ├── prompts/          # System prompts, persona definitions, agent tools
│ │ │ ├── providers/        # Wrapper instances (Vercel AI SDK configs for OpenAI/Anthropic)
│ │ │ ├── schemas/          # Zod structural schemas for Tool/Function Calling
│ │ │ └── index.ts          # Main LLM orchestration engine
│ │ └── db/                 # Database clients (Prisma/Drizzle) + Chat/Message schemas
│ │
│ ├── components/           # GLOBAL UI
│ │ └── ui/                 # Design system components (Shadcn/custom)
│ │
│ └── lib/                  # GLOBAL HELPERS
│     ├── utils.ts          # Class merging (cn helper) and date/time formatters
│     └── validator.ts      # Shared validation logic (e.g., input character limits)



services/
├── ai/                 # LLM orchestration
├── db/                 # Database access
├── auth/               # Authentication/authorization helpers
├── storage/            # File storage (S3, R2, Supabase Storage)
├── payments/           # Stripe, Paddle, Lemon Squeezy
├── email/              # Resend, SendGrid, Postmark
├── search/             # Meilisearch, Typesense, Algolia
├── cache/              # Redis, Upstash
├── queue/              # BullMQ, Inngest, Trigger.dev
├── analytics/          # PostHog, Mixpanel, GA
├── telemetry/          # OpenTelemetry, logging
├── vector/             # Pinecone, Qdrant, Weaviate
├── embeddings/         # Embedding generation
├── documents/          # PDF parsing, OCR, chunking
├── web-search/         # Tavily, Serper, Exa
├── notifications/      # Push notifications
├── billing/            # Usage metering and quotas
└── jobs/               # Background task orchestration