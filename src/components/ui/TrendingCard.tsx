import { Link } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { trendingCardPropsType } from "../../Type";

const TrendingCard = ({
  image,
  title,
  publisher,
  author,
}: trendingCardPropsType) => {
  return (
    <div className="py-4 border border-gray-200 rounded-lg my-4 mx-2 grid grid-cols-3 hover:shadow-3xl duration-300 ease-in-out gap-3 h-40 px-2">
      <Link className="" to={`/detail/${encodeURIComponent(title)}`}>
        <img
          className=" object-cover h-full "
          src={
            image ||
            "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt=""
        />
      </Link>
      <div className="flex flex-col col-span-2">
        {author && (
          <Link
            to={`/${encodeURIComponent(publisher)}`}
            className="flex items-center gap-2"
          >
            <IoPersonCircle />
            <span className="text-xs hover:text-blue-500">{author}</span>
          </Link>
        )}
        <Link to={`/detail/${encodeURIComponent(title)}`}>
          <h1
            dangerouslySetInnerHTML={{ __html: title.slice(0, 90) }}
            className="text-xl font-medium hover:text-blue-500"
          ></h1>
        </Link>
      </div>
    </div>
  );
};

export default TrendingCard;
