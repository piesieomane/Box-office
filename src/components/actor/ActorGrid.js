/* eslint-disable import/named */
import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => (
  <FlexGrid>
    {data.map(({ person }) => (
      <ActorCard
        key={person.id}
        name={person.name}
        country={person.country ? person.country.name : 'No country'}
        birthday={person.birthday}
        deathday={person.deathday}
        gender={person.gender}
        image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
      />
    ))}
  </FlexGrid>
);

export default ActorGrid;
