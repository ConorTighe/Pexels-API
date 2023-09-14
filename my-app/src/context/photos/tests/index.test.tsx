import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import usePhotosContext, { PhotosProvider } from '..';
import axios from 'axios';
import { generateTestPhotos } from '../../../utils/test-utils';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('usePhotosContext', () => {
  function PhotosConsumer(): JSX.Element {
    const { photos } = usePhotosContext();

    if (!photos?.length) return <span>{'No photos to display!'}</span>;

    return (
      <div>
        {photos.map((photo) => (
          <div key={photo.id}>
            <span>{photo.id}</span>
            <span>{photo.photographer}</span>
            <span>{photo.src.original}</span>
          </div>
        ))}
      </div>
    );
  }

  test('Photos context returns empty array', async () => {
    mockedAxios.get.mockResolvedValue({ data: { photos: [] } });

    render(
      <PhotosProvider>
        <PhotosConsumer />
      </PhotosProvider>,
    );

    expect(await screen.findByText('No photos to display!')).toBeInTheDocument();
  });

  test('Photos context has empty array when API falls over', async () => {
    // eslint-disable-next-line no-throw-literal
    mockedAxios.get.mockImplementation(() => {
      throw new Error();
    });

    render(
      <PhotosProvider>
        <PhotosConsumer />
      </PhotosProvider>,
    );

    expect(await screen.findByText('No photos to display!')).toBeInTheDocument();
  });

  test('Photos context provides expected photo data for display', () => {
    const expectedValues = generateTestPhotos();

    mockedAxios.get.mockResolvedValue({ data: { photos: expectedValues } });

    render(
      <PhotosProvider>
        <PhotosConsumer />
      </PhotosProvider>,
    );

    expectedValues.forEach(async (value) => {
      expect(await screen.findByText(value.id)).toBeInTheDocument();
      expect(await screen.findByText(value.photographer)).toBeInTheDocument();
      expect(await screen.findByText(value.src.original)).toBeInTheDocument();
    });
  });
});
