import "./styles/cards.css"

export default function Card({children}) {
    return <div className="card">
        {children}
    </div>
}