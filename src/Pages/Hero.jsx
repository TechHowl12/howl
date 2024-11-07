import React from "react";

export const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center">
      <div className="relative hidden sm:block text-white leading-none">
        <h1 className="text-[4vw] reg">TURNING</h1>
        <h1 className="text-[7vw] bold">MOONSHOTS</h1>
        <h1 className="text-[7vw] bold">
          <sup className="text-[4vw] reg">INTO</sup> BENCHMARKS
        </h1>
        <p className="absolute right-0 leading-5 light mt-6">
          Impressions & engagement are means to an end.<br /> A digital vanity metric we
          know how to achieve,<br /> but more importantly, turn into paying customers.
        </p>
      </div>
      <div className="relative block sm:hidden text-white leading-none">
        <h1 className="text-[8vw] reg">TURNING</h1>
        <h1 className="text-[11vw] bold">MOONSHOTS</h1>
        <h1 className="text-[8vw] reg">INTO</h1>
        <h1 className="text-[11vw] bold">BENCHMARKS</h1>
        <p className="absolute right-0 leading-5 light mt-6 text-[3vw]">
          Impressions & engagement are means to an end. A digital vanity metric we
          know how to achieve, but more importantly, turn into paying customers.
        </p>
      </div>
    </div>
  );
};
