import Card from "./Card";
import { companies } from "../data";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

function Companies() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <h1 className="py-20 sticky top-0 text-center text-4xl font-gloock">
        Business Career
      </h1>
      <div className="sticky top-44 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {companies.map((company, index) => (
            <Card key={index} data={company} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Companies;
