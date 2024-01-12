import FooterListItem from "./FooterListItem";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="grid grid-cols-6 bg-[#232127] px-[16rem] py-28">
      <div className="col-span-2">
        <Logo color="white" />
      </div>

      <FooterListItem
        title="Features"
        items={["Link Shortening", "Branded Links", "Analytics"]}
      />
      <FooterListItem
        title="Resources"
        items={["Blog", "Developers", "Support"]}
      />
      <FooterListItem
        title="Company"
        items={["About", "Our Team", "Careers", "Contact"]}
      />

      <div className="flex gap-8">
        <svg className="h-[2.5rem] w-[2.5rem] cursor-pointer fill-white transition-all duration-300 hover:fill-[#2bd0d0]">
          <use xlinkHref="./icon-facebook.svg#facebook" />
        </svg>
        <svg className="h-[2.5rem] w-[2.5rem] cursor-pointer fill-white transition-all duration-300 hover:fill-[#2bd0d0]">
          <use xlinkHref="./icon-twitter.svg#twitter" />
        </svg>
        <svg className="h-[2.5rem] w-[2.5rem] cursor-pointer fill-white transition-all duration-300 hover:fill-[#2bd0d0]">
          <use xlinkHref="./icon-pinterest.svg#pinterest" />
        </svg>
        <svg className="h-[2.5rem] w-[2.5rem] cursor-pointer fill-white transition-all duration-300 hover:fill-[#2bd0d0]">
          <use xlinkHref="./icon-instagram.svg#instagram" />
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
