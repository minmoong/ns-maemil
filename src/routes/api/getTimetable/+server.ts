import { json, type RequestHandler } from '@sveltejs/kit'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const Timetable = require('comcigan-parser')
const timetable = new Timetable()

export const GET: RequestHandler = async () => {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: ", import.meta.url)
  await timetable.init()
  await timetable.setSchool(65332)
  return json(await timetable.getTimetable())
}
