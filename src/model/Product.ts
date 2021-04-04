import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
      name: {
            type: String,
            required: [true, 'Please provide a name for this Product.'],
      },
      image_url: {
            required: [true, 'Please provide an image url for this product.'],
            type: String,
      },
      price_per_kilo: {
            required: [true, 'Please price this product.'],
            type: Number
      },
      farmer: {
            type: String,
            required: [true, 'Please provide a farmer name for this Product.']
      },
      description: String,
      info: {
            origin: String,
            certification: String,
            type: String,
      }
      
} )

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)