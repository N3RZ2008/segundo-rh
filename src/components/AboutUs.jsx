import { Title, Paragraph, Container, Image, Button } from "./pageComponents"
import team from "../assets/team.jpg"

export default function AboutUs() {
    return (
        <>
            <Container style={
                { minHeight: "60vh", "alignItems": "center", padding: "2vw", marginTop: "100px", }
            }>
                <Container style={
                    { flexDirection: "column" }
                }>
                    <Container style={
                        {flexDirection: "column", marginBottom: "20px",}
                    }>
                        <Title style={{
                            fontSize: "4rem",
                        }}>Quem Somos</Title>
                        <Paragraph>Capacita Aí é mais do que um projeto, é uma ponte para o seu futuro</Paragraph>
                    </Container>
                    <Paragraph>
                        Nascemos da iniciativa de alunos do segundo ano do ensino médio com formação técnica em Recursos Humanos, que notaram um desafio comum entre os jovens: a dificuldade de se inserir no mercado de trabalho. Percebemos que as competências exigidas pelas empresas vão muito além do que se aprende na escola tradicional, e é aí que entramos. Nossa missão é preparar você para essa jornada, ensinando as habilidades essenciais que fazem a diferença na hora de conseguir um emprego e de se destacar nele.
                    </Paragraph>
                    <Paragraph>
                        Nós acreditamos no poder da inteligência emocional, da comunicação eficaz, do trabalho em equipe e da resiliência. São essas competências, muitas vezes ignoradas, que definem o sucesso profissional e pessoal. Com o Capacita Aí, oferecemos uma plataforma onde esses conhecimentos são acessíveis, práticos e relevantes para a sua realidade. Nosso objetivo é que você não apenas entre no mercado de trabalho, mas que prospere nele, com a confiança e as ferramentas certas para construir a carreira que sempre sonhou.
                    </Paragraph>
                    <Paragraph>
                        Nossos valores guiam cada passo do projeto. A inovação nos impulsiona a criar conteúdos envolventes e adaptados às novas tecnologias. A empatia nos faz entender suas dúvidas e desafios, construindo um ambiente de aprendizado acolhedor. A qualidade é nosso compromisso, garantindo que cada informação seja precisa e útil. E a acessibilidade é a nossa promessa, para que todos tenham a oportunidade de se desenvolver, sem barreiras. No Capacita Aí, estamos juntos nessa jornada, transformando o potencial em realidade.
                    </Paragraph>
                </Container>
                <Container style={{
                    "height": "100%", alignContent: "center"
                }}>
                    <Image src={team}></Image>
                </Container>
            </Container>
            <Container style={
                { "height": "5vh" }
            } />
        </>
    )
}