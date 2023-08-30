import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Views from '..';
import { generateTestPhotos } from '../../../utils/test-utils';
import { IPhoto } from '../../../interfaces/photos';
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ViewFactory", () => {
 
    test('View factory works with given card type', () => {

        const expectedValues: IPhoto[] = generateTestPhotos()

        mockedAxios.get.mockResolvedValue({ data: { photos: expectedValues } });

        render(<Views view={"card"} photos={expectedValues} />)

        expectedValues.forEach((photo) => {
          expect(screen.getByText(photo.photographer)).toBeInTheDocument();
          expect(screen.getByAltText(photo.alt)).toBeInTheDocument();
        })
      
      })

      test('View factory works with given accordion type', () => {

        const expectedValues: IPhoto[] = generateTestPhotos()

        mockedAxios.get.mockResolvedValue({ data: { photos: expectedValues } });

        render(<Views view={"accordion"} photos={expectedValues} />)

        expectedValues.forEach((photo) => {
          expect(screen.getByText(`${photo.alt} by ${photo.photographer}`)).toBeInTheDocument();
        })
      
      })

      test('View factory works with given list type', () => {

        const expectedValues: IPhoto[] = generateTestPhotos()

        mockedAxios.get.mockResolvedValue({ data: { photos: expectedValues } });

        render(<Views view={"list"} photos={expectedValues} />)

        const listText = screen.getAllByText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)

        listText.forEach((text) => {
          expect(text).toBeInTheDocument();
        })
      
      })
});
