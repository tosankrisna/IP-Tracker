type Location = {
  region: string;
  timezone: string;
};

type InformationProps = {
  ip: string;
  isp: string;
  location: Location;
};

const Information = ({ data }: { data: InformationProps }) => {
  const {
    ip,
    isp,
    location: { region, timezone },
  } = data;

  return (
    <div className="z-10 absolute top-40 w-full">
      <div className="flex justify-center">
        <div className="shadow-xl grid grid-rows-1 gap-3 md:gap-0 md:grid-cols-4 w-1/2 md:w-3/4 text-center md:text-left h-content bg-white rounded-lg p-3">
          <div className="flex flex-col">
            <span className="uppercase text-xs md:text-sm lg:text-md mb-2 text-slate-600">
              IP Address
            </span>
            <span className="font-bold text-black">{ip}</span>
          </div>
          <div className="flex flex-col">
            <span className="uppercase text-xs md:text-sm lg:text-md mb-2 text-slate-600">
              Location
            </span>
            <span className="font-bold text-black">{region}</span>
          </div>
          <div className="flex flex-col">
            <span className="uppercase text-xs md:text-sm lg:text-md mb-2 text-slate-600">
              Timezone
            </span>
            <span className="font-bold text-black">UTC {timezone}</span>
          </div>
          <div className="flex flex-col">
            <span className="uppercase text-xs md:text-sm lg:text-md mb-2 text-slate-600">
              ISP
            </span>
            <span className="font-bold text-black text-sm lg:text-lg">
              {isp}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
