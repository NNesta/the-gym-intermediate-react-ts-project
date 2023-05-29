export type sourceType = {
  name: string;
  id: string;
};

export type articleType = {
  author: string;
  content: string;
  totalResults: number;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
} & { source: sourceType };
export type dataType = {
  articles: articleType[];
  totalResults: number;
};
export type CardPropsType = {
  url: string;
  image: string;
  title: string;
  publisher: string;
  author: string;
};
export type trendingCardPropsType = CardPropsType & {};
export type NewsCardPropsType = CardPropsType & {};

export type stateType = {
  news: {
    category: string;
    filter: string;
    publisher: string;
    showPublishers: boolean;
  };
};

export type wrapperProps = {
  children: React.ReactNode;
  styles: string;
};
export type initialStateType = {
  category: string;
  filter: string;
  publisher: string;
  showPublishers: boolean;
};

export type EffectCallback = () => void | (() => void | undefined);
