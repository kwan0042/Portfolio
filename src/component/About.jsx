import { About_Context } from "../content";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About Me</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-cneter justify-center">
            <div className="h-[300px] w-full rounded-2xl object-cover ">
              <iframe
                className="w-full aspect-video rounded-2xl"
                src="https://www.youtube.com/embed/vKAMaju1aNA?si=CQzN_i95aZHJ9IDw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start ">
            <p className="text-justify my-2 max-w-xl py-6 ">{About_Context}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
