export interface VenueProps {
  data: Venue
}

interface Venue {
  id: string,
  name: string,
  category: Category
}

interface Category {
  id: string;
  name: string;
}

export interface VenueLinkProps {
  className?: string;
  href: string;
  target?: string;
}
