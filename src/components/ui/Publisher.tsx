import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPublisher } from "../../features/newsSlice";
import { useGetAllPublishersQuery } from "../../features/apiSlice";
import Loading from "./Loading";
import { sourceType } from "../../Type";

const Publishers = () => {
  const dispatch = useDispatch();
  const { data: response, isLoading } = useGetAllPublishersQuery({});
  const data = response?.sources ? response.sources : [];
  const navigate = useNavigate();
  const publishers = Array.from(
    new Set(data?.map((source: sourceType) => JSON.stringify(source))),
    (source) => JSON.parse(source)
  );
  const handleClick = (id: string) => {
    dispatch(setPublisher(id));
    navigate("/");
  };
  return (
    <div className="border-primary py-6 border-t border-black bg-[#2E2F41] ">
      {!isLoading ? (
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 justify-between py-6 border-primary max-w-[1440px] mx-auto h-screen scrollbar-thin scrollbar-thumb-blue-500 overflow-y-scroll px-4 pb-20 my-12">
          {publishers?.map((publisher: sourceType) => (
            <li key={publisher.id} className="text-lg font-medium ">
              <button
                onClick={() => handleClick(publisher.id)}
                className="hover:underline hover:text-blue-500"
              >
                {publisher.name}
              </button>
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
