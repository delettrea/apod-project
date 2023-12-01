import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import {apodFakeData, apodVideoFakeData} from './_data/fakeApodData';
import ApodCard from '../src/components/apod/ApodCard';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import {formatApodDateToDate} from '../src/utils/date';
import {Apod} from '../src/types/Apod';

describe('ApodCard component', () => {
    it('renders with correct _data', () => {
      const apodData: Apod= apodFakeData;
      const apodDataDate: Date = formatApodDateToDate(apodData.date);

      render(
        <Router>
          <ApodCard apod={apodData} />
        </Router>
      );

      expect(screen.getAllByAltText(apodData.title)).toMatchFileSnapshot("_snapshot/PartialLunarItaly_Mezzio_5524.jpg");
      expect(screen.getByText(apodData.title)).toBeInTheDocument();
      expect(screen.getByRole('heading')).toHaveTextContent(apodData.title);
      expect(screen.getByText(`Date : ${apodDataDate.toLocaleDateString()}`)).toBeInTheDocument();
    });

    it('renders video for media_type "video"', () => {
      const apodData: Apod = apodVideoFakeData;
      const apodDataDate: Date = formatApodDateToDate(apodData.date);

      render(
        <Router>
          <ApodCard apod={apodData} />
        </Router>
      );

      expect(screen.getByText(apodData.title)).toBeInTheDocument();
      expect(screen.getByRole('heading')).toHaveTextContent(apodData.title);
      expect(screen.getByText(`Date : ${apodDataDate.toLocaleDateString()}`)).toBeInTheDocument();
    });
});