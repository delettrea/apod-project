import {Badge, Card} from 'react-daisyui';
import {Link} from 'react-router-dom';
import {Apod} from '../types/Apod.ts';
import {formatApodDateToDate} from '../utils/date.ts';

type ApodCardProps = {
  apod: Apod,
}

const ApodCard = ({apod}: ApodCardProps) => {
  const {
    url,
    title,
    date,
    explanation,
    media_type,
  } = apod;

  const formattedDate: Date = formatApodDateToDate(date);

  return (
    <Link to={`/apod/${date}`}>
    <Card className="shadow-sm rounded-md border-2 border-gray-200 hover:transition hover:opacity-70">
      {media_type === "image" ? <Card.Image className="shadow-md h-80 min-w-full" src={url} alt={title}/>
        :
        <iframe className="w-full aspect-video h-80 min-w-full" src={url}></iframe>
      }
      <Card.Body>
        <div className="card-actions justify-end">
          <Badge color="primary">Date : {formattedDate.toLocaleDateString()}</Badge>
        </div>
        <Card.Title className="truncate underline decoration-secondary underline-offset-2" tag="h2">{title}</Card.Title>
          <p className="line-clamp-3 mt-2">{explanation}</p>
      </Card.Body>
    </Card>
    </Link>
  );
};

export default ApodCard;