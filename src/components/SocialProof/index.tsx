import Link from "next/link";
import Rating from "../Rating";

function SocialProof() {
  return (
    <section
      className="relative z-10 overflow-hidden
    pt-[60px] dark:bg-gray-dark md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[40px] 2xl:pt-[40px]
    "
    >
      <div className="container flex justify-center align-center gap-x-36">
        <div className="avatar flex items-center">
          <div className="h-48 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="max-w-md">
          <div className="mb-3">
            <Rating />
          </div>
          <p className="text-white mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            sed veniam fugit exercitationem reiciendis, ipsum nulla illum natus
            sequi quos error tempore explicabo et assumenda eveniet placeat
            magnam impedit aspernatur.
          </p>
          <p className="text-white">
            John Jones, <b>Web Developer</b>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
