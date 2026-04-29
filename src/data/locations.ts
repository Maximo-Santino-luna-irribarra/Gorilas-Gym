export interface Location {
  id: number;
  name: string;
  address: string;
  schedule: {
    weekdays: string;
    saturdays: string;
    sundays?: string;
    holidays: string;
  };
  whatsapp: string;
  instagram: string;
  googleMaps: string;
}

export const locations: Location[] = [
  {
    id: 1,
    name: "Gorillas Gym Vernet",
    address: "Avenida Luis Vernet 2826, Monte Grande",
    schedule: {
      weekdays: "07:30 a 21:30",
      saturdays: "10:00 a 16:00",
      holidays: "10:30 a 18:00"
    },
    whatsapp: "541139552034",
    instagram: "https://www.instagram.com/gorillasgym.vernet/",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Avenida+Luis+Vernet+2826+Monte+Grande"
  },
  {
    id: 2,
    name: "Gorillas Gym Ezeiza",
    address: "Diego Laure 150, Ezeiza",
    schedule: {
      weekdays: "07:00 a 21:30",
      saturdays: "10:00 a 17:00",
      sundays: "15:00 a 19:30",
      holidays: "8:00 a 19:00"
    },
    whatsapp: "541136035835",
    instagram: "https://www.instagram.com/gorillasgym.ezeiza/",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Diego+Laure+150+Ezeiza"
  },
  {
    id: 3,
    name: "Gorillas Gym Zuviría",
    address: "Av. Vernet y Zuviria, Monte Grande",
    schedule: {
      weekdays: "07:00 a 22:00",
      saturdays: "10:00 a 17:00",
      holidays: "09:00 a 18:00"
    },
    whatsapp: "541128814887",
    instagram: "https://www.instagram.com/gorillasgym.zuviria/",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Av+Vernet+y+Zuviria+Monte+Grande"
  }
];