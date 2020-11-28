import mongoose, { Schema } from 'mongoose'
import { BannerDocument } from '../types'

const bannerSchema = new Schema(
  {
    link: String,
    heading: String,
    img: String,
    type: String,
    active: { type: Boolean, default: true },
    q: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

bannerSchema.pre('save', async function (this: BannerDocument) {
  this.q = this.link ? this.link.toLowerCase() + ' ' : ''
  this.q += this.heading ? this.heading.toLowerCase() + ' ' : ''
  this.q += this.img ? this.img.toLowerCase() + ' ' : ''
  this.q += this.type ? this.type.toLowerCase() + ' ' : ''
  this.q += this.active ? this.active + ' ' : ''
  this.q = this.q.trim()
})

bannerSchema.index({
  '$**': 'text',
})
export const Banner = mongoose.model<BannerDocument>('Banner', bannerSchema)
