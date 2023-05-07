import { CustomPortableText } from '~/components/shared/custom-portable-text'
import { cn } from '~/lib/utils'
import { ScribbleGraphic } from '../graphics/scribble'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={`${centered ? 'text-center' : 'lg:w-3/5'}`}>
      {/* Title */}
      {title && (
        <div className="relative mt-4 pb-8 lg:pb-16">
          <div
            className={cn(
              'bg-gradient-to-r from-pink-600/90 via-pink-500/95 to-pink-700/95 bg-clip-text font-display text-3xl font-extrabold text-transparent dark:from-pink-400/90 dark:via-pink-400/95 dark:to-pink-600/95 md:text-5xl',
              centered ? 'rotate-2' : 'rotate-0'
            )}
          >
            {title}
          </div>
          <div
            className={cn(
              'mt-4 flex text-green-600 dark:text-green-500 lg:mt-8',
              centered
                ? '-rotate-1 justify-center lg:ml-52'
                : 'rotate-2 justify-start'
            )}
          >
            <ScribbleGraphic />
          </div>
        </div>
      )}
      {/* Description */}
      {description && (
        <div
          className={cn(
            'mb-8 mt-4 text-neutral-950 dark:text-white md:text-lg lg:text-xl',
            centered ? 'mx-auto max-w-3xl' : null
          )}
        >
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
