import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Card from "./components/Card";
import { Title, Paragraph, Container, Image, Button } from './components/pageComponents'
import { SmileIcon, VideoIcon, WalkIcon } from './components/icons';
import "./components/styles/cards.css"

function App() {

  return (
    <>
      <Menu />
      <Container style={
        { "height": "60vh", "alignItems": "center", padding: "2vw" }
      }>
        <Container style={
          { flexDirection: 'column' }
        }>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
          <Title style={{
            fontSize: "4rem",
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
          <Container>
            <Button>Lorem Ipsum</Button>
            <Button>Lorem Ipsum</Button>
          </Container>
        </Container>
        <Container style={{
          "height": "100%"
        }}>
          <Image src="https://www.fmt.se/wp-content/uploads/2023/02/logo-placeholder-image.png" height={"50vh"}></Image>
        </Container>
      </Container>
      <div className="cardsPage">
        <Title style={{
          fontSize: "2rem",
        }}>OS MELHORES SERVIÇOS DO MERCADO PARA VOCÊ E SEU NEGÓCIO</Title>
        <Title style={{
          fontSize: "4rem",
        }}>TEMOS SOLUÇÕES.</Title>
        <Container style={{
          padding: "25px", flex: 1
        }}>
          <Card 
          title="Aprimore suas Habilidades Socioemocionais"
          icon={<SmileIcon/>}>
            Aprenda a entender e gerenciar suas emoções, a se comunicar com mais clareza e a construir relacionamentos mais saudáveis. Nossas ferramentas e atividades são criadas para te ajudar a desenvolver habilidades como empatia, resiliência e autoconhecimento, que são fundamentais tanto na vida pessoal quanto profissional. 
          </Card>
          <Card 
          title="Cursos e Aulas Informativas"
          icon={<VideoIcon/>}>
            Navegue por uma vasta biblioteca de conteúdos criados por especialistas. Nossos cursos e aulas abordam temas como direitos celetistas, inteligência emocional e comunicação não violenta, de forma prática e acessível. Você terá acesso a informações valiosas para aplicar no seu dia a dia e se sentir mais preparado para os desafios do mercado de trabalho. 
          </Card>
          <Card 
          title="Atendimento Pessoal"
          icon={<WalkIcon/>}>
            Sabemos que cada jornada é única. Por isso, oferecemos a possibilidade de atendimento com profissionais dedicados para te guiar e tirar suas dúvidas de forma individual. Conte com o apoio de quem entende do assunto para traçar um caminho de desenvolvimento personalizado e focado nas suas necessidades. 
          </Card>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default App
