import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import {apodFakeData, apodVideoFakeData} from './fakeData';
import ApodCard from '../src/components/ApodCard';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import {formatApodIdToDate, formatStringDateToId} from '../src/utils/Date';

describe('ApodCard component', () => {
    it('renders with correct data', () => {
      const apodData= apodFakeData;
      const apodDataDate: Date = formatApodIdToDate(formatStringDateToId(apodData.date));

      render(
        <Router>
          <ApodCard apod={apodData} />
        </Router>
      );

      expect(screen.getAllByAltText(apodData.title)).toMatchFileSnapshot("snapshot/PartialLunarItaly_Mezzio_1080.jpg");
      expect(screen.getByText(apodData.title)).toBeInTheDocument();
      expect(screen.getByRole('heading')).toHaveTextContent(apodData.title);
      expect(screen.getByText(`Date : ${apodDataDate.toLocaleDateString()}`)).toBeInTheDocument();
    });

    it('renders video for media_type "video"', () => {
      const apodData = apodVideoFakeData;
      const apodDataDate: Date = formatApodIdToDate(formatStringDateToId(apodData.date));

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