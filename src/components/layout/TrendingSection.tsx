import { useSelector } from "react-redux";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useGetAllTrendingNewsQuery } from "../../features/apiSlice";
import Loading from "../ui/Loading";
import TrendingCard from "../ui/TrendingCard";
import { stateType, articleType } from "../../Type";

const TrendingSection = () => {
  const { category, filter } = useSelector((state: stateType) => state.news);
  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetAllTrendingNewsQuery(category);
  const data = response?.articles ? response?.articles : ([] as articleType[]);
  const viewNews = data.slice(0, 8);
  return (
    <div>
      {viewNews.length ? (
        <div className="bg-[#EDEDED] max-w-[416px]">
          <div className="flex items-center justify-between px-6">
            <h1 className="text-xl font-semibold py-4 px-2">WEEKLY TRENDING</h1>
            <HiOutlineAdjustmentsHorizontal />
          </div>
          <div className="h-full overflow-y-scroll scrollbar-hide">
            {isLoading || isFetching ? (
              <Loading />
            ) : (
              viewNews
                .filter((item: articleType) =>
                  item.title.toLowerCase().includes(filter.toLowerCase())
                )
                .map((item: articleType, index: number) => (
                  <TrendingCard
                    key={index}
                    url={item.url}
                    image={item.urlToImage}
                    title={item.title}
                    publisher={item.source.name}
                    author={item.author}
                  />
                ))
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TrendingSection;
