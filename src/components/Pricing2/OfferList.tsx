import CheckIcon from "../Common/CheckIcon";

const crossIcon = (
  <svg width="7" height="7" viewBox="0 0 8 8" className="fill-current">
    <path d="M7.4499 0.512524C7.1124 0.175024 6.5874 0.175024 6.2499 0.512524L3.9999 2.80002L1.7124 0.512524C1.3749 0.175024 0.849902 0.175024 0.512402 0.512524C0.174902 0.850024 0.174902 1.37502 0.512402 1.71252L2.7999 4.00002L0.512402 6.28752C0.174902 6.62502 0.174902 7.15002 0.512402 7.48752C0.662402 7.63752 0.887402 7.75002 1.1124 7.75002C1.3374 7.75002 1.5624 7.67502 1.7124 7.48752L3.9999 5.20002L6.2874 7.48752C6.4374 7.63752 6.6624 7.75002 6.8874 7.75002C7.1124 7.75002 7.3374 7.67502 7.4874 7.48752C7.8249 7.15002 7.8249 6.62502 7.4874 6.28752L5.1999 4.00002L7.4874 1.71252C7.7874 1.37502 7.7874 0.850024 7.4499 0.512524Z" />
  </svg>
);

const OfferList = ({
  text,
  status,
  isHighlighted
}: {
  text: string;
  status: "active" | "inactive";
  isHighlighted?:boolean
}) => {
  return (
    <div className="mb-5 flex items-start">
      <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full mt-1 bg-purple text-white">
        {status === "active" ? CheckIcon : crossIcon}
      </span>
      <p className={`m-0 text-base font-medium text-body-color ${isHighlighted ? "text-realBlack" : "text-body-color"}`}>{text}</p>
    </div>
  );
};

export default OfferList;
