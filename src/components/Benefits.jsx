function Benefits() {
  return (
    <div className="my-24 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <BenefitCard
          title="We’ve Got You Covered"
          para="Safe storage, dedicated assistance, and secure delivery – everything you need for a smooth shopping experience."
          imageUrl="benefit-1.png"
        />

        <BenefitCard
          title="Shopping Made Easy"
          para="Enjoy worry-free shopping with reliable inventory, 24/7 customer support, and on-time delivery."
          imageUrl="benefit-2.png"
        />

        <BenefitCard
          title="Why Choose Trendorra?"
          para="From fast delivery to reliable support, we make shopping electronics simple and stress-free."
          imageUrl="benefit-3.png"
        />
      </div>
    </div>
  );
}

function BenefitCard({ title, para, imageUrl }) {
  return (
    <div className="benefit-card">
      <img
        src={imageUrl}
        alt="benefit"
        className="object-cover h-48 lg:h-72 w-full group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
      />

      <div className="mt-5">
        <h5 className="text-xl lg:text-2xl font-semibold truncate">{title}</h5>
        <p className="text-[14px] lg:text-[18px] text-stone-600 mt-2">{para}</p>
      </div>
    </div>
  );
}

export default Benefits;
