import ImgOneSm from "../Assets/image-product-1-thumbnail.jpg";
import ImgOneLrg from "../Assets/image-product-1.jpg";
import ImgTwoSm from "../Assets/image-product-2-thumbnail.jpg";
import ImgTwoLrg from "../Assets/image-product-2.jpg";
import ImgThreeSm from "../Assets/image-product-3-thumbnail.jpg";
import ImgThreeLrg from "../Assets/image-product-3.jpg";
import ImgFourSm from "../Assets/image-product-4-thumbnail.jpg";
import ImgFourLrg from "../Assets/image-product-4.jpg";

export const item = {
  images: [
    {
      smallImg: ImgOneSm,
      largeImg: ImgOneLrg,
    },
    {
      smallImg: ImgTwoSm,
      largeImg: ImgTwoLrg,
    },
    {
      smallImg: ImgThreeSm,
      largeImg: ImgThreeLrg,
    },
    {
      smallImg: ImgFourSm,
      largeImg: ImgFourLrg,
    },
  ],
  info: {
    lastPrice: 250.0,
    discount: 50,
    currentPrice: 125.0,
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  },
};
