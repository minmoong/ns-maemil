import { json, type RequestHandler } from '@sveltejs/kit'
import PrismaClient from '~/prisma'

const prisma = new PrismaClient()

export const POST: RequestHandler = async ({ request }) => {
  const { grd, grp } = await request.json()
  const res = (await prisma.todos.findMany({
    where: { grd, grp }
  }))[0]
  if (res?.todos === undefined) {
    return json({
      success: true,
      data: '[]'
    })
  } else {
    return json({
      success: true,
      data: res.todos
    })
  }
}