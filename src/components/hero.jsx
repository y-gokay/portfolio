import { useContext } from "react";
import { DataContext } from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Profile from "../assets/profile.jpeg";
import { faSun, faMoon, faAt } from "@fortawesome/free-solid-svg-icons";

const hero = () => {
  const { language, toggleLanguage, data } = useContext(DataContext);
  const { darkMode, toggleTheme } = useContext(DataContext);

  return (
    <div className="pt-5 relative pb-20 bg-gray-100 px-9 lg:px-0 dark:bg-[#2A262B]">
      <div className="w-[13rem] bg-[#EA2678] h-[3.6rem] absolute bottom-[5rem] right-[-5rem] rounded-[1.8rem] opacity-90 "></div>
      <div className="w-[111px] h-[111px] top-[-4rem] left-[26rem] absolute bg-gray-300 rounded-full"></div>
      <div className="container relative justify-self-center">
        <div className="flex justify-end text-neutral-500 font-bold tracking-[0.1rem] text-base">
          <div className="flex gap-10 items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer "
                onClick={toggleTheme}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#EA2678]">
                <FontAwesomeIcon
                  icon={faSun}
                  className="absolute left-1 top-1 text-yellow-400 w-4 h-4 transition-all peer-checked:left-6"
                />
                <FontAwesomeIcon
                  icon={faMoon}
                  className="absolute left-6 top-1 text-blue-400 w-4 h-4 transition-all peer-checked:left-1"
                />
              </div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {darkMode ? data.dark : data.light}
              </span>
            </label>

            <div>
              {language === "en-EN" ? (
                <span>
                  <span
                    onClick={() => toggleLanguage("tr-TR")}
                    className="text-[#EA2678] cursor-pointer font hover:underline"
                  >
                    TÜRKÇE
                  </span>
                  <span>'YE GEÇ</span>
                </span>
              ) : (
                <span>
                  <span>SWITCH TO </span>
                  <span
                    onClick={() => toggleLanguage("en-EN")}
                    className="text-[#EA2678] cursor-pointer font-bold hover:underline"
                  >
                    ENGLISH
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex sm:ml-5 relative place-content-around mt-32 flex-wrap-reverse lg:flex-nowrap gap-5 dark:text-white">
          <div className="flex relative z-10 flex-col gap-5">
            <div className="text-3xl font-normal leading-9">{data.greet}</div>
            <div className="text-xl lg:text-[42px] max-w-3xl font-medium leading-[64px] z-20">
              {data.article}
            </div>
            <div className="w-[250px] h-[31px] absolute top-[5.6rem] lg:top-[6.05rem] left-[-2rem] lg:left-0 rounded-[4px] bg-[#E92577]"></div>
            <div className="flex gap-5">
              <a
                href={data.linkedin}
                target="_blank"
                className="max-w-10 text-3xl hover:text-[#EA2678]"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href={data.github}
                target="_blank"
                className="max-w-10 text-3xl hover:text-[#EA2678]"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={`mailto:${data.email}`}
                target="_blank"
                className="max-w-10 text-3xl hover:text-[#EA2678]"
              >
                <FontAwesomeIcon icon={faAt} />
              </a>
            </div>

            <div className="text-lg">{data.communication}</div>
          </div>
          <div className=" max-w-96 max-h-96 overflow-hidden rounded-xl shadow-[#EA2678_-20px_-20px] ">
            <img className="object-fill  scale-100" src={Profile} />
          </div>
        </div>

        <div className="w-[120px] h-[120px] border-[20px] border-gray-300 dark:border-[#525252] rounded-full absolute lg:right-[14rem] lg:bottom-[-8.8rem] sm:bottom-[-8rem] sm:right-[4rem] opacity-50"></div>
      </div>
    </div>
  );
};

export default hero;
