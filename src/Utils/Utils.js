export const handleNext = (setLightboxIndex, data) => {
  setLightboxIndex((prevValue) => {
    if (prevValue === data.images.length - 1) return prevValue;

    return prevValue + 1;
  });
};
export const handlePrevious = (setLightboxIndex) => {
  setLightboxIndex((prevValue) => {
    if (prevValue === 0) return prevValue;

    return prevValue - 1;
  });
};
