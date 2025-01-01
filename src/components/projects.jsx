import React, { useContext } from "react";
import { DataContext } from "../context/Context";

function projects() {
  const { data, variables, darkMode } = useContext(DataContext);

  return (
    <div className="pb-20 flex items-center justify-center dark:bg-[#484148c9]">
      <div className="flex flex-col container items-center">
        <div className="mx-auto mt-10">
          <h2 className="text-4xl mb-20 text-center dark:text-white">
            {data.projectHeader}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-y-20 gap-x-10 dark:text-white">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="h-[670px] relative flex flex-col p-10 basis-[30%] max-w-[3500px] rounded-lg shadow-md"
              style={{
                backgroundColor: darkMode
                  ? variables.darkColors[index]
                  : variables.colors[index],
              }}
            >
              <div>
                <h3 className="text-3xl font-bold font-playfair leading-10 text-center ">
                  {project.name}
                </h3>
              </div>

              <div>
                <p className="text-black mt-3 text-base font-normal leading-6 text-center dark:text-white">
                  {project.description}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex gap-3 mt-5 flex-wrap justify-center ">
                  {project.skill.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-black text-base font-bold leading-[16px] tracking-[0.05em] font-playfair bg-white px-2.5 py-1.5 rounded-full hover:shadow-[#EA2678_5px_2px_20px] cursor-pointer"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex mt-5 justify-between ">
                <div>
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[20px] font-inter font-semibold leading-[30px] text-black hover:underline dark:text-white"
                  >
                    {data.show}
                  </a>
                </div>
                <div>
                  <a
                    href={project.vercelLink}
                    target="_blank"
                    className="text-[20px] font-inter font-semibold leading-[30px] text-black hover:underline dark:text-white"
                  >
                    {data.application} →
                  </a>
                </div>
              </div>
              <img
                className="absolute bottom-[-3rem] left-0 right-0 mx-auto"
                src={project.photoUrl}
                alt="Logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default projects;
