import { Navbar } from '#/components/web/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="p-12">
      <Navbar />
      <h1>home page</h1>
    </div>
  )
}
