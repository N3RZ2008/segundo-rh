import "./styles/cards.css"

export default function Card({icon, title, children}) {
    return <div className="card">
        <div className="cardImg">
            {icon}
        </div>
        <div className="cardTitle">{title}</div>
        {children}
    </div>
}