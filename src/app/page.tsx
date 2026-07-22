import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  Zap,
  ShieldCheck,
  Globe,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f9f9f9] font-sans antialiased selection:bg-white selection:text-black">
      {/* 1. Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* OpenAI / ChatGPT Style Logo */}
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-sm transform rotate-45" />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              ChatGPT
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">
              Overview
            </a>
            <a
              href="#capabilities"
              className="hover:text-white transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#enterprise"
              className="hover:text-white transition-colors"
            >
              Enterprise
            </a>
            <a href="#safety" className="hover:text-white transition-colors">
              Safety
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://chatgpt.com"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:inline-block"
            >
              Log in
            </a>
            <a
              href="https://chatgpt.com"
              className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-all transform active:scale-95"
            >
              Try ChatGPT
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Introducing GPT-4o & Advanced Voice Mode</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 bg-linear-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent">
          ChatGPT
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Get answers, find inspiration, and be more productive. Free to use,
          easy to try. Just ask and ChatGPT can help with writing, learning,
          brainstorming, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://chatgpt.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium text-base hover:bg-zinc-200 transition-all transform active:scale-95"
          >
            Try ChatGPT free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#capabilities"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 text-white px-7 py-3.5 rounded-full font-medium text-base hover:bg-white/10 transition-all"
          >
            Explore features
          </a>
        </div>

        {/* Product UI Mockup */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-zinc-900/60 p-4 md:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="flex items-center gap-2 pb-4 border-b border-white/5 text-xs text-zinc-500 text-left">
            <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
            <span className="font-mono">chat.openai.com</span>
          </div>

          <div className="py-12 px-4 max-w-xl mx-auto text-left space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-xs font-semibold">
                You
              </div>
              <p className="text-zinc-300 text-sm md:text-base pt-1">
                "Can you help me design a simple weekly meal plan high in
                protein?"
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 font-semibold text-xs">
                ✦
              </div>
              <div className="text-zinc-300 text-sm md:text-base pt-1 space-y-2">
                <p>
                  Here’s a balanced, high-protein meal plan framework for your
                  week:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                  <li>
                    <strong className="text-white">Breakfast:</strong> Greek
                    yogurt bowl with chia seeds & berries
                  </li>
                  <li>
                    <strong className="text-white">Lunch:</strong> Grilled
                    chicken wrap with spinach & hummus
                  </li>
                  <li>
                    <strong className="text-white">Dinner:</strong> Baked salmon
                    with quinoa & roasted asparagus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Feature Grid */}
      <section
        id="features"
        className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Designed for seamless interaction
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Experience natural multi-modal intelligence that scales with your
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <MessageSquare className="w-5 h-5 text-zinc-200" />
            </div>
            <h3 className="text-xl font-medium mb-3">Instant Answers</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Ask anything from quick translations to complex coding debugging.
              Get clear, structured responses instantly.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <Zap className="w-5 h-5 text-zinc-200" />
            </div>
            <h3 className="text-xl font-medium mb-3">Multimodal Power</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Analyze photos, generate images with DALL-E, and interact
              seamlessly through natural voice conversations.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5 text-zinc-200" />
            </div>
            <h3 className="text-xl font-medium mb-3">Built-in Safety</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Trained using rigorous safety evaluations to keep conversation
              accurate, helpful, and privacy-focused.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Enterprise / Plus Banner */}
      <section id="enterprise" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl bg-linear-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-white/15 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
              ChatGPT Team & Enterprise
            </div>
            <h3 className="text-3xl font-medium tracking-tight mb-4">
              Empower your entire workforce
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Get enterprise-grade security, administrative controls, custom
              workspace GPTs, and higher rate limits for team collaboration.
            </p>
          </div>
          <a
            href="https://chatgpt.com"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-zinc-200 transition-all shrink-0"
          >
            Explore Enterprise
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="border-t border-white/10 py-12 px-6 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>OpenAI © 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
