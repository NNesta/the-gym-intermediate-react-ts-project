import { Link } from "react-router-dom";
import { NewsCardPropsType } from "../../Type";

const NewsCard = ({ image, title, publisher }: NewsCardPropsType) => {
  return (
    <div className="py-4 border border-gray-200 rounded-lg mx-2 hover:shadow-3xl duration-300 ease-in-out gap-3 flex flex-col justify-between h-[450px] px-2">
      <Link className="flex-1 " to={`/detail/${encodeURIComponent(title)}`}>
        <img
          className="h-64 w-full object-cover mx-auto"
          src={
            image ||
            "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt=""
        />
      </Link>
      <Link to={`/detail/${encodeURIComponent(title)}`}>
        <h1
          dangerouslySetInnerHTML={{ __html: title.slice(0, 100) }}
          className="text-2xl font-medium hover:text-blue-500"
        ></h1>
      </Link>
      <Link
        to={`/${encodeURIComponent(publisher)}`}
        className="text-xs hover:text-blue-500"
      >
        Published by {publisher}
      </Link>
    </div>
  );
};

export default NewsCard;
