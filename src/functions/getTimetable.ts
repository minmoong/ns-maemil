async function getTimetable() {
  let data = await fetch('/api/getTimetable').then(res => res.json())
  return data
}

export default getTimetable;
