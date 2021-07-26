import { StyledResultArea, StyledResultBox } from './ResultArea.styled';
import { StyledButton } from '../../common/Button/Button.styled';
import VenueList from '../VenueList/VenueList';
import Participants from '../Participants/Participants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../../redux/reducers';
import { addParticipant } from '../../../redux/reducers/participants/actions';
import { VenuesContext } from '../../../context/venues';
import { StyledAlert } from '../../common/Alert/Alert.styled';

const ResultArea = () => {
  const participants = useSelector((state: RootState) => state.participants.list);
  const venues = useSelector((state: RootState) => state.venues.list);
  const dispatch = useDispatch();

  const addNewParticipant = () => {
    dispatch(addParticipant())
  }
  
  if(venues.length === 0)
    return (
      <StyledAlert>Please search a new place</StyledAlert>
    )
  
  return (
    <StyledResultArea>
      <StyledResultBox>
        <VenuesContext.Provider value={venues}>
          <VenueList />
          <Participants participants={participants} />
        </VenuesContext.Provider>
      </StyledResultBox>

      <StyledButton
        onClick={() => addNewParticipant()}
        type="button"
      >Add participant</StyledButton>
    </StyledResultArea>
  );
};
export default ResultArea;
