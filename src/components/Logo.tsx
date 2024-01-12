function Logo({ color }: { color: string }) {
  return (
    <svg
      className={`h-[3.3rem] w-[14rem] ${
        color === "white" ? "fill-white" : "fill-[#34313d]"
      }`}
    >
      <use xlinkHref="./logo.svg#logo" />
    </svg>
  );
}

export default Logo;
