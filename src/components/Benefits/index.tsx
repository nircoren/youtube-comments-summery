import BenefitsList from "./BenefitsList";

function Benefits() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-white
    pt-[60px] dark:bg-gray-dark md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[40px] 2xl:pt-[40px]
    "
    >
      <div className="container flex">
        <div className="container">
          <BenefitsList />
        </div>
        <div className="container">
          <img className="h-fit max-h-96" src="/benefits.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
