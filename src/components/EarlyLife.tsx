import oldPic from "../assets/old.png";
import phd from "../assets/phd.webp";
import school from "../assets/school.jpeg";
import SubHeading from "./SubHeading";

function EarlyLife() {
  return (
    <section className="p-10 md:p-20">
      <div className="relative max-w-7xl m-auto flex flex-col items-center justify-between md:flex-row">
        <div className="md:w-[50%]">
          <SubHeading title="Early Life" />
          <div className="flex flex-col gap-4">
            <p>
              Elon Musk was born on June 28, 1971, in Pretoria, South Africa. He
              developed an early interest in technology and programming,
              creating and selling a video game by age 12.
            </p>
            <p>
              After attending schools in South Africa, he moved to Canada for
              university. Musk earned dual bachelor's degrees in economics and
              physics at the University of Pennsylvania before briefly pursuing
              a Ph.D. at Stanford.
            </p>
            <p>
              He left Stanford after just two days to focus on his
              entrepreneurial ventures in the tech industry. This decision
              marked the beginning of his extraordinary journey to becoming a
              tech visionary and founder of several groundbreaking companies.
            </p>
          </div>
        </div>
        <div className="relative flex-col md:w-[50%] justify-center mt-10 -ml-6 m-4 md:m-10">
          <img
            src={school}
            alt="group photo of elon with his classmates"
            className="relative w-[50%] z-10 border-4 border-black"
          />
          <img
            src={oldPic}
            alt="a old pic of Elon musk sitting on a chair in front of computer"
            className="-mt-10 ml-auto w-[90%] border-4 border-black"
          />
          <img
            src={phd}
            alt="a old pic of Elon musk sitting on a chair in front of computer. a rocket on monitor"
            className="-mt-10 ml-auto -mr-10 w-[60%] z-10 relative border-4 border-black"
          />
        </div>
      </div>
    </section>
  );
}

export default EarlyLife;
