import {
  createClient,
  createPreviewSubscriptionHook,
  createPortableTextComponent,
} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: process.env.SANITY_ID,
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
}
const builder = imageUrlBuilder(config)

export const sanityClient = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export function urlFor(source) {
  return builder.image(source)
}
// export const PortableText = createPortableTextComponent({
//   ...config,
//   serializers: {},
// })
