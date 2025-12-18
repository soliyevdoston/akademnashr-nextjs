import React from "react";
import Logo from "@/images/logo.svg";
import Tg from "@/images/icon-telegram.svg";
import Ins from "@/images/icon-instagram.svg";
import Fac from "@/images/icon-facebook.svg";

export default function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto mt-[200px]">
      <div className="w-[1100px] ml-[170px]   py-[16px] ">
        <div className="pb-[40px] flex justify-between items-center ">
          <img src={Logo.src} alt="" />
          <div className="flex gap-[16px]">
            <img className="w-[24px] h-[24px]" src={Tg.src} alt="" />
            <img className="w-[24px] h-[24px]" src={Fac.src} alt="" />
            <img className="w-[24px] h-[24px]" src={Ins.src} alt="" />
          </div>
        </div>

        <div className="bg-[#252420] h-[5px]"></div>
        <div className="flex gap-[68px] mt-[64px] mb-[56px]">
          <ul className="w-[224px]">
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Bosh sahifa
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Kitoblar
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Aksiyalar
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Yangiliklar
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Kontaktlar
              </a>
            </li>
          </ul>
          <ul className="w-[224px]">
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Ilmiy nashrlar
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Ilmiy-ommabop nashrlar
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Ma’rifiy nashrlar
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Lug’atlar
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Adabiy-badiiy nashrlar
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Abituriyentlar uchun
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Bolalar uchun
              </a>
            </li>
          </ul>
          <ul className="w-[224px]">
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Ko’p so’raladigan savollar
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Yetkazib berish haqida
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                To’lov usullari haqida
              </a>
            </li>
          </ul>
          <ul className="w-[224px]">
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Bo’sh ish o’rinlari
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Biz bilan bog’lanish
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF7500] text-[16px]" href="">
                Maxfiylik nizomi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
