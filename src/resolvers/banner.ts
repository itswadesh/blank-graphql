import { IResolvers } from 'apollo-server-express'
import { Request, BannerDocument } from '../types'
import { Banner } from '../models'
import { fields } from '../utils'

const resolvers: IResolvers = {
  Query: {
    banners: (root, args, { req }: { req: Request }, info) => {
      return Banner.find({}, fields(info))
    },
    banner: async (
      root,
      args: { id: string },
      ctx,
      info
    ): Promise<BannerDocument | null> => {
      return Banner.findById(args.id, fields(info))
    },
  },
  Mutation: {
    deleteBanner: async (
      root,
      args,
      { req }: { req: Request }
    ): Promise<Boolean> => {
      const banner: any = await Banner.findByIdAndDelete(args.id)
      return banner
    },
    saveBanner: async (
      root,
      args,
      { req }: { req: Request }
    ): Promise<BannerDocument | null> => {
      const { userId } = req.session
      args.user = userId
      if (args.id == 'new') return await Banner.create(args)
      else {
        let banner = await Banner.findOneAndUpdate({ _id: args.id }, args, {
          new: true,
          upsert: true,
        })
        await banner.save() // To fire pre save hoook
        return banner
      }
    },
  },
}

export default resolvers
