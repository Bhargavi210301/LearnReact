import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom APP!</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Click to visit google</a>
)

createRoot(document.getElementById('root')).render(
    <App />
    // MyApp()
    // <MyApp/>
    // anotherElement
)
