import { useViewTransitionRouter } from '@/hooks/useViewTransitionRouter'

interface TransitionLinkProps {
  href: string
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
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
