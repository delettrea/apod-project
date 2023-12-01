import {Badge, Button, Card} from 'react-daisyui';
import {Link} from 'react-router-dom';
import {Apod} from '../../types/Apod.ts';

type ApodExpandedCardProps = {
  apodDate: Date,
  apod: Apod,
}

const ApodExpandedCard = ({apod, apodDate}: ApodExpandedCardProps) => {
  return (
    <Card {...{bordered: false}} className="rounded-none">
      {apod.media_type === "image" ? <Card.Image className="min-w-full" src={apod.hdurl ? apod.hdurl : apod.url} alt={apod.title}/>
        :
        <iframe className="w-full aspect-video min-w-full" src={apod.url}></iframe>
      }
      <Card.Body className="p-4 md:p-12">
        <div className="card-actions justify-end">
          {apod.copyright ? <Badge variant="outline" color="primary">Copyright : {apod.copyright}</Badge> : <></>}
          <Badge variant="outline" color="primary">Date : {apodDate.toLocaleDateString()}</Badge>
        </div>
        <Card.Title tag="h2" className="underline decoration-violet-500/30 underline-offset-2">{apod.title}</Card.Title>
        <p className="mt-2 tracking-wide leading-relaxed">{apod.explanation}</p>
      </Card.Body>

      <div className="flex justify-end">
        <Link to="/">
          <Button color="secondary" variant="outline" endIcon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
          }>
            <span className="hidden md:block">Voir la liste des Astronomy Picture</span>
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ApodExpandedCard;