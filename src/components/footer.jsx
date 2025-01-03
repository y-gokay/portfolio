import { useContext } from "react";
import { DataContext } from "../context/Context";

export const footer = () => {
  const { data, showScrollToTopButton, scrollToTop } = useContext(DataContext);
  const contact = data.contact;

  return (
    <div className="py-20 bg-white-100 flex items-center justify-center dark:bg-[#484148c9]">
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
                    href={`mailto:${item.email}`}
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
                    className="text-[#1769FF] underline-offset-0 dark:hover:text-white hover:text-[#EA2678] dark:text-[#82BBFF]"
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
                    className="text-[#0077B5] underline-offset-0 dark:hover:text-white hover:text-[#EA2678] dark:text-[#419CCB]"
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
                    className="text-[#AF0C48] underline-offset-0 dark:hover:text-white hover:text-[#EA2678] "
                  >
                    Personal Blog
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      {showScrollToTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 w-20 right-10 p-3 bg-[#EA2678] text-white rounded-full shadow-lg hover:bg-white hover:text-[#EA2678] dark:bg-[#2A262B] dark:text-white dark:hover:bg-white dark:hover:text-[#2A262B] transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default footer;
