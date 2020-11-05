
class event {
  constructor(time, name, teacher) {
    this.time = time
    this.name = name
    this.teacher = teacher
  }
}
export const timeTable = [
  { name: 'PONIEDZIAŁEK',
    events: [
      new event("16.30 - 17.45", "step", "Emilia Witowska" ),
      new event("18.30 - 20.00", "aktorstwo", "Grzegorz Wolf"),
    ]
  },
  { name: 'WTOREK',
    events: [
      new event("17.00 - 17.45", "balet z muzyką na żywo (8-12 lat)", "Aleksandra Foltman" ),
      new event("17.45 - 19.00", "taniec klasyczny z muzyką na żywo (16+)", "Aleksandra Foltman"),
      new event("19.30 - 20.30", "akrobatyka sceniczna", "Szymon Sztukowski"),
    ]
  },
  { name: 'ŚRODA',
    events: [
      new event("18.00 - 19.15", "taniec współczesny (gr. początkująca)", "Andrzej Morawiec" ),
      new event("19.30 - 20.45", "taniec współczesny (gr. zaawansowana)", "Andrzej Morawiec" ),
      new event("21.00 - 22.00", "salsa pary plus single (18+)", "Piotr Burba" ),
    ]
  },
  { name: 'CZWARTEK',
    events: [
      new event("16.30 - 17.45", "jazz", "Mateusz Pietrzak" ),
      new event("18.00 - 19.15", "jazz", "Mateusz Pietrzak" ),
    ]
  },
  { name: 'PIĄTEK',
    events: [
      new event("16.15 - 17.30", "wokal grupowy", "Renia Gosławska" ),
      new event("17:45 - 19:00", "choreo - wokal", "Luis Eduardo Granado" ),
      new event("19.15 - 20.30", "dance open", "Luis Eduardo Granado" ),
    ]
  },
]
