import ApodCard from '../components/apod/ApodCard.tsx';
import {Apod} from '../types/Apod.ts';
import {getApodList} from '../api/apod.ts';
import Error from '../components/Error.tsx';
import Loading from '../components/Loading.tsx';
import useInfiniteScroll from '../hooks/useInfiniteScroll.tsx';

const ApodList = () => {
  const NUMBER_PER_PAGE: number = 6;

  const {data, error,isLoadingMore, isReachingEnd, isEmpty} = useInfiniteScroll<Apod>(getApodList, NUMBER_PER_PAGE);

    let issues: Apod[] = [];
    if (data) {
      const orderedApod: Apod[][] = data.map((apodList: Apod[]) => apodList.flat().reverse());
      issues = orderedApod.flat();
    }

    return <>
      <p className="text-2xl mb-6 underline decoration-secondary flex justify-between">
        Liste des dernières photos partagées par la NASA :
      </p>
      {error ? <Error/> :
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {
            issues.map((apod: Apod) => {
              return <ApodCard apod={apod} key={apod.date}/>
            })
          }
        </div>
      }
      {
        isLoadingMore && !isReachingEnd && !isEmpty ? <div className="my-6"><Loading size="lg"/></div> : <div className="my-6"></div>
      }
    </>
  }
;

export default ApodList;