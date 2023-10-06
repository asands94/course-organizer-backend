import mongoose from 'mongoose'

const { Schema, model } = mongoose

const TagSchema = new Schema(
  {
    name: { type: String, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  },
  { timestamps: true }
)

export default model('Tag', TagSchema)
