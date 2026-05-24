export function ComingSoon() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute -top-32 left-1/4 h-72 w-[28rem] rounded-full bg-[#FFC629]/35 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[#4d43b5]/15 blur-3xl" />

      <h1 className="relative text-center text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
        Coming <span className="gradient-text">Soon</span>
      </h1>
    </section>
  );
}
