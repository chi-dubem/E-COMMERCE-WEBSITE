import Star_jsx from "../assets/Jsxs/star_jsx";
import Button from "./Button";
const Star = ({ color }) => <Star_jsx color={color} />;

const StarRating = ({ rating, totalStars = 6 }) => {
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    stars.push(<Star key={i} color={i <= rating ? "red" : "gray"} />);
  }

  return <div className="flex items-center">{stars}</div>;
};

const Card = ({ product, cart,setCart }) => {

  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      setCart(
        cart.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div className="flex flex-col p-6 rounded-lg shadow-lg bg-white w-fit ">
      <div className="w-full  mb-4">
        <img
          src={`src/assets/images/${product.image}`}
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </div>
      <h1 className="text-xl font-bold mb-2">{product.name}</h1>
      <div className="flex items-center">
        <StarRating rating={product.star} />
        <span className="my-auto pl-3 pb-2 text-gray-500">
          {product.review}
        </span>
      </div>
      <span className=" text-gray-500 font-bold text-[12px]">
        ${product.originlPrice}
      </span>
      <span className="font-bold text-[20px]">${product.discountedPrice}</span>
      <div onClick={() => addToCart(product)}>
        <Button text="ADD TO CART" />
      </div>
    </div>
  );
};

export default Card;
