import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
  loader: () => {
    return {
      name: 'jan marshall',
      age: 50,
    }
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()
  return <h1>{data.name}</h1>
}
