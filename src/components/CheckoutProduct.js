import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  //? send to the store
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };

    //* Sending the products as an action to the REDUX store
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //* REMOVE ITEM FROM BASKET
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={id} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="sm:text-xs md:text-xs mt-2 my-2 line-clamp-3">
          {description}
        </p>

        <Currency quantity={price} currency="GBP" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://links.papareact.com/fdw"
              loading="lazy"
              className="w-12"
              alt="prime-logo"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* ADD & REMOVE BUTTON */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          onClick={addItemToBasket}
          className="button sm:text-xs md:text-base"
        >
          Add to Basket
        </button>
        <button
          onClick={removeItemFromBasket}
          className="button sm:text-xs md:text-base"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
