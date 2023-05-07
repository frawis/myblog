import Link from 'next/link'
import { MobileNav } from '~/components/shared/mobile-nav'
import { ThemeSwitcher } from '~/components/shared/theme-switcher'
import { getSettings } from '~/sanity/lib/sanity.client'
import { getPreviewToken } from '~/sanity/lib/sanity.server.preview'

const itemsSample = [
  {
    _key: '1',
    title: 'Home',
    link: '/',
  },
  {
    _key: '2',
    title: 'About',
    link: '/about',
  },
  {
    _key: '3',
    title: 'Blog',
    link: '/blog',
  },
]

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = getPreviewToken()
  const settings = (await getSettings({ token })) || {
    menuItems: [],
    footer: [],
  }
  const year = new Date().getFullYear()

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="bg-white dark:bg-neutral-950 md:pt-4">
        <div className="border-b border-neutral-950 dark:border-white/100 md:border-t">
          <div className="lg:container">
            <div className="flex items-start">
              <div className="inline-flex h-12 items-center border-r border-neutral-950 px-6 pl-4 dark:border-white/100 lg:h-16 lg:pl-0">
                <Link
                  href="/"
                  className="font-display text-2xl font-bold text-neutral-950 transition-all duration-300 hover:animate-pulse hover:text-pink-500/90 dark:text-white lg:text-3xl"
                >
                  frasty
                </Link>
              </div>
              <div className="flex w-full justify-end lg:justify-start lg:pl-6">
                <div className="hidden h-12 space-x-6 lg:flex lg:h-16 lg:flex-1 lg:items-center">
                  {itemsSample.map((item) => (
                    <div key={item._key}>
                      <Link
                        href={item.link}
                        className="inline-flex rotate-1 transform border border-b-2 border-r-2 border-black/90 bg-green-500/80 px-4 py-1 font-medium text-black shadow-[3px_3px_black] shadow-pink-200/20 transition-all duration-300 ease-in-out hover:-rotate-1 hover:border-b hover:border-r hover:border-black/70 hover:bg-green-500/100 hover:shadow-pink-200/40"
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center space-x-4 lg:h-16 lg:space-x-0">
                  <ThemeSwitcher />
                  <MobileNav className="lg:hidden" menuItems={itemsSample} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>

      <footer
        aria-labelledby="footer-heading"
        className="bg-white dark:bg-neutral-950"
      >
        <div className="absolute left-0 w-screen border-t border-neutral-950 dark:border-white" />
        <h2 className="sr-only" id="footer-heading">
          Footer
        </h2>
        <div className="mx-auto p-8 2xl:max-w-7xl 2xl:px-0">
          <div className="h-full space-y-8 rounded-3xl lg:space-y-16">
            <div>
              <div className="w-full justify-between space-y-3 lg:inline-flex lg:items-center lg:space-y-0">
                <div>
                  <p className="text-sm text-neutral-950 dark:text-white">
                    <span className="font-display font-bold">frasty</span> -{' '}
                    <span>© Copyright {year} All rights reserved.</span>
                  </p>
                </div>
                <div>
                  <nav className="flex space-x-6">
                    <Link
                      href="/imprint"
                      className="inline-flex text-neutral-950 hover:text-pink-500 dark:text-white"
                    >
                      Imprint
                    </Link>
                  </nav>
                </div>
                <div>
                  <div className="flex space-x-6 md:order-2">
                    <a
                      className="text-neutral-950/80 hover:text-pink-600/90 dark:text-white/80"
                      href="https://www.twitter.com/frasty"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Twitter</span>{' '}
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 lg:h-8 lg:w-8"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>{' '}
                    </a>
                    <a
                      className="text-neutral-950/80 hover:text-pink-600/90 dark:text-white/80"
                      href="https://github.com/frawis"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">GitHub</span>{' '}
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 lg:h-8 lg:w-8"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
