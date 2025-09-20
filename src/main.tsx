import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import './config/i18n/i18nConfig.js';
import {CssBaseline, CssVarsProvider} from "@mui/joy";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CssVarsProvider defaultMode={"light"}>
            <CssBaseline/>
            <App/>
        </CssVarsProvider>
    </StrictMode>,
)
