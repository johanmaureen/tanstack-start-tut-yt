import { Link } from '@tanstack/react-router'
import { Button, buttonVariants } from '../ui/button'
import { ThemeToggle } from './theme-toggle'
import { authClient } from '#/lib/auth-client'
import { toast } from 'sonner'

export function Navbar() {
  const { data: session, isPending } = authClient.useSession()

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Signed out successfully')
        },
        onError: ({ error }) => {
          toast.error(error.message)
        },
      },
    })
  }

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img
            src="https://tanstack.com/images/logos/logo-color-banner-600.png"
            alt="Tanstack Start Logo"
            className="size-9"
          />
          <h1 className="text-lg font-semibold">TanStack Start</h1>
        </div>
        <div className="flex items-center gap-3">
          {isPending ? null : session ? (
            <>
              <Button onClick={handleSignOut}>Logout</Button>
              <Link
                to="/dashboard"
                className={buttonVariants({ variant: 'outline' })}
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={buttonVariants({ variant: 'outline' })}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={buttonVariants({ variant: 'secondary' })}
              >
                Get started
              </Link>
            </>
          )}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
