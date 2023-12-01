export type InfiniteScroll<T> = {
  data: T[][] | undefined,
  error: boolean,
  isLoadingMore: boolean | undefined,
  isReachingEnd: boolean | undefined,
  isEmpty: boolean
}