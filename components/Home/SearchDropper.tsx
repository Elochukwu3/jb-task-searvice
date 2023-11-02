import { SearchDropperwrapper } from "./homeStyle";

const SearchDropper = () => {
  const newArray = Array.from({ length: 9 }, (_, i) => i);
  return (
    <SearchDropperwrapper>
      <p className="text-sm">Describe your task in a few words</p>
      <p className="flex justify-between">
        <span>Popular Projects</span>
        <span>Project $</span>
      </p>
      {newArray.map((item) => (
        <p className="flex justify-between" key={item}>
          <span>Errands</span>
          <span className="flex gap-3">
            <span>Avg.Project: $</span>
            <span>$31-${item}0</span>
          </span>
        </p>
      ))}
    </SearchDropperwrapper>
  );
};
export default SearchDropper;
