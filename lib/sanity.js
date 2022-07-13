import {
  createClient,
  createPreviewSubscriptionHook,
  createImageURLBuilder,
  createPortableTextComponent,
} from 'next-sanity'

const config = {
  projectId: 'w58sdwbg',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
}

export const sanityClient = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const urlFor = (source) => createImageURLBuilder(config).image(source)

// export const PortableText = createPortableTextComponent({
//   ...config,
//   serializers: {},
// })
