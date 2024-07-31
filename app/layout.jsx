import { Children } from "react"
import '@styles/globals.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
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
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default layout