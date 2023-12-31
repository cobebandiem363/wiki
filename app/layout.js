'use client'
import '@/styles/all.scss'

//Layout
import Login from '@/components/login/Login'
import Header from '@/components/header/Header'

import { useState, useEffect } from 'react';

export default function RootLayout({ children }) {

  const [opened, setOpened] = useState(true);

  // handle close popup use key ESC
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpened(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <html>

      <body>
        <Header opened={opened} setOpened={setOpened} />
        {
          opened &&
          <Login opened={opened} setOpened={setOpened} />
        }

        {children}
      </body>
    </html>
  )
}
