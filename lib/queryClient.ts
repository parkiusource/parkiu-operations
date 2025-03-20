export const CACHE_CONFIG = {
  SearchPlaces: {
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 30,
  },

  ParkingSpots: {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 15,
  },

  default: {
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60 * 5,
  },
};
