import { FormEvent, useState } from "react";
import ShortenedLinks from "./ShortenedLinks";

type ShortenedLinksProps = {
  longLink: string;
  shortLink: string;
};

function ShortenSection() {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLinksProps[]>(
    [],
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
  }
  // getShortenedLink();
  // }, [longLink]);

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

  return (
    <section className="mx-[16rem] -mt-40">
      <section
        // style={{
        //   backgroundImage: "linear-gradient(180deg, #2BD0D0 0%, #34313D 100%)",
        // }}
        className=" rounded-2xl bg-[#3a3054] px-24 py-20"
      >
        <form className="flex gap-10" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="basis-full rounded-2xl px-12 py-6 text-[2rem] font-medium leading-[3.6rem] tracking-[0.015rem] text-[#34313d] placeholder:opacity-50 focus:border-none focus:outline-none"
            value={longLink}
            onChange={(e) => setLongLink(e.target.value)}
          />
          <button className="basis-[25rem] rounded-2xl bg-[#2bd0d0] px-12 py-7 text-[2rem] font-bold text-white transition-all duration-300 hover:bg-[#9AE3E3]">
            Shorten It!
          </button>
        </form>
        <p className="pt-4 text-[1.6rem] italic leading-[1.8rem] tracking-[0.0109rem] text-[#f46363]">
          {error}
        </p>
      </section>

      {shortenedLinks.length > 0 && (
        <section className="space-y-7 pt-10">
          {shortenedLinks.map((link) => (
            <ShortenedLinks
              key={link.shortLink}
              longLink={link.longLink}
              shortLink={link.shortLink}
            />
          ))}
        </section>
      )}
    </section>
  );
}

export default ShortenSection;
