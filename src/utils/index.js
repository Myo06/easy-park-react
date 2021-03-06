/**
 * Compute the average array value
 * @param {array} array of location
 * @return {object} {lat: averageLat, lng: averageLng}
 */
export const getArrayAverage = (array) => (
  array.reduce((sum, a) => (sum + a), 0) / (array.length || 1)
);

/**
 * Compute the center location from a location array
 * @param {array} array of location
 * @return {object} {lat: averageLat, lng: averageLng}
 */
export const getCenterLocation = (locations) => {
  const latValues = locations.map((location) => location.location.lat);
  const lngValues = locations.map((location) => location.location.lng);
  return ({ lat: getArrayAverage(latValues), lng: getArrayAverage(lngValues) });
};
