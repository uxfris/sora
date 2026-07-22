export default function Home() {
  return (
    <div className="flex h-screen">
      <aside className="hidden md:block w-72 border-r border-border">
        <div className="flex items-center justify-center h-full">Chat</div>
      </aside>
      <main className="flex flex-1 flex-col">
        <header className="h-14 border-b border-border">
          <div className="flex items-center justify-center h-full">Header</div>
        </header>
        <section className="flex-1">
          <div className="flex h-full items-center justify-center">Preview</div>
        </section>
      </main>
    </div>
  );
}
