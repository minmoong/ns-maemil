import { createRequire } from 'module'
import { json, type RequestHandler } from '@sveltejs/kit'

const require = createRequire(import.meta.url)
const Timetable = require('comcigan-parser')
const timetable = new Timetable()

export const GET: RequestHandler = async () => {
    console.log('이거 보이니?이거 보이니?이거 보이니?이거 보이니?이거 보이니?이거 보이니?이거 보이니?이거 보이니?이거 보이니?이거 보이니?')
    console.log(import.meta.url)
    
    await timetable.init()
    await timetable.setSchool(65332)
    return json(await timetable.getTimetable())
}
