import {useEffect, useRef, useState} from 'react';
import {Apod} from '../types/Apod.ts';
import {useParams} from 'react-router-dom';
import ApodExpandedCard from '../components/ApodExpandedCard.tsx';
import Error from '../components/Error.tsx';
import Loading from '../components/Loading.tsx';
import {getAPOD} from '../api/apod.ts';
import {dateValidator} from '../utils/validation.ts';

const ApodDetails = () => {
  const {apodId} = useParams<string>();
  const validatedApodId: Date = dateValidator.parse(apodId);
  const apodDate = useRef(validatedApodId);

  const [apod, setApod] = useState<Apod | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    getAPOD(apodDate.current).catch((error) => {
      setIsError(true);
      throw error;
    }).then((response: Apod) => setApod(response));
    return setIsLoading(false);
  }, []);

  return (
    <>
      {isError ? <Error/> : !isLoading && apod ? <ApodExpandedCard apodDate={validatedApodId} apod={apod}/> :
        <Loading/>}
    </>
  );
};

export default ApodDetails;