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
        <div className="flex">
          <ul>
            <li>
              <a href="">Bosh sahifa</a>
            </li>
            <li>
              <a href="">Kitoblar</a>
            </li>
            <li>
              <a href="">Aksiyalar</a>
            </li>
            <li>
              <a href="">Yangiliklar</a>
            </li>
            <li>
              <a href="">Kontaktlar</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
