import Timeline from "../components/Timeline";

export default function WorkHistory() {
    return (
      <div className="p-10 mt-8 rounded-lg grid justify-items-center">
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300 rounded-2xl py-10 max-w-screen-2xl w-full">
        <Timeline />
        </div>
      </div>
    );
  }