import { type ReactNode, createContext, useContext, useState } from 'react';
import apiClient from '../api';

interface Post {
  companyName: string;
  profileImageKey: string;
  employmentEndDate: string;
  positionTitle: string;
  domain: string;
  detailSummary: string;
  positionType: string;
}

interface ApiAuthor {
  id: string;
  name: string;
  profileImageKey: string;
}

interface ApiTag {
  tag: string;
}

interface ApiPost {
  id: string;
  author: ApiAuthor;
  companyName: string;
  profileImageKey: string;
  location: string;
  employmentEndDate: string; // ISO date string
  positionTitle: string;
  domain: string;
  slogan: string;
  detailSummary: string;
  positionType: string;
  headCount: number;
  isBookmarked: boolean;
  createdAt: string; // This is an ISO date string
  updatedAt: string; // This is an ISO date string
  tags: ApiTag[];
  coffeeChatCount: number;
}

interface PostContextType {
  posts: Post[] | null;
  paginator: number;
  isLoading: boolean;
  fetchPosts: (query: string) => Promise<void>;
}

export const encodeQueryParams = ({
  params,
}: {
  params: Record<
    string,
    | string
    | number
    | boolean
    | string[]
    | number[]
    | boolean[]
    | null
    | undefined
  >;
}) => {
  const queryParameters = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return; // null, undefined 제외

    if (Array.isArray(value)) {
      value.forEach((v) => {
        queryParameters.append(key, v.toString());
      });
    } else {
      queryParameters.append(key, value.toString());
    }
  });

  return queryParameters.toString();
};

const PostContext = createContext<PostContextType | undefined>(undefined);

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [paginator, setPaginator] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async (query: string) => {
    setIsLoading(true);
    try {
      const url = `/api/post?${query}`;
      const response = await apiClient.get<{
        posts: ApiPost[];
        paginator: { lastpage: number };
      }>(url);
      setPaginator(response.data.paginator.lastpage);
      const apiPosts = response.data.posts;
      const formattedPosts: Post[] = apiPosts.map((p: ApiPost) => ({
        companyName: p.companyName,
        profileImageKey: p.profileImageKey,
        employmentEndDate: p.employmentEndDate,
        positionTitle: p.positionTitle,
        domain: p.domain,
        detailSummary: p.detailSummary,
        positionType: p.positionType,
      }));
      setPosts(formattedPosts);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      setPosts(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PostContext.Provider value={{ posts, paginator, isLoading, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
};
