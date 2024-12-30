import { useContext } from "react";
import { DataContext } from "../context/Context";

export const footer = () => {
  const { data } = useContext(DataContext);
  const contact = data.contact;

  return (
    <div className="py-20 bg-white-100 flex items-center justify-center dark:bg-[#484148a9]">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="text-center md:text-left ">
          {contact.map((item, index) => (
            <h2
              key={index}
              className="text-3xl font-bold text-gray-800 dark:text-white "
            >
              {item.text}
            </h2>
          ))}
        </div>
        <div className="flex flex-col gap-3 ">
          {contact.map((item, index) => (
            <div key={index} className="text-lg">
              {item.email && (
                <p>
                  <a
                    href={item.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline-offset-0 dark:hover:text-white hover:text-[#EA2678]"
                  >
                    Email
                  </a>
                </p>
              )}
              {item.github && (
                <p>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1769FF] underline-offset-0 dark:hover:text-white hover:text-[#EA2678]"
                  >
                    GitHub
                  </a>
                </p>
              )}
              {item.linkedin && (
                <p>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077B5] underline-offset-0 dark:hover:text-white hover:text-[#EA2678]"
                  >
                    LinkedIn
                  </a>
                </p>
              )}
              {item.personalBlog && (
                <p>
                  <a
                    href={item.personalBlog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AF0C48] underline-offset-0 dark:hover:text-white hover:text-[#EA2678]"
                  >
                    Personal Blog
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default footer;
