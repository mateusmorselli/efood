class Cardapio {
  rate: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    rate: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.rate = rate
  }
}

export default Cardapio
