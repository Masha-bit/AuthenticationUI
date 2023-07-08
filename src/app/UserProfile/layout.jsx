import '../globals.css'

export default function RootLayout({ children }) {
    return (
        <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body className='h-[100vh] w-[100vw] bg-[#b6b3a3] m-0 p-0 flex items-center justify-center font-nunito'>
        {children}            
        </body>
        </html>
    )
  }