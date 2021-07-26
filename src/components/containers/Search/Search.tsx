import { useState } from 'react';
import { StyledButton } from '../../common/Button/Button.styled';
import { StyledInput } from '../../common/Input/Input.styled';
import { StyledSearch } from './Search.styled';
import { venuesServices } from '../../../services/api/venues';

const Search = () => {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearchSubmit = () => {
    venuesServices.getPopularVenue(keyword)
  }

  return (
    <StyledSearch className={'search__container--area'} onSubmit={(e) => {
      handleSearchSubmit();
      e.preventDefault();
    }}>
      <StyledInput
        value={keyword}
        placeholder='City Name'
        onChange={(e) => setKeyword(e.target.value)}
        type='text'
        className='search__input'
      />
      <StyledButton
        type='submit'
        className='search__submit'
      >Search</StyledButton>
    </StyledSearch>
  );
};
export default Search;
