import { Children } from "react"
import '@styles/globals.css'
import Header from '@components/Header'
import Navbar from "@components/Navbar"
import Provider from "@components/Provider"

export const metadata = {
    title: "WaterWatch",
    description: "Womp womp niga"
}

const layout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                    </div>

                    <main className="app">
                        <Header />
                        <div className="flex">
                            <Navbar />
                            {children}
                        </div>
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default layout