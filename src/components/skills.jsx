import { useContext } from "react";
import { DataContext } from "../context/Context";
import Marquee from "react-fast-marquee";
//import useAutoScroll from "../hooks/autoScroll";

const Skills = () => {
  const { variables, data, startAutoScroll } = useContext(DataContext);
  //const scrollContainerRef = useAutoScroll(startAutoScroll);

  return (
    <div className="pb-10 relative px-10 lg:px-0 dark:bg-[#484148c9]">
      <div className="flex flex-col mx-auto mt-10">
        <div className="w-[11.3125rem] h-[3.0625rem] absolute top-[0] left-[-4.375rem] gap-0 rounded-[1.84375rem] z-10 bg-[#525252] opacity-80"></div>
        <div className="text-center text-4xl mb-10 z-50 dark:text-white font-bold">
          <h2 className="">{data.skill}</h2>
        </div>
        <div className="relative">
          <Marquee gradient={false} speed={150} pauseOnHover={true}>
            {variables.skills.map((skill, index) => (
              <div
                className="flex-none rounded-lg w-36 p-4 shadow-md bg-white dark:bg-[#2A262B] mx-4"
                key={index}
              >
                <img
                  src={skill.url}
                  alt={skill.name}
                  className="w-16 h-16 mb-4 mx-auto"
                />
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
