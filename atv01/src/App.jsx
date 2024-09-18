import Footer from './components/Footer.jsx'
import Header from './components/header.jsx'
import MainContent from './components/MainContent.jsx'
import {ClickButton, InputFields, KeyDownComponent, FocusBlurComponent, HoverComponent} from './components/Events.jsx'
import Challenge from "./components/Challenge.jsx"
function App() {

  return (
    <>
      <Header/>
      <MainContent/>
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
