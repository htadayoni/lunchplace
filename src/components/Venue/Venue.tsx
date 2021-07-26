import { useEffect, memo, useState } from 'react';
import { VenueProps } from './Venue.props';
import { StyledVenue, StyledVenueLink, StyledVenueCategory, StyledVenueRate } from './Venue.styled';
import { venuesServices } from '../../services/api/venues';
import ImageLoading from './../../assets/images/spinner.gif';
import { StyledImage } from '../common/Image/Image.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { CachedVenue } from '../../redux/reducers/cache/types';

const Venue = (props: VenueProps) => {
  const {data} = props;
  const [rating, setRating] = useState<number>(-1);
  const cache = useSelector((state: RootState) => state.cache.list);

  useEffect(() => {
    if(rating < 0){
      const cachedVenue: CachedVenue | undefined = cache.find((item: CachedVenue) => item.id === data.id);

      if(cachedVenue)
        setRating(cachedVenue.rating)
      else
        fetchVenueRate();
    }
      
  }, [rating, cache])

  const fetchVenueRate = () => {
    venuesServices.getVenueDetail(data);
  }
  
  return (
    <StyledVenue className='venue__container--area'>
      <StyledVenueLink className='venue__link' href={`https://foursquare.com/v/${data.id}`} target='_blank'>{data.name}</StyledVenueLink>
      <StyledVenueCategory className='venue__category'>{data.category['name']}</StyledVenueCategory>
      <StyledVenueRate className='venue__rate'>
        {rating < 0 ? <StyledImage src={ImageLoading} alt="loading" width={30} /> : (rating) }
      </StyledVenueRate>
    </StyledVenue>
  );
};
export default memo(Venue);
