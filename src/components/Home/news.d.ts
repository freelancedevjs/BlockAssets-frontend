export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  slug: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsData {
  count: number;
  data: NewsItem[];
}

export interface QueryResponse {
  getManyNews: NewsData;
}