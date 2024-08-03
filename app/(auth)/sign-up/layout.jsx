import { Children } from "react"
import Provider from "@components/Provider"
const layout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <main>
                        
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}
export default layout;