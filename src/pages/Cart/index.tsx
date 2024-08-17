import { useState } from "react";
import { listBook, listVideo } from "../../utils/contants";
import ListVideo from "./ListVideo";
import ListBook from "./ListBook";
import { Button } from "../../ui/button";
import Input from "../../ui/input/input";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "./styled";

const Cart = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState(listVideo.product || []);
  const [books, setBooks] = useState(listBook.product || []);

  const handleClearVideo = (key: number) => {
    setVideos((prevVideos) => prevVideos.filter((item) => item.key !== key));
  };

  const handleClearBook = (key: number) => {
    setBooks((prevBooks) => prevBooks.filter((item) => item.key !== key));
  };

  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <div className="bg-cart bg-auto w-full min-h-80 px-10 pt-32 pb-[400px]">
      <div className="bg-white w-full rounded-sm shadow-xl container relative">
        <Heading className="bg-secondary-1000 px-20 w-fit rounded-3xl text-white font-bold text-[40px] outline-none absolute z-10 -top-6">
          Shopping Cart
        </Heading>
        <div className="pt-20 px-20 pb-10">
          <div className="flex flex-row justify-between mb-4">
            <p className="font-bold text-3xl">Items</p>
            <p className="font-bold text-3xl w-28">Price</p>
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
        <div className="flex flex-col gap-4 px-4 pb-10">
          <div className="bg-light flex justify-end py-2 px-28 gap-20">
            <div className="flex flex-row justify-between items-center w-72">
              <p className="text-xl">Subtotal</p>
              <p className="font-bold text-2xl">$400</p>
            </div>
          </div>
          <div className="flex flex-row justify-between py-2 px-28 gap-20">
            <div className="flex flex-row items-center gap-4">
              <p className="text-xl">Apply Promotion Code</p>
              <Input placeholder="Promotion Code" className="w-[300px]" />
              <Link to={"/checkout"}>
                <Button variant={"blue"}>Apply Code</Button>
              </Link>
            </div>
            <div className="flex flex-row justify-between items-center w-72">
              <p className="text-xl">Discount</p>
              <p className="font-bold text-2xl">-$40</p>
            </div>
          </div>
          <div className="bg-light flex justify-end py-2 px-28 gap-20">
            <div className="flex flex-row justify-between items-center w-72">
              <p className="text-xl">GRAND TOTAL</p>
              <p className="font-bold text-2xl">$400</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center pb-10 pr-10">
          <Button
            className="w-[200px] text-lg"
            variant={"blue"}
            onClick={handleClick}
          >
            Check out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
