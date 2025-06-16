// src/app/page.tsx
import MusicPlayer from "../components/MusicPlayer";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Boukk</h1>
        <p className="mb-6 text-gray-300">
          Music producer blending Raï and EDM. Explore my music, live dates,
          and contact me directly.
        </p>

        <MusicPlayer />
        <ContactForm />
      </section>
    </main>
  );
}
