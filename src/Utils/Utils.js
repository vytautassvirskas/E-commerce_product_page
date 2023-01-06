export const handleNext = (setUseState, data) => {
  setUseState((prevValue) => {
    if (prevValue === data.images.length - 1) return prevValue;

    return prevValue + 1;
  });
};
export const handlePrevious = (setUseState) => {
  setUseState((prevValue) => {
    if (prevValue === 0) return prevValue;

    return prevValue - 1;
  });
};
