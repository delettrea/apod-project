import {Apod} from '../types/Apod.ts';
import {useParams} from 'react-router-dom';
import ApodExpandedCard from '../components/apod/ApodExpandedCard.tsx';
import Error from '../components/Error.tsx';
import Loading from '../components/Loading.tsx';
import {dateValidator} from '../utils/validation.ts';
import useSWR from 'swr';
import {fetcher} from '../utils/fetcher.ts';
import {getApod} from '../api/apod.ts';

const ApodDetails = () => {
  const {apodId} = useParams<string>();
  const validatedApodId: Date = dateValidator.parse(apodId);
  const {data: apod, error, isLoading} = useSWR<Apod>(getApod(validatedApodId), fetcher);

  if(error) {
    return <Error />
  }

  if(isLoading) {
    return <Loading />
  }

  if(apod) {
    return <ApodExpandedCard apodDate={validatedApodId} apod={apod}/>
  }
};

export default ApodDetails;