import { useState, useContext, memo, useEffect } from 'react';
import ParticipantProps from './Participant.props';
import { StyledParticipant, ParticipantCol } from './Participant.styled';
import { StyledInput } from '../common/Input/Input.styled';
import { VenuesContext } from '../../context/venues';
import { updateParticipants } from '../../redux/reducers/participants/actions';
import { useDispatch } from 'react-redux';
import tickImage from './../../assets/images/check.svg';
import { StyledImage } from '../common/Image/Image.styled';

const Participant = (props: ParticipantProps) => {
  const { participant } = props;
  const [name, setName] = useState<string>(participant.name);
  const venues = useContext(VenuesContext);
  const dispatch = useDispatch();

  const selectVenue = (selectedVenue) => {
    dispatch(updateParticipants({...participant, rate: selectedVenue}))
  }

  const handleUpdateName = () => {
    dispatch(updateParticipants({...participant, name}))
  }

  useEffect(() => {
    setName(participant.name);
  }, [participant.name]);

  return (
    <StyledParticipant>
      <ParticipantCol className="participant__name">
        <StyledInput
          placeholder='Type Here'
          onChange={(e) => setName(e.target.value)}
          value={name}
          type='text'
          onBlur={() => handleUpdateName()}
          inputSize='S'
        />
      </ParticipantCol>
      {
        venues.map(venue => <ParticipantCol 
          key={venue.id} 
          className={`participant__rate ${participant.rate === venue.id ? 'active' : ''}`}
          onClick={() => selectVenue(venue.id)} 
        >
          <StyledImage src={tickImage} width={24} />
        </ParticipantCol>)
      }
    </StyledParticipant>
  );
};
export default Participant;
