import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SelectView from ".."
import { TView } from '../../../interfaces/views';

describe("usePhotosContext", () => {

    beforeAll(() => {
      class ResizeObserver {
        observe() {
            // do nothing
        }
        unobserve() {
            // do nothing
        }
        disconnect() {
            // do nothing
          }
      }

      window.ResizeObserver = ResizeObserver;
    })

      
 
    test('View selector works with given valid type', () => {
        const expectedView: TView = "card"
        const handleSelectView = jest.fn((v: TView) => v)

        render(<SelectView selected={expectedView} handleSelectView={handleSelectView} />)

        screen.getByText("Cards")

        fireEvent.click(screen.getByText('List'))

        expect(handleSelectView).toBeCalledTimes(1);
        expect(handleSelectView).toReturnWith("list");
      
      })

});
