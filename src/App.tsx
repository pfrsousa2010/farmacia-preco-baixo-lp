import Benefits from "./components/Benefits"
import Contact from "./components/Contact"
import Delivery from "./components/Delivery"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Hours from "./components/Hours"
import Payment from "./components/Payment"
import Products from "./components/Products"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Delivery />
        <Payment />
        <Products />
        <Hours />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
