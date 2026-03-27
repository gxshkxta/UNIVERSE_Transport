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

      {/* НОВ СТРУКТУРЕН ЛЕЙАУТ */}
      <div className="relative z-10 pt-20 h-full overflow-y-auto flex flex-col lg:flex-row w-full">
        
        {/* ЛЯВА/ЦЕНТРАЛНА ЧАСТ (Основно съдържание) */}
        <div className="flex-1 flex flex-col pb-32 px-4 lg:px-8">
          <main className="w-full mx-auto flex flex-col items-center max-w-7xl">
            <AnimatePresence mode="wait">
              {tab === "home" && (
                <motion.div key="home" className="w-full" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
                  <Home />
                </motion.div>
              )}
              {tab === "services" && (
                <motion.div key="services" className="w-full" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
                  <Services />
                </motion.div>
              )}
              {tab === "offers" && (
                <motion.div key="offers" className="w-full" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
                  <Offers />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* МОБИЛЕН БАНЕР (Показва се само на телефон, най-отдолу) */}
          <div className="lg:hidden w-full max-w-lg mx-auto mt-10 bg-white/30 backdrop-blur-md border border-white/50 p-3 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
            <span className="text-gray-600 font-bold uppercase tracking-widest text-[10px] mb-2 opacity-70">Реклама</span>
            <div className="w-full h-24 bg-white/40 border-2 border-dashed border-gray-400/50 rounded-xl flex items-center justify-center p-2">
              <p className="text-gray-600 font-black tracking-tighter text-xs uppercase leading-tight">Твой<br/>Банер</p>
            </div>
          </div>

          {/* FOOTER SIGNATURE */}
          <div className="mt-16 w-full text-center opacity-80 pb-2">
            <p className="text-[10px] font-black tracking-widest uppercase text-gray-500">
              Created by <span className="text-[#7360f2]">KINETRIXgroup</span> 2026
            </p>
          </div>
        </div>

        {/* ДЕСКТОП БАНЕР (Небостъргач - плътно вдясно, само за компютър) */}
        <aside className="hidden lg:flex flex-col w-32 xl:w-40 p-3 sticky top-24 h-[calc(100vh-8rem)] mr-4 rounded-3xl bg-white/20 backdrop-blur-md border border-white/40 shadow-xl flex-shrink-0">
          <span className="text-gray-600 font-bold uppercase tracking-widest text-[10px] mb-3 opacity-70 text-center mt-2">Реклама</span>
          <div className="w-full flex-1 bg-white/30 border-2 border-dashed border-gray-400/50 rounded-2xl flex flex-col items-center justify-center p-2">
            <p className="text-gray-600 font-black tracking-tighter text-sm uppercase leading-tight text-center">
              Т<br/>В<br/>О<br/>Й<br/><br/>Б<br/>А<br/>Н<br/>Е<br/>Р
            </p>
          </div>
        </aside>

      </div>

      {/* VIBER FLOATING BUTTON */}
      <motion.a
        href="viber://chat?number=359000000000"
        className="fixed bottom-6 right-6 lg:right-[calc(12rem+24px)] xl:right-[calc(14rem+24px)] bg-[#7360f2] text-white p-4 rounded-3xl shadow-[0_10px_30px_rgba(115,96,242,0.6)] z-50 flex items-center justify-center border-4 border-white"
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
    <div className="flex flex-col items-center justify-start w-full">

      {/* ЕКРАН 1: Свободен текст + Бус (Заема първия екран) */}
      <div className="w-full flex flex-col items-center justify-start min-h-[75vh] lg:min-h-[85vh] pt-4 lg:pt-10">
        
        {/* СЛОГАН (Свободен текст, БЕЗ кутия) */}
        <div className="w-full max-w-lg lg:max-w-4xl text-center relative z-20 mb-2 lg:mb-4 px-2">
          {/* Бяла сянка около текста, за да се чете перфектно върху всякакъв фон */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight text-gray-900 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            Ние пренасяме не просто багаж...
          </h2>
          <p className="mt-3 lg:mt-5 text-xl lg:text-2xl font-bold text-gray-900 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            А вашето спокойствие <br/>
            <span className="text-sm lg:text-base bg-black text-white px-3 py-1.5 rounded-md mt-2 inline-block shadow-md">
              (и всичките ви тежки кашони)
            </span>
          </p>
        </div>

        {/* БУС (Вдигнат високо нагоре) */}
        <motion.div 
          className="relative w-full max-w-sm lg:max-w-3xl z-10"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <div className="absolute inset-x-10 bottom-8 h-10 lg:h-20 bg-black/30 blur-3xl rounded-full z-0" />
          <img 
            src="/van.png" 
            alt="UNIVERSE Transport Bus" 
            className="relative w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10"
          />
        </motion.div>
      </div>

      {/* ЕКРАН 2: Таблицата (Показва се чак при скрол надолу) */}
      <div className="w-full max-w-lg lg:max-w-4xl bg-white/30 backdrop-blur-md border border-white/50 p-6 lg:p-10 rounded-3xl shadow-lg relative z-20 mt-4 lg:mt-0">
        <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-center drop-shadow-md mb-8">Ориентировъчни Цени</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-800/30">
                <th className="pb-4 text-xs lg:text-lg font-black uppercase tracking-widest text-gray-800">Услуга</th>
                <th className="pb-4 text-xs lg:text-lg font-black uppercase tracking-widest text-gray-800">Време</th>
                <th className="pb-4 text-xs lg:text-lg font-black uppercase tracking-widest text-gray-800 text-right">Цена</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: "Градски транспорт (само бус)", time: "до 1 ч.", price: "от 40 лв" },
                { service: "Преместване (бус + 2 момчета)", time: "до 2 ч.", price: "от 90 лв" },
                { service: "Изхвърляне на стари мебели", time: "до 2 ч.", price: "от 70 лв" },
                { service: "Извозване строителни отпадъци", time: "до 1 ч.", price: "от 60 лв" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-800/10 hover:bg-white/40 transition-colors">
                  <td className="py-5 lg:py-6 text-sm lg:text-xl font-bold text-gray-900 pr-4 leading-tight">{row.service}</td>
                  <td className="py-5 lg:py-6 text-sm lg:text-xl font-medium text-gray-800 whitespace-nowrap pr-4">{row.time}</td>
                  <td className="py-5 lg:py-6 text-sm lg:text-2xl font-black text-gray-900 text-right whitespace-nowrap">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs lg:text-sm text-center text-gray-700 mt-6 font-bold">* Цените са стартови и се уточняват след разговор.</p>
      </div>

    </div>
  );
}

