export default function Carousel() {
  return (
    <div className="hero min-h-screen bg-[url('/image-1.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
          <p className="mb-5">
            In this website you can build your personal Computer, and choose
            your personal computer every component what you like, lets build
            your PC
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
