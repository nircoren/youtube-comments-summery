"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="anchor relative z-10 py-16 md:py-20 lg:py-28 ">
      <div className="container">
        <SectionTitle
          title="Pricing plans"
          paragraph=""
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none"
                  : "text-dark dark:"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-darkPurple transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:"
                  : "pointer-events-none"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-11 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Free"
            price={isMonthly ? "0" : "0"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
          >
            <OfferList text="10 Free YouTube video comments summaries" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Pro"
            price={isMonthly ? "12" : "100"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
            isHighlighted={true}
          >
            <OfferList text="1000 YouTube video comments summaries per month" status="active" isHighlighted={true}/>
            <OfferList text="premium support" status="active" isHighlighted={true}/>
          </PricingBox>
          <PricingBox
            packageName="Pro S"
            price={isMonthly ? "50" : "500"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
          >
            <OfferList text="10000 YouTube video comments summaries per month" status="active"/>
            <OfferList text="premium support" status="active"/>
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
