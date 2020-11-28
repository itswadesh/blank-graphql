import { Document } from 'mongoose'

export interface BannerDocument extends Document {
  link: string
  heading: string
  img: string
  type: string
  active: boolean
  q: string
}
