import { FormEvent, useEffect, useState } from "react";
import ShortenedLinks from "./ShortenedLinks";

type ShortenedLinksProps = {
  longLink: string;
  shortLink: string;
};

function ShortenSection() {
  const storedData = localStorage.getItem("shortenedLinks");

  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLinksProps[]>(
    JSON.parse(storedData!) || [],
  );
  const [longLink, setLongLink] = useState("");
  const [error, setError] = useState("");

  const urlRegex = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i",
  );
  // useEffect(() => {
  async function getShortenedLink(longLink: string) {
    try {
      const response = await fetch(
        `http://tinyurl.com/api-create.php?url=${longLink}`,
      );

      const data = await response.text();
      console.log(data);

      const newData = {
        longLink,
        shortLink: data,
      };

      setShortenedLinks((prevLinks) => [...prevLinks, newData]);
    } catch (error) {
      setError("Something went wrong, please try again");
    }
  }

  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  // e: MouseEvent<HTMLButtonElement>
  function handleDelete(index: number) {
    setShortenedLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  }

  function handleCopyLink(link: string) {
    navigator.clipboard.writeText(link);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const inputElement = form.elements[0] as HTMLInputElement;

    if (!urlRegex.test(inputElement.value)) {
      setError("Please enter a valid URL");
    } else if (inputElement.value.trim() === "") {
      setError("Please enter a link");
    } else {
      setError("");
      getShortenedLink(inputElement.value);
      setLongLink("");
    }
  }

  const isMobile = window.innerWidth < 700;
  const backgroundImg = isMobile
    ? "./bg-boost-mobile.svg"
    : "./bg-boost-desktop.svg";

  return (
    <section className="tablet:mx-20 mobile:mx-8 mx-[10rem] -mt-40">
      <section
        style={{
          background: `url(${backgroundImg}), linear-gradient(180deg, #3a3054, #3a3054)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" mobile:px-10 mobile:py-10 rounded-2xl px-24 py-20"
      >
        <form className="tablet:flex-col flex gap-10" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={`mobile:text-[1.6rem] mobile:px-4 basis-full rounded-2xl border-[3px] border-solid px-12 py-6 text-[2rem] font-medium leading-[3.6rem] tracking-[0.015rem] text-[#34313d] placeholder:opacity-50 focus:outline-none ${
              error
                ? "border-[#f46363] placeholder:text-[#f46363] focus:border-[#f46363]"
                : "border-transparent focus:border-[3px]"
            }`}
            value={longLink}
            onChange={(e) => setLongLink(e.target.value)}
          />
          <button className="tablet:basis-0 basis-[25rem] rounded-2xl bg-[#2bd0d0] px-12 py-7 text-[2rem] font-bold text-white transition-all duration-300 hover:bg-[#9AE3E3]">
            Shorten It!
          </button>
        </form>
        <p className="pt-4 text-[1.6rem] italic leading-[1.8rem] tracking-[0.0109rem] text-[#f46363]">
          {error}
        </p>
      </section>

      {shortenedLinks.length > 0 && (
        <section className="space-y-7 pt-10">
          {shortenedLinks.map((link, index) => (
            <ShortenedLinks
              key={link.shortLink}
              longLink={link.longLink}
              shortLink={link.shortLink}
              index={index}
              onDelete={() => handleDelete(index)}
              onCopyLink={() => handleCopyLink(link.shortLink)}
            />
          ))}
        </section>
      )}
    </section>
  );
}

export default ShortenSection;
