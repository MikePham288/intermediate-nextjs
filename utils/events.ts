import { db } from '@/db/db'
import { events } from '@/db/schema'
import { eq, asc } from 'drizzle-orm'
import { delay } from './delay'

export const getEventsForDashboard = async (userId: string) => {
  await delay()

  const data = await db.query.events.findMany({
    where: eq(events.createdById, userId),
    columns: {
      id: true,
      name: true,
      startOn: true,
      status: true,
    },
    with: {
      rsvps: true,
    },
    limit: 5,
    orderBy: [asc(events.startOn)],
  })

  return data ?? []
}
