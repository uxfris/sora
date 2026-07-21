├── public/ # Static assets (icons, canvas graphics)
├── src/
│ ├── app/ # APP ROUTER (Routing & Page Layouts Only)
│ │ ├── (auth)/ # Route Group: Auth flows
│ │ ├── (dashboard)/ # Route Group: Workspace and builder
│ │ │ ├── projects/ # Projects list
│ │ │ └── builder/[id]/ # Dynamic Route: The AI generation workspace
│ │ ├── api/ # Core API endpoints
│ │ │ └── ai/ # AI generation handlers (streaming, webhooks)
│ │ ├── layout.tsx # Global providers (Theme, Auth, Query)
│ │ └── page.tsx # Landing / Marketing page
│ │
│ ├── features/ # DOMAIN CODE (UI + Client-Side logic)
│ │ ├── builder/ # The main AI creation workspace feature
│ │ │ ├── components/ # Workspace UI (Canvas, Sidebar, Preview Window)
│ │ │ ├── hooks/ # useAIStream.ts, useCanvasState.ts
│ │ │ └── store.ts # Local state (Zustand) for real-time adjustments
│ │ └── projects/ # User dashboard feature
│ │
│ ├── services/ # SERVER CODE (AI Engines, DB, API SDKs)
│ │ ├── ai/ # Core AI architecture
│ │ │ ├── prompts/ # System prompts and generation templates
│ │ │ ├── providers/ # Wrapper classes (OpenAI, Anthropic, Gemini)
│ │ │ ├── schemas/ # Zod structural schemas for Structured Outputs
│ │ │ └── index.ts # Main orchestration engine
│ │ └── db/ # Prisma/Drizzle configuration and schemas
│ │
│ ├── components/ # GLOBAL UI
│ │ └── ui/ # Design system components (Shadcn/custom)
│ │
│ └── lib/ # GLOBAL HELPERS
│ ├── utils.ts # Class merging and string formatters
│ └── validator.ts # Shared validation logic
