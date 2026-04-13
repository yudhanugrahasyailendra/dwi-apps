'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-fuchsia-100 to-pink-200 px-6 py-10 text-center">
      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />

      {!showSurprise ? (
        <section className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/50 bg-white/70 p-8 shadow-2xl backdrop-blur-md sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Spesial Untuk Kamu
          </p>
          <h1 className="mb-3 text-3xl font-extrabold text-pink-700 sm:text-4xl">
            Ada kejutan kecil nih
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-base text-gray-700 sm:text-lg">
            Klik tombol di bawah buat buka pesan ulang tahun yang dibuat khusus penuh doa dan vibes bahagia.
          </p>
          <button
            onClick={handleClick}
            className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-pink-400/40 transition duration-300 hover:scale-105 hover:from-pink-600 hover:to-fuchsia-600"
          >
            Buka Kejutan ✨
          </button>
        </section>
      ) : (
        <section className="animate-slow-fade relative z-10 w-full max-w-3xl rounded-3xl border border-white/60 bg-white/75 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Happy Birthday
          </p>
          <h1 className="mb-4 text-3xl font-extrabold text-pink-700 sm:text-5xl">
            Selamat Ulang Tahun, Dwi 🎉
          </h1>
          <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Semoga hari-harimu penuh tawa, cinta, dan keberkahan yang tidak ada habisnya.
            Kalau habis, tinggal top up lagi di minimarket terdekat 🙏🏻
          </p>

          <Image
            src="/images/Dwi.jpg"
            alt="Foto Dwi"
            width={288}
            height={288}
            className="mx-auto mb-6 h-64 w-64 rounded-3xl border-4 border-white object-cover shadow-xl sm:h-72 sm:w-72"
          />

          <p className="text-sm font-medium text-gray-800 sm:text-base">
            Karya ini dipersembahkan oleh Programmer abal-abal dengan sepenuh hati 🙏🏻
          </p>

          <audio ref={audioRef} src="/sounds/Hbd.mp3" loop />
        </section>
      )}
    </main>
  );
}
