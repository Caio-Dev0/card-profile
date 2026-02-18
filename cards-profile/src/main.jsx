
import { createRoot } from 'react-dom/client'
import './card.css'
import Card from './card.jsx'

createRoot(document.getElementById('root')).render(
    <Card nome="carlos" profissao="programador" cidade="Porto Rico" skills={["php", ".net", "angular"]} disponivel={true} />
)
