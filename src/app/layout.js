import cn from "classnames"
import { Inter } from 'next/font/google'
import { useSelector } from 'react-redux'
import './globalStyles.scss'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'ToDo app with Next.js',
}

export default function RootLayout({ children }) {

  // const theme = useSelector((state) => state.toDoPage.theme);

  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  )
}
