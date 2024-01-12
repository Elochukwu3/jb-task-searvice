import { FC, useCallback, useEffect, useRef, useState } from "react";

interface Props<T> {
  results?: T[];
  onSelect?: (item: T) => void;
onSearchSubmit?: (searchQuery: string) => void;
resetResult?: (item: Array<T>)=> void
}

const useKeyboardKey = <T extends {display_name: string }>({
  results = [],
  onSelect,
  onSearchSubmit,
  resetResult
}: Props<T>) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef<HTMLButtonElement>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSelection = (selectedIndex: number) => {
    const selectedItem = results[selectedIndex];
    if (!selectedItem) return resetSearchComplete();
    onSelect && onSelect(selectedItem);
    onSearchSubmit && onSearchSubmit(selectedItem.display_name)
    resetSearchComplete();

   
  };

  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowResults(false);
    resetResult && resetResult([])
  }, [resetResult]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const { key } = e;
    let nextIndexCount = 0;

    if (key === "ArrowDown")
      nextIndexCount = (focusedIndex + 1) % results.length;

    if (key === "ArrowUp")
      nextIndexCount = (focusedIndex + results.length - 1) % results.length;

    if (key === "Escape") {
      resetSearchComplete();
    }

    if (key === "Enter") {
      e.preventDefault();
      handleSelection(focusedIndex);
    }

    setFocusedIndex(nextIndexCount);
  };

  const handleBlur = (e:React.FocusEvent<HTMLDivElement>) => {
    if (!e.relatedTarget) {
      resetSearchComplete();
    }
  };
  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  useEffect(() => {
    if (results?.length > 0 && !showResults) setShowResults(true);

    if (results?.length <= 0) setShowResults(false);
  }, [results, showResults]);


  return {handleSelection, focusedIndex, showResults, handleBlur, handleKeyDown,   resultContainer: (index: number) =>
    index === focusedIndex ? resultContainer : null}
};

export default useKeyboardKey;