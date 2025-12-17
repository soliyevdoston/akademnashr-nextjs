import React from "react";
import BookImg from "@/images/python-book.svg";
export default function Hero() {
  return (
    <div className="bg-[#252420] ">
      <div className="max-w-[1440px] mx-auto">
        <div className=" max-w-[1100px] ml-[170px] mx-auto flex">
          <div className="w-[387px] pt-[80px]  ">
            <div className="w-[80px] h-[3px] bg-[#FF7500]"></div>
            <h2 className="text-white  text-[40px] font-bold pt-[43px]">
              Pythonda dasturlash asoslari
            </h2>
            <p className="text-white pt-[24px] text-[16px] ">
              Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal
              qo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslar
              yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish
              mumkin.
            </p>
            <button className="bg-[#FF7500] text-[13px] mt-[32px]  py-[12px] px-[24px] rounded-[4px] text-white font-bold mb-[78px]">
              Ro'yhatdan o'tish
            </button>
          </div>
          <img
            className="absolute right-[170px] mt-[40px] w-[510px] h-[510px] rounded-[8px] shadow-[20px_22px_0px_0px_rgba(255,117,0,0.8)]

"
            src={BookImg.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
