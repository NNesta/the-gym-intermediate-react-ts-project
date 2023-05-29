import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../features/newsSlice";
import { CATEGORIES, LINKS } from "../../assets/data";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#2E2F41] py-4 text-gray-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold px-4">Explore the NEWS</h1>
        <div className="flex flex-col justify-center">
          <ul className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-between items-center gap-4 my-4 px-8">
            {CATEGORIES.map((categoryObject) => (
              <li
                className={`text-base font-medium hover:text-blue-300 hover:underline 
            `}
                key={categoryObject.id}
              >
                <Link
                  to="/"
                  onClick={() => dispatch(changeCategory(categoryObject.value))}
                >
                  {categoryObject.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className=" flex flex-col md:flex-row md:items-center gap-12 my-4 px-8 py-4">
            {LINKS.map((item, index) => (
              <li className="hover:text-blue-300 hover:underline" key={index}>
                <Link className="" to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="px-8">
            Copyright The News <span>&#169;</span> 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
