import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowPublishers } from "../../features/newsSlice";
import { filterNews } from "../../features/newsSlice";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import Publisher from "../ui/Publisher";
import { stateType } from "../../Type";

const Navbar = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: stateType) => state.news);
  const { showPublishers } = useSelector((state: stateType) => state.news);
  const handleMenuClick = () => {
    dispatch(setShowPublishers());
  };

  useEffect((): (() => void) => {
    document.body.style.overflow = showPublishers ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [showPublishers]);
  return (
    <div className="w-full bg-[#2E2F41] text-gray-200 py-4 fixed top-0 z-50 inset-x-0  px-4">
      <div className="max-w-[1440px] mx-auto">
        {showPublishers && (
          <div className="absolute inset-0  -z-30">
            <Publisher />
          </div>
        )}
        <div className="gap-12 flex  justify-between items-center">
          <Link
            to="/"
            className="text-2xl flex items-center gap-4 font-bold text-blue-500"
          >
            <button onClick={handleMenuClick}>
              {showPublishers ? <AiOutlineClose /> : <FiMenu className="" />}
            </button>
            <span className="hidden md:block">THE NEWS</span>
          </Link>
          <div className="h-[80%] min-w-[30%] rounded-full flex items-center justify-between lg:px-6 px-4 text-gray-200 bg-[#404254] border-blue-500 border-2">
            <input
              onChange={(event) => dispatch(filterNews(event.target.value))}
              value={filter}
              type="text"
              placeholder="Search for an article"
              className=" focus:outline-none py-3 bg-transparent"
            />
            <AiOutlineSearch className=" text-gray-200" />
          </div>
          <ul className="hidden md:block">
            <li className="bg-[#F6AC7A] text-[#404254] px-4 py-2 flex">
              <button>Contact us</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
