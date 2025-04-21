import { Link } from '@tanstack/react-router'

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="p-2 space-y-2">
      <div className="text-gray-600 dark:text-gray-400">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p className="flex flex-wrap gap-2 items-center">
        <button
          onClick={() => window.history.back()}
          className="text-sm text-white font-black px-2 py-1 rounded bg-emerald-500 uppercase"
        >
          Go back
        </button>
        <Link
          to="/"
          className="text-sm text-white font-black px-2 py-1 rounded bg-cyan-600 uppercase"
        >
          Start Over
        </Link>
      </p>
    </div>
  )
}
