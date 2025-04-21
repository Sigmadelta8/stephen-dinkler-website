import HeroPage from "../components/HeroPage";
import TechStack from "../components/TechStack";
import Education from "../components/Education";

export default function AboutMe() {
  return (
    <div className="p-10 mt-8 grid place-items-center gap-8">
      <HeroPage />
      <div className="bg-white transition-colors duration-300 dark:bg-gray-900 rounded-2xl max-w-screen-2xl w-full">
        <TechStack />
      </div>
      <div className="bg-white transition-colors duration-300 dark:bg-gray-900 rounded-2xl max-w-screen-2xl w-full">
        <Education />
      </div>
    </div>
  );
}