import Logo from "@/images/logo.svg";

export default function Header() {
  return (
    <div>
      <div className="h-[5px] bg-[#FF7500] "></div>
      <div className="max-w-[1440px] mx-auto ">
        <div className="w-[1100px] mx-auto  py-[16px] flex justify-between items-center ">
          <img src={Logo.src} alt="Logo" className="w-[227px]" />
          <div className="flex  py-[10px] items-center ">
            <ul className="flex gap-[32px] ">
              <li>
                <a className="text-[13px] text-[#FF7500]" href="">
                  BOSH SAHIFA
                </a>
              </li>
              <li>
                <a className="text-[13px] hover:text-[#FF7500]" href="">
                  KITOBLAR
                </a>
              </li>
              <li>
                <a className="text-[13px] hover:text-[#FF7500]" href="">
                  AKSIYALAR
                </a>
              </li>
              <li>
                <a className="text-[13px] hover:text-[#FF7500]" href="">
                  KONTAKTLAR
                </a>
              </li>
            </ul>
            <div>
              <button className="bg-[#FF7500] hover:bg-[#92540d] text-[13px] ml-[32px] py-[12px] px-[24px] rounded-[4px] text-white font-bold ">
                Ro'yhatdan o'tish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
