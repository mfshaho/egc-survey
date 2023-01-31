import './globals.css'
import { Header, Footer } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='bg-lighter text-dark dark:bg-darker dark:text-light'>
        <div className='flex justify-center'>
          <div className='flex flex-col px-5'>
            <Header/>
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
