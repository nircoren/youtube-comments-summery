import Link from "next/link";
import AvatarGroup from "../AvatarGroup";
import Rating from "../Rating";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 min-h-screen
        pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]
        "
      >
        <div className="container max-w-7xl flex">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[800px] text-left">
                  <h1 className="mb-5 text-4xl lg:text-6xl sm:text-4xl font-bold leading-tight text-black dark:text-white  sm:leading-tight md:text-5xl md:leading-tight">
                    Summerize Youtube Comments
                  </h1>
                  <h2 className="mb-5 text-4xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                    End doom scrolling!
                  </h2>
                  <p className="mb-5 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    No more scrolling for hours - get the highlights with our
                    YouTube Comment Summarizer plugin. It's like a TL;DR but for
                    the comment section. 💬✨
                  </p>
                  <div>
                    <Link href="#pricing" className="btn mb-5">
                      Get Pro
                    </Link>
                  </div>
                  <div className="flex gap-7">
                    <AvatarGroup/>
                    <div>
                      <Rating/>
                      <p className="text-base text-white">3672 happy users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <img className="h-full" src="/leptop_mockup.png" alt="" />
          </div>
        </div>


      </section>
    </>
  );
};

export default Hero;