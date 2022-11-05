import { json, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request }) => {
  const { startDay, endDay } = await request.json()
  const reqUrl = 'https://open.neis.go.kr/hub/SchoolSchedule'
  + '?KEY=9a2d23994fc7449c8f7af9e638c7ffdc'
  + '&Type=json'
  + '&ATPT_OFCDC_SC_CODE=G10'
  + '&SD_SCHUL_CODE=7451018'
  + '&AA_FROM_YMD=' + startDay
  + '&AA_TO_YMD=' + endDay
  const thenHandle = async (res: Response) => {
      const data = await res.json()
      if(!Object.prototype.hasOwnProperty.call(data, 'SchoolSchedule')) return null
      return data.SchoolSchedule[1].row
  }
  const scheduleList = await fetch(reqUrl).then(thenHandle)
  if (scheduleList === null) {
      return json({ success: false })
  }
  return json({ success: true, scheduleList })
}
