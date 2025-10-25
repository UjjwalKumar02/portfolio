const SkillsBox = ({
  name,
  heading1,
  stack1,
  heading2,
  stack2,
  heading3 = "",
  stack3 = [],
}) => {
  return (
    <div className="lg:w-[32%] w-[97%] bg-white p-8 border-[1.5px] border-gray-300 rounded-xl shadow-sm space-y-8 mt-8">
      <p className="text-lg font-medium">{name}</p>

      <div className="space-y-4">
        <p className="text-gray-600 font-medium">{heading1}</p>
        <div className="flex flex-wrap items-center gap-2">
          {stack1.map((s) => (
            <button className="border-[1.5px] border-gray-400 px-5 py-1 text-sm rounded-xl text-gray-800">
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600 font-medium">{heading2}</p>
        <div className="flex flex-wrap items-center gap-2">
          {stack2.map((s) => (
            <button className="border-[1.5px] border-gray-400 px-5 py-1 text-sm rounded-xl text-gray-800">
              {s}
            </button>
          ))}
        </div>
      </div>

      {heading3 && (
        <div className="space-y-4">
          <p className="text-gray-600 font-medium">{heading3}</p>
          <div className="flex flex-wrap items-center gap-2">
            {stack3.map((s) => (
              <button className="border-[1.5px] border-gray-400 px-5 py-1 text-sm rounded-xl text-gray-800">
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsBox;
