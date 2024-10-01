import { Experience_List } from "../content";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {Experience_List.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </div>
            <div className="w-full max-w-xl flex flex-wrap lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {exp.role} -{" "}
                <span className="text-sm text-purple-100">{exp.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {exp.description}
              </p>
              {exp.technologies.map((skills, index) => (
                <span
                  key={index}
                  className="mr-2 my-1 rounded  bg-teal-400/10 px-2 py-1 text-sm font-medium text-teal-300 "
                >
                  {skills}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-3/4">
            <a className="inline-flex items-baseline font-bold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base">
              View Full Resume
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              >
                <path
                  d="M2.33938 14.5896C1.44846 11.2534 2.31164 7.54623 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711C16.4538 21.6884 12.7466 22.5515 9.41045 21.6606M15.0001 15.0001V9.0001M15.0001 9.0001H9.00014M15.0001 9.0001L4.99995 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
