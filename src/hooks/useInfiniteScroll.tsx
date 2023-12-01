import {useEffect} from 'react'
import useSWRInfinite from 'swr/infinite';
import {fetcher} from '../utils/fetcher.ts';
import {InfiniteScroll} from '../types/InfiniteScroll.ts';

const useInfiniteScroll = <T,>(apiCallFunction: (pageIndex: number, numberPerPage: number) => string, numberPerPage: number ): InfiniteScroll<T> => {
  const {
    data,
    size,
    setSize,
    error,
    isLoading
  } = useSWRInfinite<T[]>((pageIndex: number) => apiCallFunction(pageIndex, numberPerPage), fetcher);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
        return;
      }
      return setSize(size + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, setSize, size]);

  const isLoadingMore: boolean | undefined = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty: boolean = data?.[0]?.length === 0;
  const isReachingEnd: boolean | undefined = isEmpty || (data && data[data.length - 1]?.length < 6);

  return {
    data,
    error,
    isLoadingMore,
    isReachingEnd,
    isEmpty
  }
}

export default useInfiniteScroll;
