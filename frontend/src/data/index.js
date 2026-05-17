import { categoria as catContato, componentes as compsContato } from "./contato"
import { categoria as catHero, componentes as compsHero } from "./hero"

export const categorias = [catContato, catHero]
export const componentes = [...compsContato, ...compsHero]