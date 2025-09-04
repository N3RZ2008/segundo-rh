import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import { Title, Paragraph, Container, Image, Button } from './components/pageComponents'

function App() {

  return (
    <>
      <Menu/>
      <Container style={
        {"height":"60vh","alignItems":"center", padding: "2vw"}
      }>
        <Container style={
          {flexDirection: 'column'}
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
    </>
  )
}

export default App
