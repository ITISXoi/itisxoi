/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListProduct,
  setListProduct,
  setPromotionCode,
} from "../../store/ducks/product/slice";
import { listBook, listVideo } from "../../utils/contants";
import { BookT, VideoT } from "../../utils/types";
import ListBook from "./ListBook";
import ListVideo from "./ListVideo";
import PreviewPrice from "./PreviewPrice";
import { Heading } from "./styled";

const Cart = () => {
  const dispatch = useDispatch();
  const getProduct = useSelector(getListProduct);
  const [videos, setVideos] = useState(listVideo.product || []);
  const [books, setBooks] = useState(listBook.product || []);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState<string | number>("0");
  const [promotionCode, setCode] = useState("");

  const handleClearVideo = (key: number) => {
    setVideos((prevVideos) => prevVideos.filter((item) => item.key !== key));
  };

  const handleClearBook = (key: number) => {
    setBooks((prevBooks) => prevBooks.filter((item) => item.key !== key));
  };

  const handleChangeCode = (code: string) => {
    setCode(code);
  };

  const handleApplyCode = () => {
    if (promotionCode === "EVO") {
      setDiscount((price * 0.06).toFixed(2));
      dispatch(setPromotionCode(promotionCode));
    }
  };

  useEffect(() => {
    const listProduct = [
      ...videos.map((item: VideoT) => ({
        key: item.key,
        name: item.name,
        price: item.price,
      })),
      ...books.map((item: BookT) => ({
        key: item.key,
        name: item.name,
        price: item.price,
      })),
    ];
    dispatch(setListProduct(listProduct));
  }, [videos, books]);

  useEffect(() => {
    const totalPrice = getProduct.reduce(
      (sum, product) => sum + product.price,
      0
    );
    setPrice(totalPrice);
  }, [getProduct]);

  return (
    <div className="bg-cart bg-auto w-full min-h-80 px-4 md:px-10 pt-32 pb-[400px]">
      <div className="bg-white w-full rounded-sm shadow-xl container relative">
        <Heading className="bg-secondary-1000 px-4 md:px-20 w-fit rounded-3xl text-white font-bold text-[30px] sm:text-[40px] outline-none absolute z-1 -top-6 left-[20%] sm:left-[25%] lg:left-[34%]">
          Shopping Cart
        </Heading>
        <div className="pt-20 px-4 pb-10 md:px-12 lg:px-20">
          <div className="flex lg:flex-row justify-between mb-4">
            <p className="font-bold text-3xl">Items</p>
            <p className="font-bold text-3xl hidden lg:block lg:w-28">Price</p>
          </div>
          <div className="flex flex-col gap-12">
            <ListVideo
              videos={videos}
              handleClear={handleClearVideo}
              title={listVideo.title}
            />
            <ListBook
              books={books}
              handleClear={handleClearBook}
              title={listBook.title}
            />
          </div>
        </div>
        <PreviewPrice
          price={price}
          handleChangeCode={handleChangeCode}
          handleApplyCode={handleApplyCode}
          discount={discount}
        />
      </div>
    </div>
  );
};

export default Cart;
