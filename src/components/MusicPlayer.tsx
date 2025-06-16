export default function MusicPlayer() {
  return (
    <div className="mb-6">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/intl-fr/artist/39SGPcza4767cssikhRtvL?si=eCKEWH33QpGrxb6ei-Rc4Q"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
