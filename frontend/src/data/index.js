import { categoria as catContato, componentes as compsContato } from "./contato"
import { categoria as catHero, componentes as compsHero } from "./hero"
import { categoria as catCards, componentes as compsCards } from "./cards"
import { categoria as catDuvidas, componentes as compsDuvidas } from "./duvidas"
import { categoria as catHeader, componentes as compsHeader } from "./header"
import { categoria as catFooter, componentes as compsFooter } from "./footer"

export const categorias = [catContato, catHero, catCards, catDuvidas, catHeader, catFooter]
export const componentes = [...compsContato, ...compsHero, ...compsCards, ...compsDuvidas, ...compsHeader, ...compsFooter]