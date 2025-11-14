const SkillsBox = ({ name, stack }) => {
  return (
    <div className="sm:w-[28%] w-[90%] bg-white p-8 border-[1.5px] border-gray-300 rounded-2xl shadow-xs space-y-8">
      <p className="text-center font-medium">{name}</p>

      <div className="sm:max-w-[75%] max-w-[60%] mx-auto flex flex-col gap-2">
        {stack.map((s) => (
          <p className="px-4 py-1 lg:text-sm text-xs text-center rounded-lg border-[1.5px] border-gray-300 text-gray-800 hover:bg-blue-100 cursor-pointer">
            {s}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillsBox;
