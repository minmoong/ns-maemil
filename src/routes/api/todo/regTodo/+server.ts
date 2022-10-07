import { json, type RequestHandler } from '@sveltejs/kit'
import PrismaClient from '~/prisma'

const prisma = new PrismaClient()

export const POST: RequestHandler = async ({ request }) => {
  const { grd, grp, todoId, desc } = await request.json()

  const res = (await prisma.todos.findMany({
    where: { grd, grp }
  }))[0]

  if (res?.todos === undefined) {
    const todos = JSON.stringify([{ todoId, desc, createdAt: new Date() }])
    await prisma.todos.create({
      data: { grd, grp, todos }
    })
  } else {
    let todos = JSON.parse(res.todos)
    todos = [{ todoId, desc, createdAt: new Date() }, ...todos]
    await prisma.todos.update({
      where: {  },
      data: { todos }
    })
  }

  return json({ success: true })
}