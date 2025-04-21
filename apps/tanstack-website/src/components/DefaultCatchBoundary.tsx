import type { ErrorComponentProps } from '@tanstack/react-router'
import {
  ErrorComponent,
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from '@tanstack/react-router'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()
  const isRoot = useMatch({
    strict: false,
    select: state => state.id === rootRouteId,
  })

  console.error('DefaultCatchBoundary Error:', error)

  return (
    <div className="p-4 flex flex-1 flex-col gap-6 min-w-0 items-center justify-center">
      <ErrorComponent error={error} />
      <div className="flex flex-wrap gap-2 items-center">
        <button
          onClick={() => {
            router.invalidate()
          }}
          className="text-white font-extrabold px-2 py-1 rounded bg-gray-600 uppercase dark:bg-gray-700"
        >
          Try Again
        </button>
        {isRoot
          ? (
              <Link
                to="/"
                className="text-white font-extrabold px-2 py-1 rounded bg-gray-600 uppercase dark:bg-gray-700"
              >
                Home
              </Link>
            )
          : (
              <Link
                to="/"
                className="text-white font-extrabold px-2 py-1 rounded bg-gray-600 uppercase dark:bg-gray-700"
                onClick={(e) => {
                  e.preventDefault()
                  window.history.back()
                }}
              >
                Go Back
              </Link>
            )}
      </div>
    </div>
  )
}
