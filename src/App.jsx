import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState("home");

  return (
    <div className="h-screen relative overflow-hidden font-sans bg-gray-100 text-gray-900 flex flex-col">
      
      {/* BACKGROUND VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.7)_120%)] z-0 pointer-events-none" />

      {/* GLASS TOP BAR */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-40 bg-white/30 backdrop-blur-md border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3">
          <button onClick={() => setMenuOpen(true)} className="text-3xl font-bold drop-shadow-md text-gray-800">
            ☰
          </button>
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter drop-shadow-sm">
            UNIVERSE <span className="text-gray-700">Transport</span>
          </h1>
        </div>

        <div className="flex items-center gap-3 text-xl">
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="bg-blue-500/80 backdrop-blur-sm text-white p-2 rounded-full shadow-lg">⚡</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="bg-[#7360f2]/80 backdrop-blur-sm text-white p-2 rounded-full shadow-lg">🟣</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="bg-green-500/80 backdrop-blur-sm text-white p-2 rounded-full shadow-lg">🟢</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="tel:0888000000" className="bg-gray-800/80 backdrop-blur-sm text-white p-2 rounded-full shadow-lg">📞</motion.a>
        </div>
      </header>

      {/* GLASS SIDE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed left-0 top-0 w-72 h-full bg-white/40 backdrop-blur-xl border-r border-white/50 z-50 p-6 shadow-2xl flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
            >
              <button onClick={() => setMenuOpen(false)} className="self-end text-3xl font-black mb-8 text-gray-800 drop-shadow-md">✕</button>
              <nav className="space-y-6">
                {["home", "services", "offers"].map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTab(t);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left text-2xl font-black tracking-tight uppercase border-b border-gray-800/20 pb-2 hover:text-blue-600 transition-colors"
                  >
                    {t === "home" && "🏠 Начало"}
                    {t === "services" && "🛠 Услуги"}
                    {t === "offers" && "📋 Оферти"}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SCROLLABLE AREA */}
      <div className="relative z-10 pt-24 h-full overflow-y-auto px-4 pb-32 flex flex-col">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-8 flex-1">
          
          {/* MAIN CONTENT (Лява част на голям екран, център на малък) */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              {tab === "home" && (
                <motion.div key="home" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
                  <Home />
                </motion.div>
              )}
              {tab === "services" && (
                <motion.div key="services" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
                  <Services />
                </motion.div>
              )}
              {tab === "offers" && (
                <motion.div key="offers" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
                  <Offers />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* AD BANNER (Дясна част на голям екран, отдолу на малък) */}
          <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
            <div className="bg-white/30 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-lg flex flex-col items-center justify-center min-h-[250px] lg:sticky lg:top-4 text-center">
              <span className="text-gray-600 font-bold uppercase tracking-widest text-xs mb-3">Реклама</span>
              {/* Тук по-късно можеш да сложиш реална снимка/линк с <img /> */}
              <div className="w-full h-full bg-white/40 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center p-4">
                <p className="text-gray-700 font-black tracking-tight uppercase">Твоето място <br/> за банер</p>
              </div>
            </div>
          </aside>
          
        </div>

        {/* FOOTER SIGNATURE */}
        <div className="mt-16 w-full text-center opacity-80 pb-6">
          <p className="text-xs font-black tracking-widest uppercase text-gray-500">
            Created by <span className="text-[#7360f2]">KINETRIXgroup</span> 2026
          </p>
        </div>
      </div>

      {/* VIBER FLOATING BUTTON */}
      <motion.a
        href="viber://chat?number=359000000000"
        className="fixed bottom-6 right-6 bg-[#7360f2] text-white p-4 rounded-3xl shadow-[0_10px_30px_rgba(115,96,242,0.6)] z-50 flex items-center justify-center border-4 border-white"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-3xl font-black mr-2">🟣</span>
        <span className="font-black uppercase tracking-tight text-lg">Пиши ни!</span>
      </motion.a>
    </div>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
      <div className="bg-white/30 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-xl max-w-lg w-full mx-auto mb-8 text-center relative z-20">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight text-gray-900 drop-shadow-md">
          Ние пренасяме не просто багаж...
        </h2>
        <p className="mt-4 text-xl font-bold text-gray-800 drop-shadow-sm">
          А вашето спокойствие <br/>
          <span className="text-sm bg-black text-white px-2 py-1 rounded-md mt-2 inline-block shadow-md">
            (и всичките ви тежки кашони)
          </span>
        </p>
      </div>

      <motion.div 
        className="relative w-full max-w-md mx-auto z-10"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <div className="absolute inset-x-0 bottom-4 h-24 bg-black/20 blur-2xl rounded-full" />
        <img 
          src="/van.jpg" 
          alt="UNIVERSE Transport Bus" 
          className="relative w-full h-auto drop-shadow-2xl z-10 rounded-2xl"
        />
      </motion.div>
    </div>
  );
}

function Services() {
  return (
    <div className="space-y-6 max-w-lg mx-auto w-full">
      <h2 className="text-3xl font-black uppercase tracking-tight text-center drop-shadow-md mb-8">Какво предлагаме</h2>
      {[
        { title: "Изнасяне на мебели", desc: "Сваляме от всеки етаж, дори без асансьор." },
        { title: "Строителни отпадъци", desc: "Събиране и извозване до сметище." },
        { title: "Цялостно разчистване", desc: "Къртим и чистим до тухла." }
      ].map((s, i) => (
        <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white/40 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-lg">
          <h3 className="font-black text-xl uppercase tracking-tight text-gray-900">{s.title}</h3>
          <p className="text-gray-800 font-medium mt-2">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Offers() {
  return (
    <div className="space-y-6 max-w-lg mx-auto w-full">
      <h2 className="text-3xl font-black uppercase tracking-tight text-center drop-shadow-md mb-8">Супер Оферти</h2>
      {[
        { name: "Старт Пакет", price: "от 80 лв" },
        { name: "Среден Ремонт", price: "от 150 лв" },
        { name: "Пълна Лудница", price: "от 300 лв" },
      ].map((offer, i) => (
        <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white/40 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-lg flex justify-between items-center">
          <h3 className="font-black text-xl uppercase tracking-tight text-gray-900">{offer.name}</h3>
          <span className="bg-gray-900 text-white font-black px-4 py-2 rounded-xl shadow-md">{offer.price}</span>
        </motion.div>
      ))}
    </div>
  );
}