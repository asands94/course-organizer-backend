import Course from '../models/course.js'
import Tag from '../models/tag.js'
import User from '../models/user.js'

export const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body)
    course.user = req.user

    const user = await User.findById(req.user)
    course.user = user._id

    await course.save()

    user.courses.push(course._id)

    await user.save()

    res.status(201).json(course)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ user: req.user }).populate('tags')
    res.json(courses)
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
}

export const getCourse = async (req, res) => {
  try {
    const { id } = req.params
    const course = await Course.findById(id).populate('tags')
    console.log(course)
    if (course.user._id == req.user) {
      res.json(course)
    } else {
      res.status(404).json({ error: 'Course Not Found' })
    }
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
}

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params
    const course = await Course.findByIdAndUpdate(id, req.body, { new: true })
    res.send(course)
  } catch (e) {
    res.status(424).json({ error: e.message })
  }
}

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params
    const course = await Course.findByIdAndDelete(id)
    res.send(course)
  } catch (e) {
    res.status(424).json({ error: e.message })
  }
}

export const addTagToCourse = async (req, res) => {
  try {
    const { courseId, tagId } = req.params
    const course = await Course.findById(courseId)
    const tag = await Tag.findById(tagId)

    course.tags.push(tag)
    course.save()

    tag.courses.push(course)
    tag.save()

    res.send(course)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export const removeTagFromCourse = async (req, res) => {
  try {
    const { courseId, tagId } = req.params
    const course = await Course.findById(courseId)
    const tag = await Tag.findById(tagId)

    course.tags.remove(tag)
    course.save()

    tag.courses.remove(course)
    tag.save()

    res.send(course)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
