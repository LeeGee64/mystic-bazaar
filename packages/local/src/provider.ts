import { fetcher } from './fetcher'
import { handler as useSearch } from './product/use-search'

export const localProvider = {
  locale: 'en-us',
  cartCookie: 'session',
  fetcher: fetcher, 
  products: { useSearch }
}

export type LocalProvider = typeof localProvider
