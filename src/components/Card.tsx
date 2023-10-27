import { company } from "../data";

function Card({ data }: { data: company }) {
  return (
    <div className="relative aspect-video group border-2 rounded-xl m-2 bg-stone-950 flex overflow-hidden w-72 md:w-[35rem]">
      <div
        className="group-hover:w-0 group-hover:p-0 z-20 group-hover:translate-x-4 
       mix-blend-difference transition-all duration-700 w-[40%] p-5 text-amber-500"
      >
        <h2 className=" font-gloock text-2xl">{data.title}</h2>
        <p>({data.founded})</p>
      </div>
      <div className="group-hover:md:w-[14rem] md:w-[25rem] flex overflow-hidden transition-all duration-700 z-10">
        <img src={data.imageSrc} alt="twitter" className="object-cover" />
      </div>
      <div className="absolute right-0 w-[60%] p-4 bg-white h-full overflow-scroll">
        {data.description}
      </div>
    </div>
  );
}

export default Card;
