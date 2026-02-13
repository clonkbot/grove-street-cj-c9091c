import { useState, useEffect } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setTimeout(() => setShowQuote(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const quotes = [
    '"All you had to do was follow the damn train, CJ!"',
    '"Grove Street. Home."',
    '"Ah sh*t, here we go again."',
    '"I\'ll have two number 9s..."',
    '"Respect has to be earned, Sweet."',
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-black">
      {/* Gritty urban background texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Green atmospheric glow from top */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'linear-gradient(180deg, rgba(34,197,94,0.3) 0%, transparent 50%, rgba(139,69,19,0.2) 100%)',
        }}
      />

      {/* Spray paint drip effects */}
      <div className="absolute top-0 left-[10%] w-1 h-32 bg-gradient-to-b from-green-500 to-transparent opacity-60" />
      <div className="absolute top-0 left-[25%] w-0.5 h-48 bg-gradient-to-b from-green-400 to-transparent opacity-40" />
      <div className="absolute top-0 right-[15%] w-1 h-40 bg-gradient-to-b from-green-600 to-transparent opacity-50" />
      <div className="absolute top-0 right-[30%] w-0.5 h-24 bg-gradient-to-b from-green-500 to-transparent opacity-30" />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-dvh px-4 py-8">

        {/* Grove Street Title */}
        <div
          className={`text-center mb-4 md:mb-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight"
            style={{
              fontFamily: "'Permanent Marker', cursive",
              color: '#22c55e',
              textShadow: '0 0 40px rgba(34,197,94,0.8), 0 0 80px rgba(34,197,94,0.4), 4px 4px 0 #000',
              WebkitTextStroke: '2px #000',
            }}
          >
            GROVE
          </h1>
          <h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight -mt-2 md:-mt-4"
            style={{
              fontFamily: "'Permanent Marker', cursive",
              color: '#22c55e',
              textShadow: '0 0 40px rgba(34,197,94,0.8), 0 0 80px rgba(34,197,94,0.4), 4px 4px 0 #000',
              WebkitTextStroke: '2px #000',
            }}
          >
            STREET
          </h1>
          <p
            className="text-orange-400 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] mt-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            LOS SANTOS, SAN ANDREAS
          </p>
        </div>

        {/* CJ Portrait Container */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Green glow behind CJ */}
          <div
            className="absolute inset-0 blur-3xl opacity-60"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.5) 0%, transparent 70%)',
              transform: 'scale(1.5)',
            }}
          />

          {/* CJ Image */}
          <div className="relative">
            <img
              src="https://static.wikia.nocookie.net/gtawiki/images/7/76/CarlJohnson-GTASA.png"
              alt="Carl 'CJ' Johnson"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(34,197,94,0.5)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))',
              }}
              onError={(e) => {
                // Fallback to a placeholder if image fails
                e.currentTarget.src = 'https://i.imgur.com/YQkE7Wf.png';
              }}
            />

            {/* Decorative frame corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-green-500 opacity-80" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-green-500 opacity-80" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-green-500 opacity-80" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-green-500 opacity-80" />
          </div>
        </div>

        {/* Character Name */}
        <div
          className={`mt-6 md:mt-8 text-center transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: '0.1em',
              textShadow: '3px 3px 0 #000, 0 0 20px rgba(34,197,94,0.3)',
            }}
          >
            CARL "CJ" JOHNSON
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="h-0.5 w-8 sm:w-16 bg-gradient-to-r from-transparent to-green-500" />
            <span
              className="text-green-400 text-xs sm:text-sm tracking-widest"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              OG LOC'S HOMIE
            </span>
            <div className="h-0.5 w-8 sm:w-16 bg-gradient-to-l from-transparent to-green-500" />
          </div>
        </div>

        {/* Rotating Quotes */}
        <div
          className={`mt-6 md:mt-8 max-w-xl mx-auto text-center transition-all duration-700 ${showQuote ? 'opacity-100' : 'opacity-0'}`}
        >
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-300 italic px-4"
            style={{
              fontFamily: "'Permanent Marker', cursive",
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            {quotes[currentQuote]}
          </p>
        </div>

        {/* Stats Bar - GTA Style */}
        <div
          className={`mt-8 md:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <StatBox label="RESPECT" value={100} color="green" />
          <StatBox label="STAMINA" value={85} color="orange" />
          <StatBox label="MUSCLE" value={70} color="red" />
          <StatBox label="FAT" value={15} color="yellow" />
        </div>

        {/* Gang Affiliations */}
        <div
          className={`mt-8 md:mt-10 flex items-center gap-3 sm:gap-4 transition-all duration-1000 delay-900 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-600 border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/30">
            <span className="text-white font-bold text-xs sm:text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>GSF</span>
          </div>
          <div className="text-center">
            <p className="text-green-400 text-xs sm:text-sm tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              GROVE STREET FAMILIES
            </p>
            <p className="text-gray-500 text-[10px] sm:text-xs tracking-widest">EST. 1987 • LOS SANTOS</p>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-600 border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/30">
            <span className="text-white font-bold text-xs sm:text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>4L</span>
          </div>
        </div>
      </div>

      {/* Decorative corner graffiti elements */}
      <div className="absolute bottom-20 left-4 text-green-500/20 text-6xl sm:text-8xl font-black rotate-[-15deg] pointer-events-none" style={{ fontFamily: "'Permanent Marker', cursive" }}>
        GSF
      </div>
      <div className="absolute top-20 right-4 text-green-500/10 text-4xl sm:text-6xl font-black rotate-[15deg] pointer-events-none" style={{ fontFamily: "'Permanent Marker', cursive" }}>
        1992
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-3 px-4 text-center">
        <p className="text-gray-600 text-[10px] sm:text-xs tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Requested by <span className="text-gray-500">@trustnoneisakey</span> · Built by <span className="text-gray-500">@clonkbot</span>
        </p>
      </footer>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string; value: number; color: string }) {
  const colorClasses: Record<string, string> = {
    green: 'bg-green-500 shadow-green-500/50',
    orange: 'bg-orange-500 shadow-orange-500/50',
    red: 'bg-red-500 shadow-red-500/50',
    yellow: 'bg-yellow-500 shadow-yellow-500/50',
  };

  return (
    <div className="text-center">
      <p
        className="text-gray-400 text-[10px] sm:text-xs tracking-wider mb-1"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {label}
      </p>
      <div className="w-16 sm:w-20 h-2 sm:h-2.5 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <div
          className={`h-full ${colorClasses[color]} shadow-lg transition-all duration-1000`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default App;
