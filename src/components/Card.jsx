import "./styles/cards.css"

export default function Card({icon, children}) {
    return <div className="card">
        <div className="cardImg">
            {icon}
        </div>
        {children}
    </div>
}