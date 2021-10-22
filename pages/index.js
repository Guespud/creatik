import Navbar from "../components/navbar/Navbar";
import Banner from "../components/body/Banner";
import Contenido from "../components/body/Contenido";
import Redirections from "../components/body/Redirections";
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

export default function Home() {

  return (
    <>
      <Navbar />
      <Banner />
      <Contenido />
      <Redirections/>
      <WhatsAppWidget phoneNumber='3164929123' message="Hola, Tienes Dudas?" companyName="Katherine" textReplyTime="Estoy para ayudarte!!" sendButton="Enviar"/>
    </>
  );
}
