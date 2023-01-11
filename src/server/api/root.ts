import { createTRPCRouter } from './trpc'
import { exampleRouter } from './routers/example'
import { jobsRouter } from './routers/jobs'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  jobs: jobsRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
