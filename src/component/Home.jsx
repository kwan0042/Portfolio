import { Description_Context } from "../content";
import ProPic from "../assets/proPic.jpg";
const Home = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className=" flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Daniel Kwan
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Web Developer
            </span>
            <p className="text-justify my-2 max-w-xl py-6 font-light tracking-tighter">
              {Description_Context}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="h-[500px] w-full rounded-2xl object-cover"
              src={ProPic}
              alt="Daniel Kwan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;