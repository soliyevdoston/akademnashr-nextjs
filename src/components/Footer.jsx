import React from "react";
import Logo from "@/images/logo.svg";

export default function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto mt-[200px]">
      <div className="w-[1100px] ml-[170px]   py-[16px] ">
        <div className="pb-[40px]">
          {" "}
          <img src={Logo.src} alt="" />
        </div>

        <div className="bg-[#252420] h-[5px]"></div>
      </div>
    </div>
  );
}
