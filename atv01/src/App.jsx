import Footer from './components/Footer.jsx'
import Header from './components/header.jsx'
import MainContent from './components/MainContent.jsx'
import {ClickButton, InputFields, KeyDownComponent, FocusBlurComponent, HoverComponent} from './components/Events.jsx'
import Challenge from "./components/Challenge.jsx"
import UserDetails from "./components/UserDetails.jsx"

let pessoa1 = {
  nome: "Guilherme",
  idade: 18,
  profissao: "dev"
}

function App() {

  return (
    <>
      <Header/>
      <MainContent name="WOW" idade={2002} />
      <UserDetails nome={pessoa1.nome} idade={pessoa1.idade} profissao={pessoa1.profissao}/>
      <Footer/>
      <ClickButton/>
      <InputFields/>
      <KeyDownComponent/>
      <FocusBlurComponent/>
      <HoverComponent/>
      <Challenge/>
    </>
  )
}

export default App
