export default {
  title: 'Watermelon',
  name: 'watermelon',
  type: 'document',
  fields: [
    {
      title: 'Watermelon Count',
      name: 'count',
      type: 'string',
    },
    {
      title: 'Purchase Date',
      name: 'purchased',
      type: 'date',
    },
    {
      title: 'Purchase Location',
      name: 'purchaseLocation',
      type: 'string',
    },
    {
      title: 'Farm Origin',
      name: 'origin',
      type: 'string',
    },
    {
      title: 'Variety',
      name: 'variety',
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
      title: 'Sweet Scale',
      name: 'sweetScale',
      type: 'string',
    },
    {
      title: 'Texture Scale',
      name: 'textureScale',
      type: 'string',
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
