import { Product } from "./productos"

export class Sale {
    id?: number
    listProducts: Product[]
    total: number
    user: string
}