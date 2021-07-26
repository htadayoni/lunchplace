import { Venue } from "../../redux/reducers/venues/types";

export const venuesListTransform = (data) => {
  let list: Venue[] = [];

  for (const item of data){
    list.push({
      'id': item.venue.id,
      'name': item.venue.name,
      'category': {
        id: item.venue.categories[0].id,
        name: item.venue.categories[0].name
      }
    })
  }

  return list;
}