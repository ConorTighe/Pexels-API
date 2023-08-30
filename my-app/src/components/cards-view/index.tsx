import React from 'react';
import { Card, Image, Text, Badge, Group } from '@mantine/core';
import { IPhoto } from '../../interfaces/photos';
import "./cards-view.css"

interface ICardsProps {
    photos: IPhoto[]
}

function Cards({ photos }: ICardsProps) {
    return (
        <div className="Cards-container">
            {photos.map(photo => (
                <Card key={photo.id} className='Card' shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                    src={photo.src.original}
                    height={200}
                    alt={photo.alt}
                    placeholder={photo.alt}
                    />
                </Card.Section>
            
                <Group position="center" mt="md" mb="xs">
                    <div className='Info'>
                        <Badge color="blue" variant="light">
                        Author
                        </Badge>
                        <Text weight={500}>{photo.photographer}</Text>
                    </div>
                </Group>
                </Card>
            ))}
        </div>
    )
}

export default Cards