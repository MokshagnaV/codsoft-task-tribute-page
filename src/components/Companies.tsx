import Card from "./Card";
import { companies } from "../data";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import SubHeading from "./SubHeading";

function Companies() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-55%"]);

  return (
    <>
      <section className="md:hidden">
        <div className="mb-8 text-center">
          <SubHeading title="Business Career" />
        </div>
        <div className="flex gap-5 flex-wrap justify-center items-stretch">
          {companies.map((company, index) => (
            <Card key={index} data={company} small />
          ))}
        </div>
      </section>

      <section
        ref={targetRef}
        className="max-md:hidden max-w-7xl m-auto relative h-[300vh]"
      >
        <div className="sticky top-20 flex flex-col items-center overflow-hidden">
          <div className="sticky top-0 mb-8 text-center">
            <SubHeading title="Business Career" />
          </div>
          <motion.div style={{ x }} className="flex gap-4">
            {companies.map((company, index) => (
              <Card key={index} data={company} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Companies;
