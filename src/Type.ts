export type sourceType = {
  name: string;
  id: string;
};
export type publisherType = {
  sources: sourceType[];
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
  source: sourceType;
};
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
export type trendingCardPropsType = CardPropsType;
export type NewsCardPropsType = CardPropsType;

export type stateType = {
  category: string;
  filter: string;
  publisher: string;
  showPublishers: boolean;
};
export type newsType = {
  news: stateType;
};

export type wrapperProps = {
  children: React.ReactNode;
  styles: string;
};
export type initialStateType = stateType;
