function Features() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 my-20 gap-8 px-6 sm:px-10 md:px-16">
      {[
        { img: "Trolley.png", title: "Free Shipping" },
        { img: "Cash.png", title: "Cash Money" },
        { img: "Protect.png", title: "Secure Payment" },
        { img: "Headset.png", title: "Online Support" },
      ].map((feature, index) => (
        <div key={index} className="grid place-items-center text-center">
          <img
            src={feature.img}
            alt={feature.title}
            className="h-16 w-16 object-contain"
          />
          <h6 className="text-lg md:text-2xl mt-4 font-medium">
            {feature.title}
          </h6>
        </div>
      ))}
    </div>
  );
}

export default Features;
