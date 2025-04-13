'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setShowSurprise(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-pink-500 p-6 text-center">

      {!showSurprise ? (
        <button
          onClick={handleClick}
          className="bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 text-xl transition-all"
        >
          Harus di klik yo ! 🗿
        </button>
      ) : (
        <div className="flex flex-col items-center animate-slow-fade">
          <h1 className="text-4xl font-bold text-pink-700 mb-4">
            Selamat Ulang Tahun, Dwi 🎉
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            Semoga hari-harimu penuh tawa, cinta, dan keberkahan yang nggak ada habisnya.
            Kalau habis, harus topup dulu di minimarket 🙏🏻
          </p>

          <img
            src="/images/Dwi.jpg"
            alt="Foto Dwi"
            className="w-64 h-64 object-cover rounded-2xl shadow-md mb-6 border-4 border-white"
          />

          <p className="text-md text-gray-800">Karya ini dipersembahkan oleh Programmer abal-abal 🙏🏻</p>

          <audio ref={audioRef} src="/sounds/Hbd.mp3" loop />
        </div>
      )}
    </main>
  );
}
