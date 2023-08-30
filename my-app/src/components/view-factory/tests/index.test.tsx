import React from 'react'
import {fireEvent, getByAltText, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SelectView from ".."
import { TView } from '../../../interfaces/views';
import Views from '..';
import { generateTestPhotos } from '../../../utils/test-utils';
import { IPhoto } from '../../../interfaces/photos';
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("usePhotosContext", () => {

    // beforeAll(() => {
    //   class ResizeObserver {
    //     observe() {
    //         // do nothing
    //     }
    //     unobserve() {
    //         // do nothing
    //     }
    //     disconnect() {
    //         // do nothing
    //       }
    //   }

    //   window.ResizeObserver = ResizeObserver;
    // })

      
 
    test('View factory works with given card type', () => {

        const expectedValues: IPhoto[] = generateTestPhotos()

        mockedAxios.get.mockResolvedValue({ data: { photos: expectedValues } });

        render(<Views view={"card"} photos={expectedValues} />)

        expectedValues.forEach((photo) => {
          expect(screen.getByText(photo.photographer)).toBeInTheDocument();
          expect(screen.getByAltText(photo.alt)).toBeInTheDocument();
        })
      
      })

      test('View factory works with given list type', () => {

        const expectedValues: IPhoto[] = generateTestPhotos()

        mockedAxios.get.mockResolvedValue({ data: { photos: expectedValues } });

        render(<Views view={"list"} photos={expectedValues} />)

        expectedValues.forEach((photo) => {
          expect(screen.getByText(`${photo.alt} by ${photo.photographer}`)).toBeInTheDocument();
        })
      
      })
});
