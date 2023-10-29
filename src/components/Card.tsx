import { company } from "../data";

function Card({ data, small }: { data: company; small?: boolean }) {
  return small ? (
    <div className="group rounded-t-2xl overflow-hidden bg-slate-200 max-w-xs">
      <div className="relative">
        <h3 className="text-lg absolute p-3 text-white bg-black font-gloock w-full -translate-y-14 group-hover:translate-y-0 duration-700 z-10">
          {data.title}
        </h3>
        <img
          src={data.imageSrc}
          alt={data.title}
          className="group-hover:scale-105 transition-all duration-700 "
        />
      </div>
      <div className="p-4 text-sm">{data.description}</div>
    </div>
  ) : (
    <div className="relative aspect-video group border-2 rounded-xl m-2 bg-stone-950 flex overflow-hidden w-72 md:w-[35rem]">
      <div
        className="group-hover:w-0 group-hover:p-0 z-20 group-hover:translate-x-4 
       mix-blend-difference transition-all duration-700 w-[40%] p-5 text-amber-500"
      >
        <h2 className="font-gloock text-2xl">{data.title}</h2>
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
