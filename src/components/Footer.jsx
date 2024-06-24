/* eslint-disable react/no-unescaped-entities */
import Logo from "../assets/logo.png";
import TwitterIcon from "../assets/twitter-icon.svg";

const Footer = () => {
  return (
    <footer className="mt-5 flex max-h-[700px] flex-col items-center bg-white md:mt-24 md:max-h-[420px] md:px-[124px]">
      {/* top */}
      <div className="relative z-20 mt-[60px] flex w-full flex-col justify-between px-5 md:flex-row md:items-center md:px-0">
        <div className="gradient-footer h-[150px] w-[1300px]"></div>
        {/* logo-social */}
        <div className="z-20 flex w-[231px] flex-col gap-5 md:w-[294px]">
          <a href="/">
            <img
              className="w-[140px] md:w-[139px]"
              src={Logo}
              alt="Main logo"
            />
          </a>
          <p className="-mt-3 font-darker-grotesque text-[15px] text-[#081a56] md:-mt-0 md:text-lg">
            "Pogo OS Studio tu solución tecnológica completa."
          </p>
          <div className="-mt-2 md:-mt-0">
            <img src={TwitterIcon} alt="Twitter Icon" />
          </div>
        </div>
        {/* links */}
        <div className="z-20 mt-8 flex gap-[133px] md:-ml-10 md:gap-[139px]">
          {/* left */}
          <div className="">
            <h5 className="font-space-grotesk text-[15px] leading-[150%] text-[#030610] md:text-xl">
              Compañía
            </h5>
            <div className="flex flex-col md:pt-2">
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] hover:text-black hover:underline md:text-xl"
                href="#home"
              >
                Inicio
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] hover:text-black hover:underline md:text-xl"
                href="#features"
              >
                Proyectos
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] hover:text-black hover:underline md:text-xl"
                href="#how-to-use"
              >
                Pogo OS
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] hover:text-black hover:underline md:text-xl"
                href="#plans"
              >
                PogoGPT DC
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] hover:text-black hover:underline md:text-xl"
                href="#chatbot"
              >
                PogoGPT TM
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] hover:text-black hover:underline md:text-xl"
                href="#faq"
              >
                FAQ
              </a>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-[55px]">
            {/* top */}
            <div className="">
              <h5 className="font-space-grotesk text-[15px] leading-[150%] text-[#030610] md:text-xl">
                Legal
              </h5>
              <div className="flex flex-col">
                <a
                  className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] hover:text-black hover:underline md:text-xl"
                  href="#"
                >
                  Política de privacidad
                </a>
                <a
                  className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] hover:text-black hover:underline md:text-xl"
                  href="#"
                >
                  Términos y condiciones
                </a>
              </div>
            </div>
            {/* bottom */}
            <div className="">
              <h5 className="font-space-grotesk text-[15px] leading-[150%] text-[#030610] md:text-xl">
                Contáctanos
              </h5>
              <div className="flex flex-col">
                <a
                  className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] hover:text-black hover:underline md:text-xl"
                  href="mailto:contact@pogoos.info"
                >
                  contact@pogoos.info
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter */}
        <div className="ml-[33px] mt-11 flex w-[254px] flex-col items-center justify-center gap-1 md:ml-0 md:mt-4 md:px-0">
          <h3 className="self-start font-space-grotesk text-[15px] leading-[150%] text-[#030610] md:text-xl">
            Boletin informativo
          </h3>
          <form className="flex w-full flex-col">
            <input
              className="my-[5px] h-[33px] w-full rounded-lg border border-[#a7a7a7] bg-white px-[13px] py-2 font-darker-grotesque text-xs md:h-[43px]"
              type="text"
              placeholder="Introduce tu correo electrónico"
            />
            <button
              type="submit"
              className="z-20 flex h-[33px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#8D1EA2] to-[#090EDB] px-[15px] py-[12px] font-darker-grotesque text-sm font-bold text-white hover:opacity-75 md:h-[43px] md:justify-center md:px-[24px] md:py-[14px] md:text-lg"
            >
              Suscribir
              <svg
                width="16.000000"
                height="19.000000"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <path
                  id="Vector"
                  d="M6 7C6 7 10 9.94 10 11C10 12.05 6 15 6 15"
                  stroke="white"
                  strokeOpacity="1.000000"
                  strokeWidth="1.250000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>
          <p className="pt-2 font-darker-grotesque text-xs font-medium leading-[150%] text-[#697586] md:pt-1">
            Al suscribirte aceptas nuestra{" "}
            <span className="text-[#030610]">política de privacidad</span> and provide
            y consiente recibir actualizaciones de nuestra empresa.
          </p>
        </div>
      </div>
      {/* bottom */}
      <div className="mb-10 pt-7 font-darker-grotesque text-[15px] text-[#081a56] md:pl-4 md:pt-16 md:text-lg">
        Copyright © 2024, All rights reserved by Pogo OS Studio
      </div>
    </footer>
  );
};

export default Footer;
