import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '99mtu2z6',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:'sk03QTpm5kHvOTG7trrMsWXspYcvc7zvBtZMhyFq6U9K2DJnGYwRHErayMr4NMCu5wAzrkemGETosQYFI0cl2GlAAgTV0tvDSyIpiq7YrcGqFGCJ95oasx6c8awaRZfoC0nQhGVzgdZGyAZ6oj97JrXZzB6f26P6hBELw99M3vw5KE4g5lXA',
  useCdn: false,
})
