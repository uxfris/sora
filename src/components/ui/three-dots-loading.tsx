export const ThreeDotsBounce = () => {
  return (
    <div className="flex items-center gap-1 h-12">
      <div className="w-2 h-2 bg-foreground rounded-full animate-[highBounce_0.5s_infinite_alternate_ease-in-out] animation-duration-[0.4s] [animation-delay:-0.2s]"></div>
      <div className="w-2 h-2 bg-foreground rounded-full animate-[highBounce_0.5s_infinite_alternate_ease-in-out] animation-duration-[0.4s] [animation-delay:-0.1s]"></div>
      <div className="w-2 h-2 bg-foreground rounded-full animate-[highBounce_0.5s_infinite_alternate_ease-in-out] animation-duration-[0.4s]"></div>

      {/* Custom keyframes injected inline to achieve the height */}
      <style>{`
          @keyframes highBounce {
            from { 
              transform: translateY(0); 
            }
            to { 
              transform: translateY(-10px); /* Massive vertical jump height */
            }
          }
        `}</style>
    </div>
  );
};
