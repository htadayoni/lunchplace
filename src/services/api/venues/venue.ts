import axios from '../../../services/Config/axios';
import {store} from './../../../redux/store';
import { setVenues, updateVenues } from '../../../redux/reducers/venues/actions';
import { resetParticipants } from '../../../redux/reducers/participants/actions';
import { venuesListTransform } from '../../transformer/venues';
import { apiConst } from '../../Config/constants';
import { addCachedVenue } from '../../../redux/reducers/cache/actions';

export const venueServices = {
  getPopularVenue: async (address) => {
    console.log('getPopularVenue');
    axios.get(`venues/explore?client_id=${apiConst.clientId}&client_secret=${apiConst.secretKey}&query=lunch&near=${address}&v=20190724&limit=3`)
    .then(function (response) {
      console.log({response})
      const venues_list = venuesListTransform(response.data.response.groups[0].items);
      store.dispatch(setVenues(venues_list));
      store.dispatch(resetParticipants());
    })
    .catch(function (error) {

    });
  },

  getVenueDetail: async (venue) => {
    axios.get(`venues/${venue.id}?Userless&client_id=${apiConst.clientId}&client_secret=${apiConst.secretKey}&v=20190724`)
    .then(function (response) {
      store.dispatch(addCachedVenue({
        id: venue.id,
        name: venue.name,
        rating: response.data.response.venue.rating
      }));
    })
    .catch(function (error) {
      
    });
  },

}