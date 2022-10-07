import type { RequestHandler } from '@sveltejs/kit'
import { json } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request }) => {
  const { grd, grp } = await request.json();
  console.log(grd, grp);
  return json('HI CLIENT');
}