function Services() {
  return (
    <div className="space-y-6 w-full max-w-lg lg:max-w-4xl mx-auto pb-10 mt-6 lg:mt-12">
      <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-center drop-shadow-md mb-8">Какво предлагаме</h2>
      {[
        { title: "Изнасяне на мебели", desc: "Сваляме от всеки етаж, дори без асансьор." },
        { title: "Транспортни услуги", desc: "Бърз и сигурен превоз в рамките на града и страната." },
        { title: "Изхвърляне на отпадъци", desc: "Събиране и извозване до лицензирано сметище." }
      ].map((s, i) => (
        <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white/40 backdrop-blur-md border border-white/50 p-6 lg:p-8 rounded-3xl shadow-lg">
          <h3 className="font-black text-xl lg:text-2xl uppercase tracking-tight text-gray-900">{s.title}</h3>
          <p className="text-gray-800 lg:text-lg font-medium mt-2">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Offers() {
  return (
    <div className="space-y-6 w-full max-w-lg lg:max-w-4xl mx-auto pb-10 mt-6 lg:mt-12">
      <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-center drop-shadow-md mb-8">Супер Оферти</h2>
      {[
        { name: "Базов Транспорт", price: "от 40 лв" },
        { name: "Комплексно Преместване", price: "от 90 лв" },
        { name: "Цялостно Разчистване", price: "По договаряне" },
      ].map((offer, i) => (
        <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white/40 backdrop-blur-md border border-white/50 p-6 lg:p-8 rounded-3xl shadow-lg flex justify-between items-center">
          <h3 className="font-black text-xl lg:text-2xl uppercase tracking-tight text-gray-900">{offer.name}</h3>
          <span className="bg-gray-900 text-white font-black px-4 lg:px-6 py-2 lg:py-3 rounded-xl shadow-md lg:text-lg">{offer.price}</span>
        </motion.div>
      ))}
    </div>
  );
}