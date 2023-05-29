import { wrapperProps } from "../../Type";

const Wrapper = ({ children, styles }: wrapperProps) => {
  return <div className={`max-w-[1440px] mx-auto ${styles}`}>{children}</div>;
};

export default Wrapper;
