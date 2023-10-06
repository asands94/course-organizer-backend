import Tag from '../models/tag.js'
import User from '../models/user.js'

export const createTag = async (req, res) => {
  try {
    const tag = new Tag(req.body)
    tag.user = req.user

    const user = await User.findById(req.user)
    tag.user = user._id

    await tag.save()

    user.tags.push(tag._id)

    await user.save()

    res.status(201).json(tag)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find()
    res.json(tags)
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
}

export const getTag = async (req, res) => {
  try {
    const { id } = req.params
    const tag = await Tag.findById(id)

    if (tag) {
      res.json(tag)
    } else {
      res.status(404).json({ error: 'Tag Not Found' })
    }
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
}

export const updateTag = async (req, res) => {
  try {
    const { id } = req.params
    const tag = await Tag.findByIdAndUpdate(id, req.body, { new: true })
    res.send(tag)
  } catch (e) {
    res.status(424).json({ error: e.message })
  }
}

export const deleteTag = async (req, res) => {
  try {
    const { id } = req.params
    const tag = await Tag.findByIdAndDelete(id)
    res.send(tag)
  } catch (e) {
    res.status(424).json({ error: e.message })
  }
}
