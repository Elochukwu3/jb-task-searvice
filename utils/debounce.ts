export const debounceFunc = (func: (...args: any[]) => void, delay: number) => {
    let interval: NodeJS.Timeout | null = null;
  
    return (...args: any[]) => {
      if (interval) {
        clearTimeout(interval);
      }
      interval = setTimeout(() => func(...args), delay);
    };
  };
  