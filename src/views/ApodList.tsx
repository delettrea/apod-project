import ApodCard from '../components/ApodCard.tsx';
import {Apod} from '../types/Apod.ts';
import {useEffect, useState} from 'react';
import {getAPODList} from '../api/apod.ts';
import Error from '../components/Error.tsx';
import Loading from '../components/Loading.tsx';

const ApodList = () => {
  const [apodList, setApodList] = useState<Apod[]>([])
  // I use const count instead of useState because setCount is not already use
  // const [count, setCount] = useState(6);
  const count: number = 6;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const firstDate = new Date();
    const lastDate = new Date();
    lastDate.setDate(lastDate.getDate() - (count - 1))

    getAPODList(firstDate, lastDate).catch((error) => {
      setIsError(true);
      throw error;
    }).then((response: Apod[]) => setApodList((previous: Apod[]) => [...previous, ...response]));
    return setIsLoading(false);
  }, [count]);


  return (
    <>
      <p className="text-2xl mb-12 underline decoration-secondary">
        Liste des {count} dernières photos partagées par la NASA :
      </p>

      {isError ? <Error/> : isLoading ? <Loading/> :
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {
            apodList.reverse().map((apod: Apod) => {
              return <ApodCard apod={apod} key={apod.date}/>
            })
          }
        </div>
      }
    </>
  );
};

export default ApodList;