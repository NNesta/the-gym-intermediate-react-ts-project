import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen  flex items-center justify-center">
      <Circles
        height="80"
        width="80"
        color="#3B82F6"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
