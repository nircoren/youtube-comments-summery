import Link from "next/link";
import Rating from "../Rating";

function SocialProof() {
  return (
    <section
      className="anchor relative z-10 py-[60px] dark:bg-gray-dark md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[40px] 2xl:pt-[40px]"
    >
      <div className="container flex justify-center items-center flex-col gap-x-5 lg:flex-row lg:gap-x-36">
        <div className="avatar flex items-center">
          <div className="h-48 rounded-full">
            <img src="/person/person1.jpeg" />
          </div>
        </div>
        <div className="max-w-md">
          <div className="mb-3">
            <Rating />
          </div>
          <p className="text-white mb-3">
            I have been using Summarize Youtube comments for a few months now
            and I am absolutely blown away by its efficiency and convenience.
            This software has truly saved me so much time by summarizing all the
            comments on a Youtube video into one concise and easy-to-read
            format. No more scrolling through endless comments to find the
            relevant ones, Summarize does it all for me in a matter of seconds.
          </p>
          <p className="text-white">
            Dor Cohen, <b>Web Developer</b>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
