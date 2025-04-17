import HeroPage from "../components/HeroPage";
import TechStack from "../components/TechStack";
import Education from "../components/Education";

export default function AboutMe() {
    return (
      <div className="p-10 mt-8 rounded-lg">
        <HeroPage />
        <div className="bg-white dark:bg-gray-900 rounded-2xl">
        <TechStack />
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl">
        <Education />
        </div>
      </div>
    );
  }