import React from 'react'
import Herramienta from '../components/body/Herramienta'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const Informacion = () => {
    return (
        <div>
            <Herramienta/>
            <WhatsAppWidget phoneNumber='3164929123' message="Hola, Tienes Dudas?" companyName="Katherine" textReplyTime="Estoy para ayudarte!!" sendButton="Enviar"/>
        </div>
    )
}

export default Informacion
