// src/app/page.tsx
import MusicPlayer from "../components/MusicPlayer";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans">
      <section className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Image
            src="/boukk.png"
            alt="Boukk artist photo"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center">Boukk</h1>
        <p className="mb-6 text-gray-300 text-center">
          Electronic music producer exploring a unique sound shaped by melodic grooves, uplifting energy, and ambient textures. Follow my journey through evolving singles and visual design.
        </p>

        <MusicPlayer />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🖼️ Cover Art Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <Image
                src="/fading.png"
                alt="Fading in the Dark Cover"
                width={500}
                height={500}
                className="rounded"
              />
              <p className="mt-2 text-white font-semibold">Single: &quot;Fading in the dark&quot;</p>
              <p className="text-gray-400 text-sm">Released: April 15, 2025</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <Image
                src="/today.png"
                alt="Today is a good day Cover"
                width={500}
                height={500}
                className="rounded"
              />
              <p className="mt-2 text-white font-semibold">Single: &quot;Today is a good day&quot;</p>
              <p className="text-gray-400 text-sm">Released: March 3, 2025</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <Image
                src="/uh-oh.png"
                alt="Uh Oh Club Mix Cover"
                width={500}
                height={500}
                className="rounded"
              />
              <p className="mt-2 text-white font-semibold">Upcoming: &quot;Uh Oh (Club Mix)&quot;</p>
              <p className="text-gray-400 text-sm">Releases: June 20, 2025</p>
            </div>
          </div>
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">🌐 Find me online</h2>
          <p className="text-gray-400">Spotify, SoundCloud, YouTube, Instagram – coming soon</p>
        </section>

        <ContactForm />
      </section>
    </main>
  );
}
