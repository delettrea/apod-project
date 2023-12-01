import {Footer} from 'react-daisyui';

const ApodFooter = () => {
  return (
    <Footer className="p-10 bg-gray-700/10 text-neutral-content flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>

        <p>
          Site développé par Aline Delettre.
          <br />
          A des fins d'exercice de développement.
        </p>
      </div>
    </Footer>
  )
}

export default ApodFooter;