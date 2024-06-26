import Gallery from "../assets/gallery.png";
import SearchLabels from "../assets/search-labels.png";
import AIChatbot from "../assets/ai-chatbot.png";
import Checkmark from "../assets/checkmark-icon.png";

const HowToUse = () => {
  return (
    <section id="how-to-use" className="mt-5 lg:mt-[43px]">
      {/* Manage everything */}
      <div className="flex flex-col items-center justify-center gap-3 p-0 px-5 md:mx-10 md:flex-row md:px-0 lg:flex-row lg:gap-11 xl:mx-[124px]">
        <div className="w-full lg:mb-0 lg:w-[770px]">
          <img src={Gallery} alt="Gallery" className="h-auto w-full" />
        </div>

        <div className="w-full px-7 lg:w-[375px] lg:px-5 lg:py-[30px]">
          <h2 className="mb-3 font-space-grotesk text-xl font-semibold lg:mb-7 lg:pt-2 lg:text-[33px]">
            Manage everything
          </h2>
          <p className="font-darker-grotesque text-[15px] leading-[1.5] text-[#071a56] lg:mb-0 lg:text-lg">
            Easily organize all your photos in one convenient place for
            effortless access and streamlined management with advanced features.
          </p>
          <ul className="space-y-3 pt-4 font-space-grotesk text-[15px] lg:pt-6 lg:text-xl">
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Convenient centralized access
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Effortless organization
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Simplified management tasks
            </li>
          </ul>
        </div>
      </div>

      {/* Facial identification */}
      <div className="relative mt-[120px] flex h-[345px] flex-col bg-[url('assets/facial-id.png')] bg-center px-5 md:ml-[94px] md:mr-5 md:mt-[90px] md:h-[470px] md:items-center md:justify-center md:px-0">
        <div className="left-[30px] mt-5 w-full rounded-lg bg-white bg-opacity-90 px-5 py-4 md:absolute md:mt-0 lg:w-[390px] lg:py-[30px]">
          <h2 className="mb-3 font-space-grotesk text-xl font-semibold lg:mb-7 lg:pt-2 lg:text-[33px]">
            Facial identification
          </h2>
          <p className="w-full font-darker-grotesque text-[15px] leading-[1.5] text-[#071a56] md:w-[90%] lg:mb-0 lg:text-lg">
            Effortlessly upload your photos and let the platform accurately
            identify faces, streamlining organization and enhancing viewing
            experience.
          </p>
          <ul className="space-y-3 pt-4 font-space-grotesk text-[15px] lg:pt-6 lg:text-xl">
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Instant
              facial recognition
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Personalized photo organization
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Enhanced
              privacy controls
            </li>
          </ul>
        </div>
      </div>

      {/* Search by Labels */}
      <div className="mt-[46px] flex flex-col items-center justify-center gap-3 p-0 md:mx-10 md:mt-[90px] md:flex-row md:px-0 lg:flex-row lg:gap-11 xl:mx-[124px]">
        <div className="w-full lg:mb-0 lg:w-[770px]">
          <img
            src={SearchLabels}
            alt="Gallery"
            className="px-5 md:h-[350px] md:w-[770px] md:px-0"
          />
        </div>

        <div className="w-full px-10 pt-1 md:ml-7 md:pt-0 lg:w-[375px] lg:px-5 lg:py-[30px]">
          <h2 className="mb-3 font-space-grotesk text-xl font-semibold lg:mb-7 lg:pt-2 lg:text-[33px]">
            Search by labels
          </h2>
          <p className="font-darker-grotesque text-[15px] leading-[1.5] text-[#071a56] lg:mb-0 lg:text-lg">
            Utilize predefined labels or meticulously create custom tags to
            facilitate searching for specific images, enhancing search accuracy
            and efficiency.
          </p>
          <ul className="space-y-3 pt-4 font-space-grotesk text-[15px] lg:pt-7 lg:text-xl">
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Versatile
              searching options
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Personalized tagging
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Enhanced
              search precision
            </li>
          </ul>
        </div>
      </div>

      {/* Grouping images */}
      <div className="relative mt-[60px] flex h-[400px] flex-col bg-[url('assets/grouping-images.png')] bg-center md:mt-[90px] md:h-[470px] md:items-center md:justify-center">
        <div className="left-[124px] top-[73px] mx-10 mt-20 rounded-lg bg-white bg-opacity-90 px-3 py-3 md:absolute md:mx-0 md:mt-0 md:px-5 md:py-[30px] lg:w-[360px]">
          <h2 className="mb-3 font-space-grotesk text-xl font-semibold lg:mb-7 lg:pt-2 lg:text-[33px]">
            Grouping images
          </h2>
          <p className="w-full font-darker-grotesque text-[15px] leading-[1.5] text-[#071a56] lg:mb-0 lg:text-lg">
            Employ sophisticated AI algorithms or manual grouping methods to
            effortlessly organize your photos into logical categories with
            precision.
          </p>
          <ul className="space-y-3 pt-4 font-space-grotesk text-[15px] lg:pt-[30px] lg:text-xl">
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Automated
              categorization
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Customizable groupings
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Intuitive
              organization
            </li>
          </ul>
        </div>
      </div>

      {/* AI Chatbot */}
      <div className="mt-[50px] flex flex-col items-center justify-center gap-3 p-0 md:mx-10 md:mt-[90px] md:flex-row md:px-0 lg:flex-row lg:gap-11 xl:ml-[124px] xl:mr-[90px]">
        <div className="w-full lg:mb-0">
          <img
            src={AIChatbot}
            alt="Gallery"
            className="px-5 md:h-[400px] md:w-[770px] md:px-0"
          />
        </div>

        <div className="w-full px-16 pt-[3px] md:px-0 md:pt-0 lg:w-[580px]">
          <h2 className="mb-[10px] font-space-grotesk text-xl font-semibold leading-[140%] lg:mb-4 lg:text-[33px]">
            AI Chatbot: Natural Language Interaction
          </h2>
          <p className="font-darker-grotesque text-[15px] leading-[1.5] text-[#071a56] lg:mb-0 lg:text-lg">
            Engage in seamless conversation with our AI chatbot, using natural
            language to execute search commands effortlessly.
          </p>
          <ul className="space-y-3 pt-4 font-space-grotesk text-[15px] lg:pt-7 lg:text-xl">
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Versatile
              interaction
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Intuitive
              flow
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Effortless execution
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
