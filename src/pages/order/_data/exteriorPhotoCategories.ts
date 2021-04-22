export type photoCategoryIDs = 'frontView'
                            | 'frontAngledView'
                            | 'frontViewLeft'
                            | 'frontViewRight'
                            | 'streetView'
                            | 'oppositeStreetView'
                            | 'addressVerification'
                            | 'exterior'
                            | 'leftSideOfDwelling'
                            | 'rightSideOfDwelling'
                            | 'rearOfDwelling'
                            | 'backyard'
                            | 'roof'
                            | 'exteriorPaint'
                            | 'viewsAndScenery'
                            | 'neighborhoodInfluences'

export const exteriorPhotoCategories: Array<{ text: string; id: photoCategoryIDs; required: boolean, hint: string, order: number }> = [
  {
    text: 'Front View',
    id: 'frontView',
    required: true,
    hint: 'Take a photo of the front of the subject property. Be sure the entire front of the dwelling can be seen in the photo.',
    order: 1,
  },
  {
    text: 'Front Angled View',
    id: 'frontAngledView',
    required: true,
    hint: 'Take a photo of the subject property where you can see both the front of the house and the side of the house',
    order: 2
  },
  {
    text: 'Front View Left',
    id: 'frontViewLeft',
    required: true,
    hint: 'Take a photo of the subject property so as to provide a view of both the front and the left side of the dwelling.',
    order: 3
  },
  {
    text: 'Front View Right',
    id: 'frontViewRight',
    required: true,
    hint: 'Take a photo of the subject property so as to provide a view of both the front and the right side of the dwelling.',
    order: 4
  },
  {
    text: 'Street View',
    id: 'streetView',
    required: true,
    hint: 'While standing in front of the subject property, take a photo looking down the street so as to provide a good view of the nearby dwellings.',
    order: 5
  },
  {
    text: 'Opposite Street View',
    id: 'oppositeStreetView',
    required: true,
    hint: 'While standing in front of the subject property, take a photo looking down the opposite direction of the street from that of the Street View photo, ensuring a good view of the nearby dwellings.',
    order: 6
  },
  {
    text: 'Address Verification',
    id: 'addressVerification',
    required: true,
    hint: `While zooming in on the subject property’s address, take a photo so as to confirm you have visited the correct property.
      The address may be located on the dwelling, mailbox or curb.
        If no physical address is visible, take a photo of the street sign to confirm you were on the correct street.`,
    order: 11
  },
  {
    text: 'Exterior',
    id: 'exterior',
    required: false,
    hint: 'Take as many photos as necessary so as to provide evidence of the subject property’s condition as well as any functional obsolescence such as railroad tracks, power lines, etc.',
    order: 12
  },
];

export const exteriorPhotoCategoriesForInteriorOrders: Array<{ text: string; id: photoCategoryIDs; required: boolean, hint: string, order: number }> = [
  {
    text: 'Left Side of Dwelling',
    id: 'leftSideOfDwelling',
    required: true,
    hint: 'Take a photo of the full left side of the dwelling.  The most helpful photo would be shot at an angle so that a portion of the rear of the dwelling was visible in the photo along with the full left side of the dwelling.',
    order: 7
  },
  {
    text: 'Right Side of Dwelling',
    id: 'rightSideOfDwelling',
    required: true,
    hint: 'Take a photo of the full right side of the dwelling.  The most helpful photo would be shot at an angle so that a portion of the rear of the dwelling was visible in the photo along with the full right side of the dwelling.',
    order: 8
  },
  {
    text: 'Rear of Dwelling',
    id: 'rearOfDwelling',
    required: true,
    hint: 'From the farthest point from the rear of the dwelling, while in the backyard, take a photo of the rear of the subject property.  Be sure to the entire rear of the dwelling can be seen in the photo. ',
    order: 9
  },
  {
    text: 'Backyard',
    id: 'backyard',
    required: true,
    hint: 'Take a photo from the rear of the dwelling so as to capture a view of the entire backyard.',
    order: 10
  },
]

export const optionalPhotoCategories: Array<{ text: string; id: photoCategoryIDs; required: boolean, hint: string, order: number }> = [
  {
    text: 'Roof',
    id: 'roof',
    required: false,
    hint: `Please make it a habit to thoroughly inspect the roof on EVERY assignment.
      Take at least one photo of the dwelling’s roof and multiple photos, zooming in, of any visible damage or concerns of damage such a tarp covering part of the roof.`,
    order: 13
  },
  {
    text: 'Exterior Paint',
    id: 'exteriorPaint',
    required: false,
    hint: `Please make it a habit to thoroughly inspect the condition of the paint on EVERY assignment.
      Take photos of the exterior of the dwelling including soffits, fascia, doors including trim, windows including trim, etc.`,
    order: 14
  },
  {
    text: 'Views & Scenery',
    id: 'viewsAndScenery',
    required: false,
    hint: `If the subject property has views that will influence the value and/or marketability
     (ocean, lake, mountains, church, school, gravel pit, liquor store, etc.), take photos of these. `,
    order: 15
  },
  {
    text: 'Neighborhood Influences',
    id: 'neighborhoodInfluences',
    required: false,
    hint: `Take photos of anything near the subject property, or within in its immediate area, which may have an influence on its value and/or marketability.`,
    order: 16
  }
]

