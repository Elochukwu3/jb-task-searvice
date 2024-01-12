import React, { RefObject } from 'react';

interface Props {
   data: any[];
   focusedIndex:number;
  onSearchSubmit?: (searchQuery: string) => void;
  resultContainer: (index: number) => RefObject<HTMLButtonElement> | null;
  handleSelection: (item: number)=> void;
  }
const index = ({ data = [], focusedIndex, resultContainer, handleSelection }:Props) => {
    return (
      <div className="bg-white w-full space-y-1 text-custom-dark max-h-40 overflow-y-scroll no-scroll">
        {data?.length > 0 ? (
          data.map((item, i) => (
            <button
              key={`select${item?.name + i}`}
              onClick={() => handleSelection(i)}
              ref={resultContainer(i)}
              className={`${i === focusedIndex ? "bg-green-100 " : ""} relative z-20 block w-full p-1 rounded-sm`}
            >
              {item?.display_name}
            </button>
          ))
        ) : (
          <span>notfound</span>
        )}
      </div>
    );
  };
  
  export default index;