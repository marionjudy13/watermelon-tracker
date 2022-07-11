export default {
  title: 'Watermelon',
  name: 'watermelon',
  type: 'document',
  fields: [
    {
      title: 'Watermelon Tally Number',
      name: 'watermelonTally',
      type: 'string',
    },
    {
      title: 'Date Bought',
      name: 'dateBought',
      type: 'date',
    },
    {
      title: 'Purchase Location',
      name: 'purchaseLocation',
      type: 'string',
    },
    {
      title: 'Brand',
      name: 'brand',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Rating',
      name: 'rating',
      description: ' 1 being THE WORST and 10 being THE BEST EVA',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
  ],
}
