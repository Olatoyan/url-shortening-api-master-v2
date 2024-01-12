import StatisticsItems from "./StatisticsItems";

function StatisticsSection() {
  return (
    <section className="px-[16rem] pt-48">
      <div className="flex flex-col items-center gap-3 pb-24 text-center">
        <h2 className="text-[4rem] font-bold leading-[4.8rem] tracking-[-0.1rem] text-[#34313d]">
          Advanced Statistics
        </h2>
        <p className="max-w-[54rem] text-[1.8rem] font-medium leading-[3.2rem] tracking-[0.0123rem] text-[#9e9aa8]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="relative grid h-[35rem] grid-cols-3 gap-12">
        <StatisticsItems
          img="./icon-brand-recognition.svg"
          heading="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          type="start"
        />

        <StatisticsItems
          img="./icon-detailed-records.svg"
          heading="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          type="center"
        />
        <StatisticsItems
          img="./icon-fully-customizable.svg"
          heading="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          type="end"
        />
        <div className="absolute left-[13rem] top-1/2 h-[0.8rem] w-[85%] bg-[#2BD0D0]"></div>
      </div>
    </section>
  );
}

export default StatisticsSection;
