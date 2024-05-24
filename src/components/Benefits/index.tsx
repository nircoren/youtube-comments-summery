import BenefitsList from "./BenefitsList";

function Benefits() {
  return (
    <section
    id="benefits"
      className="anchor relative z-10 bg-white
      pb-[60px] pt-[60px] dark:bg-gray-dark md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[40px] 2xl:pt-[40px]
    "
    >
      <div className="container flex flex-col-reverse col-reverse lg:flex-row md:flex-row sm:justify-center xs:flex-col">
        <div className="container">
          <BenefitsList />
        </div>
        <div className="container py-8">
          <img className="h-fit max-h-96" src="/youtube-ui.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
