import { CustomPortableText } from '~/components/shared/custom-portable-text'
import { Header } from '~/components/shared/header'
import ScrollUp from '~/components/shared/scroll-up'
import type { PagePayload } from '~/types'

export function Page({ data }: { data: PagePayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data || {}

  return (
    <div className="container">
      <div className="mb-14">
        {/* Header */}
        <Header title={title} description={overview} />

        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-sans text-neutral-700 dark:text-white lg:text-lg"
            value={body}
          />
        )}

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}
