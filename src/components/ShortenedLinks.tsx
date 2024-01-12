type ShortenedLinksProps = {
  longLink: string;
  shortLink: string;
};

function ShortenedLinks({ longLink, shortLink }: ShortenedLinksProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-12 py-7">
      <p className="text-[2rem] font-medium leading-[3.6rem] tracking-[0.015rem] text-[#34313d]">
        {longLink}
      </p>

      <div className="flex items-center gap-10">
        <span
          className="text-[2rem] font-medium
       leading-[3.6rem] tracking-[0.015rem] text-[#2bd0d0] "
        >
          {shortLink}
        </span>
        <button className="rounded-lg bg-[#2bd0d0] px-8 py-3 text-[1.5rem] font-bold text-white transition-all duration-300 hover:bg-[#9AE3E3]">
          Copy
        </button>
        <button className="rounded-lg bg-red-500 px-8 py-3 text-[1.5rem] font-bold text-white">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ShortenedLinks;
