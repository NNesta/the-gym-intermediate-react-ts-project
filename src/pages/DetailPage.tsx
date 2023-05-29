import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/ui/Loading";
import {
  useGetAllNewsQuery,
  useGetAllTrendingNewsQuery,
} from "../features/apiSlice";
import Footer from "../components/layout/Footer";
import { newsType, articleType } from "../Type";

const DetailPage = () => {
  const params = useParams();
  const title = params.title ? params.title : "";
  const { category, publisher } = useSelector((state: newsType) => state.news);
  const { data: response, isLoading } = useGetAllNewsQuery({
    category,
    publisher,
  });
  const { data: trendingResponse } = useGetAllTrendingNewsQuery(category);
  const articles = response?.articles
    ? response?.articles
    : ([] as articleType[]);
  const trending = trendingResponse?.articles
    ? trendingResponse?.articles
    : ([] as articleType[]);
  const data = [...articles, ...trending];
  const article = data.find((item: articleType) => item.title === title);

  return (
    <div>
      <div className="max-w-5xl mx-auto ">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {article ? (
              <div>
                <div className="bg-white w-full h-12 fixed top-0">
                  <Link
                    to="/"
                    className="text-2xl font-bold text-blue-500 flex items-center gap-2"
                  >
                    <BsArrowLeft />
                    <span>Home</span>
                  </Link>
                </div>
                <div className="my-16 flex flex-col justify-center items-center">
                  <img
                    className="object-cover w-full max-h-[600px]"
                    src={
                      article.urlToImage ||
                      "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    alt=""
                  />

                  <div className="bg-white shadow-3xl px-4 max-w-3xl  py-16">
                    <h1
                      dangerouslySetInnerHTML={{ __html: title }}
                      className="text-4xl max-w-3xl mx-auto font-semibold text-center italic"
                    ></h1>
                    <p className="font-roboto italic font-medium">
                      Writen by {article.author}
                    </p>
                    <p className="font-roboto italic">
                      Published on{" "}
                      {new Date(article.publishedAt).toLocaleString()}
                    </p>
                    <p className="my-4 text-lg first-letter:text-5xl first-letter:font-bold first-letter:border-blue-500 first-letter:ring-2 first-letter:px-1 first-letter:mx-1">
                      {article.description?.replace(/\.* \[.*\]/g, "") +
                        article.content?.replace(/\.* \[.*\]/g, "")}
                    </p>
                    <Link
                      to={article.url}
                      className="bg-blue-500 text-white rounded-xl p-2 mt-32 text-center"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-col flex gap-4 items-center h-screen justify-center">
                <h1 className="text-3xl font-medium ">Article not found</h1>
                <Link
                  to="/"
                  className="flex items-center justify-center text-2xl text-blue-500 cursor-pointer"
                >
                  <BsArrowLeft />
                  <span>Return Home</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
