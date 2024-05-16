'use client'
import ContactForm from "./Form";

export default function Contact2() {
    return (
      <section
        className="relative z-10 overflow-hidden bg-white
    pt-[60px] dark:bg-dark md:pb-[60px] md:pt-[60px] xl:pb-[100px] xl:pt-[100px] 2xl:pb-[40px] 2xl:pt-[40px]
    "
      >
        <div className="container grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="container  items-left">
            <h3>Summerize Your Comments Now!</h3>
            <p className="text-base max-w-screen-sm text-left text-white mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
              deserunt optio quod, error totam maiores sit et? Provident
              praesentium
            </p>
          </div>
          <div className="container">
            <div id="contactForm">
                <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    );
  }