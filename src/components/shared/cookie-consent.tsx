'use client'
import * as React from 'react'
import * as AlertDialogPrimitve from '@radix-ui/react-alert-dialog'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'

const CookieConsent = ({ setCookie }: { setCookie: any }) => {
  const [isOpen, setIsOpen] = React.useState(true)

  const handleCookieConsent = () => {
    setCookie()
    setIsOpen(false)
  }

  return (
    <AlertDialogPrimitve.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitve.Portal>
        <AlertDialogPrimitve.Overlay className="fixed inset-0 bg-pink-900 bg-opacity-50 backdrop-blur" />
        <AlertDialogPrimitve.Content className="fixed inset-x-0 bottom-0 z-50 bg-neutral-900 p-4">
          <div className="lg:flex">
            <div className="lg:flex-1">
              <AlertDialogPrimitve.Title className="font-display text-lg font-bold text-white">
                Your Privacy is important to me
              </AlertDialogPrimitve.Title>
              <AlertDialogPrimitve.Description className="mt-4 text-white">
                This website uses cookies to enhance the user experience.
              </AlertDialogPrimitve.Description>
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <AlertDialogPrimitve.Action asChild>
                <Button
                  onClick={() => handleCookieConsent()}
                  size="sm"
                  variant="secondary"
                >
                  Got it
                </Button>
              </AlertDialogPrimitve.Action>

              <AlertDialogPrimitve.Cancel asChild>
                <Button
                  onClick={() => setIsOpen(false)}
                  aria-labelledby="cookie-close"
                >
                  <span id="cookie-close" className="sr-only">
                    Close Cookie consent message
                  </span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </Button>
              </AlertDialogPrimitve.Cancel>
            </div>
          </div>
        </AlertDialogPrimitve.Content>
      </AlertDialogPrimitve.Portal>
    </AlertDialogPrimitve.Root>
  )
}

export { CookieConsent }
