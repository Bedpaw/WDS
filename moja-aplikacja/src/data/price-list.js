
class EntryPass {

  constructor(quantity,price) {
    this.quantity = quantity
    this.price = price
  }
}



export const passes = [
  {
    name: 'aktorstwo, klasyka, współczesny, jazz, step, akrobatyka sceniczna:',
    alerts: '',
    entries: [
        new EntryPass(4, 170),
        new EntryPass(8, 320),
        new EntryPass(12, 450),
        new EntryPass(16, 580),
        new EntryPass(20, 700),
        new EntryPass(24, 800)
    ]
  },
  {
    name: 'Salsa, zouk',
    alerts: '',
    entries: [
      new EntryPass(4, 160),
      new EntryPass(8, 290),
    ]
  },
  {
    name: 'Wokal grupowy',
    alerts: 'UWAGA! Dla uczniów indywidualnych Marty cena 40zł!',
    entries: [
      new EntryPass(4, 120),
    ]
  },
  {
    name: 'OPEN',
    alerts: '',
    entries: [
      new EntryPass(0, 850),
    ]
  },


]

