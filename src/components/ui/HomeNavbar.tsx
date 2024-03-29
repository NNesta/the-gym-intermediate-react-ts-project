import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../features/newsSlice";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import useDate from "../../hooks/useDate";
import { CATEGORIES } from "../../assets/data";
import { newsType } from "../../Type";

const HomeNavbar = () => {
  const { day, month, date, year } = useDate();
  const ref = useRef<HTMLUListElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useSelector((state: newsType) => state.news);
  const handleScroll = (position: "left" | "right") => {
    if (ref.current) {
      if (position === "left") ref.current.scrollLeft = 50;
      if (position === "right") ref.current.scrollLeft += 60;
    }
  };
  const handleClick = (value: string) => {
    dispatch(changeCategory(value));
    navigate("/");
  };

  return (
    <div className="w-full  flex items-center md:divide-x-2 divide-gray-400 justify-between md:border-b-2 border-gray-300 ">
      <div className="hidden md:block">
        <h1 className="text-3xl font-semibold">{day}</h1>
        <p>
          {month} {date}, {year}
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <button
          className="p-2 hidden md:block bg-white"
          onClick={() => handleScroll("left")}
        >
          <MdOutlineArrowBackIos
            size={30}
            className={`material-symbols-outlined   rounded-full p-2 bg-white`}
          />
        </button>
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-3xl mx-auto">
          <ul
            ref={ref}
            className="flex items-center gap-2 text-black uppercase overflow-x-scroll  scrollbar-hide scroll-smooth"
          >
            {CATEGORIES.map((categoryObject) => (
              <li
                className={`text-base font-medium hover:text-blue-300 hover:underline ${
                  categoryObject.value === category &&
                  "text-blue-500 underline scale-105"
                } `}
                key={categoryObject.id}
              >
                <button onClick={() => handleClick(categoryObject.value)}>
                  {categoryObject.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="p-2 hidden md:block bg-white"
          onClick={() => handleScroll("right")}
        >
          <MdArrowForwardIos
            size={30}
            className={`material-symbols-outlined rounded-full p-2 bg-white`}
          />
        </button>
      </div>
    </div>
  );
};

export default HomeNavbar;
