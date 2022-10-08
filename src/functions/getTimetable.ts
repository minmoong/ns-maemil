async function getTimetable() {
  const res = await fetch('/api/getTimetable')
  return await res.json()
}

export default getTimetable
