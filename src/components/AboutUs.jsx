import team from "../assets/team.jpg"
import "./styles/aboutus.css"

export default function AboutUs() {
    return (
        <div style={
            {
                display: "flex",
                justifyContent: "center",
                height: "70vh",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#3a5fcd"
            }
        }>
            <div className="aboutUs">
                <div className="imgContainer">
                    <img src={team} alt="time" />
                </div>
                <div className="infoContainer">
                    <p>Negócio Inovador</p>
                    <h1 style={
                        { fontSize: "2em" }
                    }>Sobre Nós</h1>
                    <p>Somos a Turma B do 2º RH, responsáveis por desenvolver o projeto. Temos o propósito de reduzir as barreiras do mercado de trabalho tornando esse processo de entrada mais fácil e acessível.</p>
                </div>
            </div>
        </div>
    )
}