import mongoose from 'mongoose'

const { Schema, model } = mongoose

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    // trim removes whitespace
    url: { type: String, required: true, trim: true },
    description: { type: String },
    image: { type: String },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

export default model('Course', CourseSchema)
