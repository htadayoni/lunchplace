import HeaderProps from './Header.props';
import { StyledHeader } from './Header.styled';
import {StyledH1} from '../../common/H1/H1.styled';
const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledH1>{props.title}</StyledH1>
    </StyledHeader>
  );
};
export default Header;
