import { Image } from './common'

export interface ProductPrice {
 
  value: number

  currencyCode?: 'USD' | 'EUR' | 'ARS' | 'GBP' | string
 
  retailPrice?: number
}

export interface ProductOption {
  __typename?: 'MultipleChoiceOption'

  id: string
 
  displayName: string
 
  values: ProductOptionValues[]
}


export interface ProductOptionValues {
 
  label: string

   price: ProductPrice
}


export interface Product {
  
  id: string
  
  name: string
  
  description: string
 
  descriptionHtml?: string
 
  date?: string
  
  slug?: string
 
  path?: string

  category?: []
 
  images: Image[]
 
  options: ProductOption[]

}

export interface SearchProductsBody {
  /**
   * The search query string to filter the products by.
   */
  search?: string
  /**
   * The category ID to filter the products by.
   */
  categoryId?: string
  /**
   * The brand ID to filter the products by.
   */
  brandId?: string
  /**
   * The sort key to sort the products by.
   * @example 'trending-desc' | 'latest-desc' | 'price-asc' | 'price-desc'
   */
  sort?: string
  /**
   * The locale code, used to localize the product data (if the provider supports it).
   */
}

/**
 * Fetches a list of products based on the given search criteria.
 */
export type SearchProductsHook = {
  data: {
    /**
     * List of products matching the query.
     */
    products: Product[]
    /**
     * Indicates if there are any products matching the query.
     */
    found: boolean
  }
  body: SearchProductsBody
  input: SearchProductsBody
  fetcherInput: SearchProductsBody
}

/**
 * Product API schema
 */

export type ProductsSchema = {
  endpoint: {
    options: {}
    handlers: {
      getProducts: SearchProductsHook
    }
  }
}

/**
 *  Product operations
 */

export type GetAllProductPathsOperation = {
  data: { products: Pick<Product, 'path'>[] }
  variables: { first?: number }
}

export type GetAllProductsOperation = {
  data: { products: Product[] }
  variables: {
    relevance?: 'featured' | 'best_selling' | 'newest'
    ids?: string[]
    first?: number
  }
}

export type GetProductOperation = {
  data: { product?: Product }
  variables: { path: string; slug?: never } | { path?: never; slug: string }
}
