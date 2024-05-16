const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  isHighlighted?: boolean;
}) => {
  const { price, duration, packageName, subtitle, children, isHighlighted } =
    props;

  return (
    <div className={`w-full relative ${isHighlighted ? "border-2 rounded-md" : ""}`}>
      <div className={`z-10 rounded-md bg-white px-8 py-10 shadow-three hover:shadow-one dark:shadow-two dark:hover:shadow-gray-dark ${isHighlighted ? 'bg-darkPurple': 'dark:bg-gray-dark'}`}>
        <div className="flex justify-center">
          <h5 className="font-semibold text-realBlack w-20 py-1 text-center rounded-2xl mb-6 bg-white/75">
            {packageName}
          </h5>
        </div>
        <div className="flex items-center justify-center">
          <h3 className="price mb-6 text-[32px] font-bold text-black dark:text-white">
            $<span className="amount">{price}</span>
            <span className="time text-lg font-medium text-body-color">
              /{duration}
            </span>
          </h3>
        </div>
        {/* <p className="mb-7 text-base text-body-color">{subtitle}</p> */}
        <div
          className={`p-8 rounded-md ${
            isHighlighted ? "dark:bg-white" : "dark:bg-innercard"
          }`}
        >
          <div>{children}</div>
          <div className="text-center">
            <button className={`w-full ${isHighlighted ? "btn" : "pale-btn"}`}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {isHighlighted ? (
          <div className="flex justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/4">
            <h5 className="font-medium text-realBlack w-24 py-1 text-center rounded-2xl mb-6 bg-white ">
              POPULAR
            </h5>
          </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default PricingBox;
