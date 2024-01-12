type StatisticsItemsProps = {
  img: string;
  heading: string;
  text: string;
  type: "start" | "center" | "end";
};

function StatisticsItems({ img, heading, text, type }: StatisticsItemsProps) {
  return (
    <div
      className={`z-10 flex flex-col items-start rounded-lg bg-white px-12 pb-16 ${
        type === "start"
          ? "self-start"
          : type === "center"
            ? "self-center"
            : "self-end"
      }`}
    >
      <img
        src={img}
        alt={heading}
        className="-mt-[3.5rem] rounded-full bg-[#3a3054] p-7 "
      />

      <h3 className="pt-12 text-[2.2rem] font-bold text-[#34313d]">
        {heading}
      </h3>
      <p className="pt-5 text-[1.5rem] font-medium leading-[2.6rem] text-[#9e9aa8]">
        {text}
      </p>
    </div>
  );
}

export default StatisticsItems;
