type Props = {
  numOfFull: number;
};

export default function Parameter(props: Props) {
	const { numOfFull } = props;
	const numOfEmpty = 15 - numOfFull;
  return (
    <div className="flex gap-1 md:gap-2">
      {[...Array(numOfFull)].map((_, index) => {
        return (
          <div
            key={index}
            className="w-[10px] h-[20px] md:w-[15px] md:h-[30px] bg-yellow-500 rounded-xl neumorphism-inside-parameter-full"
          />
        );
			})}
			{[...Array(numOfEmpty)].map((_, index) => {
				return (
					<div
						key={index}
						className="w-[10px] h-[20px] md:w-[15px] md:h-[30px] bg-gray-500 rounded-xl neumorphism-inside-parameter-empty"
					/>
				);
			})}
    </div>
  );
}
