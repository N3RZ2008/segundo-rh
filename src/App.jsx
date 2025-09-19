import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Card from "./components/Card";
import { Title, Paragraph, Container, Image, Button } from './components/pageComponents'
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
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
        <Title style={{
          fontSize: "4rem",
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
        <Container style={{
          padding: "25px", flex: 1
        }}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default App
