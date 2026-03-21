import { buttonVariants } from '#/components/ui/button'
import { getItemById } from '#/data/items'
import { Link } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Calendar, Clock, ExternalLink, User } from 'lucide-react'

export const Route = createFileRoute('/dashboard/items/$itemId')({
  component: RouteComponent,
  loader: ({ params }) => getItemById({ data: { id: params.itemId } }),
})

function RouteComponent() {
  const data = Route.useLoaderData()
  return (
    <div className="mx-auto max-w-3xl space-y-6 w-full">
      <div className="flex justify-start">
        <Link
          to="/dashboard/items"
          className={buttonVariants({
            variant: 'outline',
          })}
        >
          <ArrowLeft />
          Go back
        </Link>
      </div>
      {data.ogImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <img
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            src={data.ogImage}
            alt={data.title ?? 'Item image'}
          />
        </div>
      )}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          {data.title ?? 'Untitled'}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {data.author && (
            <span className="inline-flex items-center gap-1">
              <User className="size-3.5" />
              {data.author}
            </span>
          )}
          {data.publishedAt && (
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3.5" />
              {new Date(data.publishedAt).toLocaleDateString('en-US')}
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            Saved {new Date(data.createdAt).toLocaleDateString('en-US')}
          </span>
        </div>
        <a
          href={data.url}
          className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
          target="_blank"
        >
          View Orinal
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </div>
  )
}
