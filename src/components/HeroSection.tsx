import { Link } from "react-router-dom";
import rocketIcon from "../assets/icons/rocket.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col bg-primary py-20 lg:flex-row lg:px-34 lg:py-30">
      <div className="flex flex-col items-center justify-center p-4 lg:w-2/3 lg:items-start">
        <h2 className="text-negative border-l-[10px] border-tertiary text-center text-3xl font-semibold leading-tight tracking-wide-medium md:pl-14 lg:text-left lg:text-5xl">
          Accelerate Innovation <br />
          with Global AI Challenges
        </h2>
        <p className="text-negative mt-11 px-6 text-justify text-lg tracking-wide-medium lg:pl-16 lg:pr-40 lg:text-left">
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to the test on diverse
          datasets, allowing you to foster learning through competitions.
        </p>
        <Link
          className="mt-11 flex max-w-max cursor-pointer items-center gap-4 rounded-xl bg-white px-6 py-3 text-lg font-semibold text-primary transition-all duration-300 ease-in-out hover:scale-x-105 lg:ml-16"
          to={"/new-hackathon"}
        >
          Create Challenge
        </Link>
      </div>
      <div className="flex items-center justify-center lg:w-1/3">
        <img src={rocketIcon} alt="rocket" className="h-full max-w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
