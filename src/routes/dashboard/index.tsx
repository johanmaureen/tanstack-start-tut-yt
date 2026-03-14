import { getSessioFn } from '#/data/session'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
  loader: () => getSessioFn(),
})

function RouteComponent() {
  const { user } = Route.useLoaderData()
  return <h1>{user.name}</h1>
}
