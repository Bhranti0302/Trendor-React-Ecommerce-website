function CallToAction1() {
  return (
    <div
      className="relative rounded-[20px] m-5 h-auto grid grid-cols-1 md:grid-cols-2 px-16 py-12 lg:px-24 lg:py-16 overflow-hidden gap-10 justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${"#0D9FD5"}, ${"#08769E"})`,
      }}
    >
      <div className="flex justify-center items-start flex-col">
        <h2 className="text-white text-[2.4rem] font-bold leading-tight">
          Discover Your Style, Shop the Trend
        </h2>
      </div>

      {/* Right Section (Image) */}
      <div className="w-[350px] lg:w-[600px]">
        <img src="cta-1.png" alt="banner" />
      </div>
    </div>
  );
}

export default CallToAction1;
