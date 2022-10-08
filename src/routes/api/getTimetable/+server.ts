import { createRequire } from 'module'
import { json, type RequestHandler } from '@sveltejs/kit'

const require = createRequire('/')
const Timetable = require('comcigan-parser')
const timetable = new Timetable()

export const GET: RequestHandler = async () => {
    await timetable.init()
    await timetable.setSchool(65332)
    return json(await timetable.getTimetable())
}
