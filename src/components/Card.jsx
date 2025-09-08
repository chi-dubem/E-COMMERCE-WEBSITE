import Star_jsx from "../assets/Jsxs/star_jsx";
import Button from "./Button";
const Star = ({color}) => <Star_jsx color={color}/>

const StarRating = ({ rating, totalStars = 6 }) => {
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    stars.push(<Star key={i} color={i <= rating ? "gold" : "gray"} />);
  }

  return <div className="flex items-center">{stars}</div>;
};

const Card = () => {

  return (
    <div className="flex flex-col p-6 rounded-lg shadow-lg bg-white w-fit ">
      <div className="w-48 h-48 mb-4">
        <img
          src="src\assets\images\Shorte.jpg"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-xl font-bold mb-2">Casual T-shirt</h1>
      <div className="flex items-center">
        <StarRating rating={4} />
        <span className="my-auto pl-3 pb-2 text-gray-500">123</span>
      </div>
      <span className=" text-gray-500 font-bold text-[12px]">$123.00</span>
      <span className="font-bold text-[20px]">$123.00</span>
      <Button text="ADD TO CART" />
    </div>
  );
};

export default Card;
