import Link from "next/link";

function Cta() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-white
    pt-[60px] dark:bg-dark md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[40px] 2xl:pt-[40px]
    "
    >
      <div className="container flex flex-col items-center">
        <h3>Summerize Your Comments Now!</h3>
        <p className="text-base max-w-screen-sm text-center text-white mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          deserunt optio quod, error totam maiores sit et? Provident praesentium
        </p>
        <Link href="#pricing" className="btn">
          Go Pro
        </Link>
      </div>
    </section>
  );
}

export default Cta;
