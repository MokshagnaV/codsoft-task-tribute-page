import ElonMusk from "../assets/Elon-Musk.webp";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-[110vh] rounded-b-[5rem] overflow-hidden shadow-2xl  w-full flex flex-col-reverse md:flex-row bg-black max-md:pb-10">
      <div className="md:w-[40%] h-[20%] md:h-full flex flex-col justify-center p-10">
        <div className="absolute max-md:top-[30rem] md:w-[50%]">
          <motion.h1
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="mb-5 font-gloock text-5xl md:text-9xl font-bold  mix-blend-difference text-white "
          >
            Elon Reeve Musk
          </motion.h1>
          <motion.p
            className="text-normal md:text-xl capitalize mix-blend-difference text-white"
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
          >
            A Business magnate, investor and conspiracy theorist
          </motion.p>
        </div>
      </div>
      <div className="md:w-[60%] h-full flex justify-center items-center">
        <img src={ElonMusk} className="h-full object-cover" />
      </div>
    </section>
  );
}

export default Hero;
