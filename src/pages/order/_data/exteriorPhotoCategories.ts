export const exteriorPhotoCategories: Array<{ text: string; id: string; required: boolean }> = [
  {text: 'Front View', id: 'frontView', required: true},
  {text: 'Front Angled View', id: 'frontAngledView', required: true},
  {text: 'Front View Right', id: 'frontViewRight', required: true},
  {text: 'Front View Left', id: 'frontViewLeft', required: true},
  {text: 'Street View', id: 'streetView', required: true},
  {text: 'Opposite Street View', id: 'oppositeStreetView', required: true},
  {text: 'Right Side of Dwelling', id: 'rightSideOfDwelling', required: true},
  {text: 'Left Side of Dwelling', id: 'leftSideOfDwelling', required: true},
  {text: 'Rear of Dwelling', id: 'rearOfDwelling', required: true},
  {text: 'Backyard', id: 'backyard', required: true},
  {text: 'Address Verification', id: 'addressVerification', required: true},
  {text: 'Exterior', id: 'exterior', required: false}
];
export default exteriorPhotoCategories;
