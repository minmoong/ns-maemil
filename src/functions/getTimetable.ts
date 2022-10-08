// import { createRequire } from 'module'

// const require = createRequire(import.meta.url)
const Timetable = require('comcigan-parser')
const timetable = new Timetable()

async function getTimetable() {
  await timetable.init()
  await timetable.setSchool(65332)
  return await timetable.getTimetable()
}

export default getTimetable
