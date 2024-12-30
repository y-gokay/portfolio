import { useContext } from "react";
import { DataContext } from "../context/Context";

export const info = () => {
  const { data } = useContext(DataContext);
  const info = data.info;
  return (
    <div className="pb-20 bg-gray-100 relative dark:bg-[#2A262B]">
      <div className="w-[121px] h-[121px] border-[20px] border-[#EA2678] rounded-full absolute bottom-[-5rem] right-[-3rem]"></div>
      <div className="flex flex-col container px-5 lg:px-0 justify-self-center">
        <div className="mx-auto mt-10 dark:text-white">
          <h2 className="text-4xl mb-10">{data.profileHeader}</h2>
        </div>
        <div className="flex container flex-wrap lg:flex-nowrap md:gap-24 place-content-around gap-5">
          <div className="my-auto md:min-w-80 max-w-lg rounded-2xl px-10 py-10 mx-auto shadow-[10px_10px_2px_rgb(82,82,82)] bg-white">
            <h3 className="font-light mb-5 text-2xl font-playfair text-[#EA2678]">
              {data.profile}
            </h3>
            <div className="flex flex-col gap-5">
              {info.map((item, index) => (
                <div className="max-w-md text-lg" key={index}>
                  <strong className="font-semibold">{item.name}:</strong>{" "}
                  {item.value}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl flex flex-col gap-5 dark:text-white">
            <div className="relative">
              <h3 className="font-playfair text-2xl font-light leading-8 relative z-10">
                {data.aboutTitle}
              </h3>

              <div className="w-[100px] h-[20px] absolute top-5 left-[-10px] rounded-[5px] bg-[#82BBFF] "></div>
            </div>

            <div className="text-lg font-light">{data.about}</div>
            <div className="text-lg font-light">{data.about2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default info;
