import Link from "next/link";
import AvatarGroup from "../AvatarGroup";
import Rating from "../Rating";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16
        pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]
        "
      >
        <div className="container flex flex-col max-w-7xl lg:flex-row">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[800px] text-left">
                  <h1 className="mb-5 text-4xl lg:text-6xl md:text-5xl sm:text-4xl font-bold leading-tight text-black dark:text-white  sm:leading-tight  md:leading-tight">
                    Summarize YouTube Comments
                  </h1>
                  {/* <h2 className="mb-5 text-4xl md:text-2xl sm:text-2xl font-bold leading-tight text-black dark:text-white sm:leading-tight md:leading-tight">
                  </h2> */}
                  <p className="mb-5 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-lg">
                    End doom scrolling! get the highlights with Summarize
                    Youtube Comments Chrome extension, AI comments summarizer.
                  </p>
                  <div className="flex mb-5">
                    <Link className="btn md:hidden"
                    href="#pricing">
                        Go Pro
                    </Link>
                    <Link
                      href="https://chromewebstore.google.com/detail/merlin-1-click-access-to/camppjleccjaphfdbohjdohecfnoikec"
                      target="_blank"
                      rel="noreferrer"
                      className="btn items-left justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-md text-lg bg-cornblue-600 text-zinc-100 shadow hover:bg-cornblue-600/90 hidden h-16 w-fit md:flex space-x-3"
                      style={{ backgroundColor: "#6065df" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-7 w-7 shrink-0"
                      >
                        <g clip-path="url(#chrome-logo_svg__a)">
                          <path
                            fill="#fff"
                            d="M11.987 17.986a5.967 5.967 0 1 0 0-11.934 5.967 5.967 0 0 0 0 11.934"
                          ></path>
                          <path
                            fill="url(#chrome-logo_svg__b)"
                            d="m6.82 15.004-5.167-8.95a11.93 11.93 0 0 0 10.335 17.9l5.167-8.95v-.002a5.963 5.963 0 0 1-8.151 2.187 5.962 5.962 0 0 1-2.185-2.185"
                          ></path>
                          <path
                            fill="url(#chrome-logo_svg__c)"
                            d="m17.154 15.004-5.166 8.949a11.925 11.925 0 0 0 9.467-4.669 11.931 11.931 0 0 0 .865-13.231H11.985a5.963 5.963 0 0 1 5.969 5.967 5.961 5.961 0 0 1-.8 2.984"
                          ></path>
                          <path
                            fill="#1A73E8"
                            d="M11.987 16.744a4.724 4.724 0 1 0 0-9.448 4.724 4.724 0 0 0 0 9.448"
                          ></path>
                          <path
                            fill="url(#chrome-logo_svg__d)"
                            d="M11.987 6.053h10.334A11.928 11.928 0 0 0 8.898.493a11.93 11.93 0 0 0-7.245 5.561l5.166 8.95h.002a5.965 5.965 0 0 1 5.166-8.95"
                          ></path>
                        </g>
                        <defs>
                          <linearGradient
                            id="chrome-logo_svg__b"
                            x1="13.279"
                            x2="2.945"
                            y1="23.208"
                            y2="5.309"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#1E8E3E"></stop>
                            <stop offset="1" stop-color="#34A853"></stop>
                          </linearGradient>
                          <linearGradient
                            id="chrome-logo_svg__c"
                            x1="10.246"
                            x2="20.58"
                            y1="23.984"
                            y2="6.085"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FCC934"></stop>
                            <stop offset="1" stop-color="#FBBC04"></stop>
                          </linearGradient>
                          <linearGradient
                            id="chrome-logo_svg__d"
                            x1="1.653"
                            x2="22.321"
                            y1="7.545"
                            y2="7.545"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#D93025"></stop>
                            <stop offset="1" stop-color="#EA4335"></stop>
                          </linearGradient>
                          <clipPath id="chrome-logo_svg__a">
                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="grid">
                        <div className="text-sm text-left">Install from</div>
                        <div className="text-xl">Chrome Web Store</div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex gap-7">
                    <AvatarGroup />
                    <div>
                      <Rating />
                      <p className="text-base text-white">100+ happy users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:-m-4 relative flex flex-col items-center pt-8 px-8 lg:p-0 lg:w-full">
            <img
              className="w-full max-w-xl lg:ml-auto md:mx-auth md:mt-2"
              src="/leptop_mockup.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
