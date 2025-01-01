import { createContext, useState, useEffect } from "react";
import data from "../data/data.json";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const startAutoScroll = (scrollContainerRef) => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;
    const scrollInterval = 20;

    const scrollAnimation = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };

    const intervalId = setInterval(scrollAnimation, scrollInterval);

    return () => clearInterval(intervalId);
  };

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("darkMode", JSON.stringify(newTheme));
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) return storedLanguage;
    return navigator.language.toLowerCase().startsWith("tr")
      ? "tr-TR"
      : "en-EN";
  });

  const toggleLanguage = () => {
    const newLanguage = language === "tr-TR" ? "en-EN" : "tr-TR";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", language);
    }
  }, [language]);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then(() => {
        toast.success("Bilgiler başarıyla API'a iletildi 👍", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((err) => {
        toast.error("Bir hata oluştu:", err, {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        startAutoScroll,
        darkMode,
        toggleTheme,
        language,
        toggleLanguage,
        data: data[language],
        variables: data.variables,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
