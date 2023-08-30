import React from 'react';
import { IPhoto } from '../../interfaces/photos';
import "./api-view.css"

interface ICardsProps {
    photos: IPhoto[]
}

function PexelsApiRaw({ photos }: ICardsProps) {
    return (
        <div className='Json-view'>
            <pre>{JSON.stringify(photos, null, 2)}</pre>
        </div>
    )
}

export default PexelsApiRaw