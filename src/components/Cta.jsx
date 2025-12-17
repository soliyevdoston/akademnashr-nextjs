import React from "react";
import CursorImg from "@/images/cursor.svg";
import Star from "@/images/star.svg";
import Chaqmoq from "@/images/chaqmoq.svg";
import CtaImg from "@/images/sale-img.svg";
export default function Cta() {
  return (
    <div className="max-w-[1440px] mx-auto pt-[200px]">
      <div className="max-w-[1100px] ml-[170px] mx-auto flex">
        <div className="why mb-[210px]">
          <div className="w-[80px] h-[3px] bg-[#FF7500]"></div>
          <h1 className="text-[72px] font-bold  ">
            Nega aynan <br></br> Akademnashr?
          </h1>
          <div className="flex pt-[72px] gap-[40px] ">
            <div>
              <img src={CursorImg.src} alt="" />
              <h5 className="text-[24px] font-bold pt-[32px]">
                Oson buyurtma qilish
              </h5>
              <p className="text-[16px] pt-[12px]">
                Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
                buyurtma qila olasiz.
              </p>
            </div>
            <div>
              <img src={Star.src} alt="" />
              <h5 className="text-[24px] font-bold pt-[32px]">
                Eng sara kitoblar
              </h5>
              <p className="text-[16px]  pt-[12px]">
                Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har
                xil janrdagi kitoblarni topa olasiz.
              </p>
            </div>

            <div>
              <img src={Chaqmoq.src} alt="" />
              <h5 className="text-[24px] font-bold pt-[32px]">
                Tez yetkazib berish
              </h5>
              <p className="text-[16px]  pt-[12px]">
                Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
                buyurtma qila olasiz.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1100px] ml-[170px] mx-auto flex cta bg-[#252420]   ">
        <div className="flex">
          <div>
            <h2 className="text-white text-[40px] font-bold">
              Bolalar kitoblari uchun <br /> ajoyib aksiya!
            </h2>
            <p className="text-white">
              Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun
              turli mashq qo’llanmalari va komikslar.
            </p>
            <p className="text-white">
              Aksiyadagi eng katta to’plamda 50 ta kitobni 350 ming so’mga
              (aslida 383 ming so’m) sotib olishingiz mumkin.
            </p>
            <button className="bg-[#FF7500] hover:bg-[#92540d] text-[13px] mt-[32px]  py-[12px] px-[24px] rounded-[4px] text-white font-bold mb-[78px]">
              Ro'yhatdan o'tish
            </button>
          </div>
          <img
            className="absolute right-[64px] mb-[64px] w-[440px] h-[440px] rounded-[8px]"
            src={CtaImg.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
