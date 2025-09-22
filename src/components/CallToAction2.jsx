function CallToAction1() {
  return (
    <div
      className="relative rounded-[20px] m-5 grid grid-cols-1 md:grid-cols-2 overflow-hidden sm:pt-6"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #0CD376, #066D3D)`,
      }}
    >
      {/* Image: show second on mobile, first on desktop */}
      <div className="flex justify-center items-center order-2 md:order-1">
        <img
          src="cta-2.png"
          alt="banner"
          className="max-w-[530px] w-full object-contain"
        />
      </div>

      {/* Text: show first on mobile, second on desktop */}
      <div className="flex justify-center items-start flex-col text-left px-6 md:px-12 order-1 md:order-2">
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-8">
          Elevate Everyday with Exclusive Deals
        </h2>
      </div>
    </div>
  );
}

export default CallToAction1;
