import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPublisher } from "../../features/newsSlice";
import { useGetAllPublishersQuery } from "../../features/apiSlice";
import Loading from "./Loading";
import { sourceType } from "../../Type";

const Publishers = () => {
  const dispatch = useDispatch();
  const { data: response, isLoading } = useGetAllPublishersQuery({});
  const data = !isLoading ? response?.sources : [];
  const publishers = Array.from(
    new Set(data?.map((source: sourceType) => JSON.stringify(source))),
    (source) => JSON.parse(source)
  );
  return (
    <div className="border-primary py-6 border-t border-black bg-[#2E2F41] ">
      {!isLoading ? (
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 justify-between py-6 border-primary max-w-[1440px] mx-auto h-screen scrollbar-thin scrollbar-thumb-blue-500 overflow-y-scroll px-4 pb-20 my-12">
          {publishers?.map((publisher, index) => (
            <li key={index} className="text-lg font-medium ">
              <Link
                to="/"
                onClick={() => {
                  dispatch(setPublisher(publisher.id));
                }}
                className="hover:underline hover:text-blue-500"
              >
                {publisher.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Publishers;
