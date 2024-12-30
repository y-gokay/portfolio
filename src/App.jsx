import Hero from "./components/hero";
import Skills from "./components/skills";
import Profile from "./components/info";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { DataContext } from "./context/Context";

function App() {
  const { error } = useContext(DataContext);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="flex flex-col font-inter overflow-hidden">
        <ToastContainer />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
