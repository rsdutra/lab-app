import { Inter } from 'next/font/google'
import './globals.css'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lab App',
  description: 'A QA Sem teste Lab',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
      </head>
      <body className='bg-body-tertiary'>
        <main role='main' className='main' >
          <Header/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous" />
            {children}
        </main>
      </body>
    </html>
  )
}
