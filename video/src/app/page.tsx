export default function Home() {
  return (
    <main>
      <div style={{ padding: "20px" }}>
        <h1>ローカル動画の再生【フルハウス】</h1>
        <video
          src="/video/Everywhere You Look-Wi-Fi（高速）.mp4"
          width="100%"
          controls
          preload="metadata"
        />
      </div>
    </main>
  );
}
