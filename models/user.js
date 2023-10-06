import mongoose from 'mongoose'

const { Schema, model } = mongoose

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    // trim removes whitespace
    email: { type: String, required: true, unique: true, trim: true },
    // select excludes the field from being returned in a query
    passwordDigest: { type: String, required: true, select: false },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  },
  { timestamps: true }
)

export default model('User', UserSchema)
