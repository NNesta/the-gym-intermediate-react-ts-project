import { useSelector, useDispatch } from "react-redux";
import { useGetAllNewsQuery } from "../features/apiSlice";
import { setPublisher } from "../features/newsSlice";
import Wrapper from "../components/ui/Wrapper";
import Navbar from "../components/layout/Navbar";
import Loading from "../components/ui/Loading";
import NewsCard from "../components/ui/NewsCard";
import HomeNavbar from "../components/ui/HomeNavbar";
import { articleType, newsType } from "../Type";
import Footer from "../components/layout/Footer";
import TrendingSection from "../components/layout/TrendingSection";

const Home = () => {
  const { category, publisher, filter } = useSelector(
    (state: newsType) => state.news
  );
  const dispatch = useDispatch();
  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetAllNewsQuery({ category, publisher });
  !isLoading && !response?.totalResults && dispatch(setPublisher(""));
  const data = !isLoading ? response?.articles : [];
  const viewData = publisher ? data : data?.slice(0, 6);
  return (
    <div className="bg-[#F7F7F7]">
      <Navbar />
      <Wrapper styles="relative max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-end  mt-20 py-16">
          <div className="max-w-5xl mr-auto  gap-3">
            <HomeNavbar />
            {isLoading || isFetching ? (
              <Loading />
            ) : (
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-y-8 overflow-y-scroll scrollbar-hide">
                {viewData
                  ?.filter((item: articleType) =>
                    item.title.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map((item: articleType, index: number) => (
                    <NewsCard
                      key={index}
                      url={item.url}
                      author={item.author}
                      image={item.urlToImage}
                      title={item.title}
                      publisher={item.source.name}
                    />
                  ))}
              </div>
            )}
          </div>
          <TrendingSection />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Home;
