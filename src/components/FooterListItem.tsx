import { Link } from "react-router-dom";

type FooterListItemProps = {
  title: string;
  items: string[];
};

function FooterListItem({ title, items }: FooterListItemProps) {
  return (
    <div className="space-y-9">
      <h4 className="text-[1.6rem] font-bold tracking-[-0.025rem] text-white">
        {title}
      </h4>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={"/"}
              className="text-[1.5rem] font-medium tracking-[-0.0234rem] text-[#bfbfbf] transition-all duration-300 hover:text-[#2bd0d0]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterListItem;
