// import { MouseEvent } from "react";

import { useState } from "react";

type ShortenedLinksProps = {
  longLink: string;
  shortLink: string;
  onDelete: (index: number) => void;
  index: number;
  onCopyLink: (link: string) => void;
};
// e?: MouseEvent<HTMLButtonElement>

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
        <button
          className="rounded-lg bg-[#2bd0d0] px-8 py-3 text-[1.5rem] font-bold text-white transition-all duration-300 hover:bg-[#9AE3E3]"
          onClick={handleCopy}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
        <button
          className="rounded-lg bg-red-500 px-8 py-3 text-[1.5rem] font-bold text-white transition-all duration-300 hover:bg-red-300"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ShortenedLinks;
