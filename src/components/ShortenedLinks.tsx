import { motion } from "framer-motion";
import { useState } from "react";

type ShortenedLinksProps = {
  longLink: string;
  shortLink: string;
  index: number;
  onDelete: (index: number) => void;
  onCopyLink: (link: string) => void;
};

function ShortenedLinks({
  longLink,
  shortLink,
  onDelete,
  index,
  onCopyLink,
}: ShortenedLinksProps) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    onCopyLink(shortLink);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  return (
    <motion.div
      layout
      className="tablet:flex-col tablet:items-start mobile:px-3 flex items-center justify-between rounded-lg bg-white px-12 py-7"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <p className="tablet:border-b tablet:border-[#9e9aab] tablet:border-opacity-25 tablet:px-4 tablet:pb-4 mobile:text-[1.6rem] mobile:tracking-[0.012rem] w-full text-[2rem] font-medium leading-[3.6rem] tracking-[0.015rem] text-[#34313d]">
        {longLink}
      </p>

      <div className="tablet:flex-col tablet:items-stretch tablet:gap-4 tablet:pt-4 flex items-center gap-10">
        <span
          className="mobile:text-[1.6rem] mobile:tracking-[0.012rem]
       text-[2rem] font-medium leading-[3.6rem] tracking-[0.015rem] text-[#2bd0d0] "
        >
          {shortLink}
        </span>
        <div className="flex gap-10">
          <button
            className={`w-full rounded-lg px-8 py-3 text-[1.5rem] font-bold text-white transition-all duration-300 ${
              isCopied ? "bg-[#3a3054]" : "bg-[#2bd0d0] hover:bg-[#9AE3E3]"
            }`}
            onClick={handleCopy}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
          <button
            className="w-full rounded-lg bg-red-500 px-8 py-3 text-[1.5rem] font-bold text-white transition-all duration-300 hover:bg-red-300"
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ShortenedLinks;
