import "./styles/pageComponents.css"

export function Title({children, style}) {
    return <h1 style={style}>{children}</h1>
}

export function Paragraph({children, style}) {
    return <p style={style}>{children}</p>
}

export function Image({ src, height }) {
    const imageStyle = {
        height: height
    }
    return (
        <img className="image" src={src} style={imageStyle}></img>
    )
}

export function Container({children, style}) {
    return <div className="container" style={style}>{children}</div>
}

export function Button({children}) {
    return <button>{children}</button>
}