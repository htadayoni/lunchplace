import { useContext } from 'react';
import { StyledVenueList, StyledParticipantsTitle } from './VenueList.styled';
import Venue from '../../Venue/Venue';
import { VenuesContext } from '../../../context/venues';

const VenueList = () => {
  const venues = useContext(VenuesContext);

  return (
    <StyledVenueList className='venueList__container--area'>
      <StyledParticipantsTitle>Participants</StyledParticipantsTitle>
      { venues.map(venue => <Venue key={venue.id} data={venue} />) }
    </StyledVenueList>
  );
};
export default VenueList;
