import { Children } from "react"
import '@styles/globals.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
// import '@components/Provider'

export const metadata = {
    title: "WaterWatch",
    description: "Womp womp niga"
}

const layout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                </div>

                <main className="app">
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default layout