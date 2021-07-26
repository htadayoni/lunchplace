import { StyledParticipants } from './Participants.styled';
import Participant from '../../Participant/Participant';
import ParticipantsProps from './Participants.props';

const Participants = (props: ParticipantsProps) => {
  const { participants } = props;

  return (
    <StyledParticipants>
      {participants.map(participant => <Participant key={participant.id} participant={participant} />)}
    </StyledParticipants>
  );
};
export default Participants;
