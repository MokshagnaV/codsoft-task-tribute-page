import { awards } from "../data";
import SubHeading from "./SubHeading";

function Awards() {
  return (
    <section className="p-10 md:p-20">
      <div className="max-w-7xl m-auto">
        <div className="text-center">
          <SubHeading title="Awards" />
        </div>
        <div>
          <ul>
            {awards.map((award) => (
              <li
                key={award.title}
                className="py-2 text-normal md:text-xl list-disc"
              >
                <span className="font-bold">
                  {award.title} ({award.year})
                </span>
                : {award.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Awards;
