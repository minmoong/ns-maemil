async function removeTodo(grd: number, grp: number, todoId: string) {
  return await fetch('/api/todo/removeTodo', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ grd, grp, todoId })
  }).then(res => res.json())
}

export default removeTodo