import { useViewTransitionRouter } from '@/hooks/useViewTransitionRouter'

interface TransitionLinkProps {
  href: string | number
  children: React.ReactNode
  className?: string
}

export default function TransitionLink({ href, children, className }: TransitionLinkProps) {
  const navigate = useViewTransitionRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate(href)
  }

  return (
    <a
      href={typeof href === 'string' ? href : '#'}
      onClick={handleClick}
      className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm ${className ?? ''}`}
    >
      {children}
    </a>
  )
}
