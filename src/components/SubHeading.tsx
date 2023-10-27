function SubHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h1
      className={`text-3xl md:text-5xl font-gloock font-bold mb-10 ${
        className && className
      } mix-blend-difference relative text-black inline-block`}
    >
      {title}
      <span className="h-2 w-full -z-10 left-2 absolute bottom-[0.15rem]  bg-amber-600 "></span>
    </h1>
  );
}

export default SubHeading;
