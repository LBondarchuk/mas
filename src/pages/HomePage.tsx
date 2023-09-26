import { Baner } from "../components/Baner"
import { BestPrices } from "../components/bestPrices/BestPrices"
import { Footer } from "../components/Footer"
import { Galery } from "../components/galery/Galery"
import { OpeningHours } from "../components/OpeningHours"
import { OurServises } from "../components/servises/OurServises"
import { TypesOfMAssage } from "../components/TypesOfMAssage"

export const HomePage = () => {
  return (
    <main 
    className="home"
    >
 
    <Baner />
    <div className="container">
      <OurServises />
    </div>
      <TypesOfMAssage/>
    <div className="container">
      <OpeningHours />
      <Galery />
      <BestPrices />
    </div>
      
    
    <Footer />
    </main>
  )
}