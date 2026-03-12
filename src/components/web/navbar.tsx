export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b">
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
          <button className="text-white bg-red-500 px-3 py-1 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}
