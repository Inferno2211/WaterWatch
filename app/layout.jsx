import { Children } from "react"

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
                    {children}
                </main>
            </body>
        </html>
    )
}

export default layout