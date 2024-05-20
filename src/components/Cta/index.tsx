import Link from "next/link";

function Cta() {
  return (
    <section
      className="anchor relative z-10 bg-white
    py-[60px] dark:bg-dark md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[40px] 2xl:pt-[40px]
    "
    >
      <div className="container flex flex-col items-center">
        <h3 className="text-center sm:text-center md:text-center">Summarize Comments Now!</h3>
        <p className="text-base max-w-screen-sm text-center text-white mb-8">
          Start summarizing YT comments in less than a minute.
        </p>
        <Link href="#pricing" className="btn">
          Go Pro
        </Link>
      </div>
    </section>
  );
}

export default Cta;
