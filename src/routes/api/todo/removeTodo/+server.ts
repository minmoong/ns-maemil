import { json, type RequestHandler } from '@sveltejs/kit'
import PrismaClient from '~/prisma'

const prisma = new PrismaClient()

export const POST: RequestHandler = async ({ request }) => {
  type Todo = {
    todoId: string;
    desc: string;
  }

  const { grd, grp, todoId } = await request.json()

  const res = (await prisma.todos.findMany({
    where: { grd, grp }
  }))[0]

  let todos: Todo[] = JSON.parse(res.todos)
  todos = todos.filter(todo => todo.todoId !== todoId)

  if (todos.length === 0) {
    await prisma.todos.delete({
      where: { todos: res.todos }
    })
  } else {
    await prisma.todos.update({
      where: { todos: res.todos },
      data: { todos: JSON.stringify(todos) }
    })
  }

  return json({ success: true })
}