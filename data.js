const places = [
    {
        id: "la-pinche", 
        name: "La Pinche Cantina", 
        category: ["Restaurant", "Bar"],
        hours: [
            { day: "Sunday", open: true, start: "12:00", end: "03:00"},
            { day: "Monday", open: true, start: "12:00", end: "03:00"},
            { day: "Tuesday", open: true, start: "12:00", end: "03:00"},
            { day: "Wednesday", open: true, start: "12:00", end: "03:00"},
            { day: "Thursday", open: true, start: "12:00", end: "04:00"},
            { day: "Friday", open: true, start: "12:00", end: "04:00"},
            { day: "Saturday", open: true, start: "12:00", end: "04:00"},
        ],
        whatsapp: "+507 6394-5350",
        instagram: "@la.pinchecantina",
        description: {en: "A place to sing karaoke", es: "Un lugar para cantar karaoke"},
        
    },
    {
        id: "tantalo", 
        name: "Tantalo: Rooftop Bar", 
        category: ["Restaurant", "Bar"],
        hours: [
            { day: "Sunday", open: true, start: "12:00", end: "02:00"},
            { day: "Monday", open: true, start: "12:00", end: "02:00"},
            { day: "Tuesday", open: true, start: "12:00", end: "02:00"},
            { day: "Wednesday", open: true, start: "12:00", end: "02:00"},
            { day: "Thursday", open: true, start: "12:00", end: "04:00"},
            { day: "Friday", open: true, start: "12:00", end: "04:00"},
            { day: "Saturday", open: true, start: "12:00", end: "04:00"},
        ],
        whatsapp: "+507 6394-5350",
        instagram: "@tantalohotel",
        description: {en: "A place to dance", es: "Un lugar para bailar"},
        
    },
    {
        id: "oku", 
        name: "Oku", 
        category: ["Restaurant"],
        hours: [
            { day: "Sunday", open: true, start: "14:00", end: "00:00"},
            { day: "Monday", open: true, start: "17:00", end: "00:00"},
            { day: "Tuesday", open: true, start: "17:00", end: "00:00"},
            { day: "Wednesday", open: true, start: "17:00", end: "00:00"},
            { day: "Thursday", open: true, start: "17:00", end: "00:00"},
            { day: "Friday", open: true, start: "14:00", end: "00:00"},
            { day: "Saturday", open: true, start: "14:00", end: "00:00"},
        ],
        whatsapp: "+507 6944-4987",
        instagram: "@okupanama",
        description: {en: "A place to eat good sushi", es: "Un lugar para comer buen sushi"},
        
    },
    {
        id: "catch", 
        name: "Catch", 
        category: ["Restaurant", "Bar"],
        hours: [
            { day: "Sunday", open: true, start: "14:00", end: "00:00"},
            { day: "Monday", open: true, start: "17:00", end: "00:00"},
            { day: "Tuesday", open: true, start: "17:00", end: "00:00"},
            { day: "Wednesday", open: true, start: "17:00", end: "00:00"},
            { day: "Thursday", open: true, start: "17:00", end: "00:00"},
            { day: "Friday", open: true, start: "14:00", end: "00:00"},
            { day: "Saturday", open: true, start: "14:00", end: "00:00"},
        ],
        whatsapp: "+507 6694-8641",
        instagram: "@catchpanama",
        description: {en: "A place to eat good sushi", es: "Un lugar para comer buen sushi"},
        
    },
    {
        id: "salty-sisters", 
        name: "Salty Sisters", 
        category: ["Restaurant"],
        hours: [
            { day: "Sunday", open: false },
            { day: "Monday", open: true, start: "12:00", end: "22:00"},
            { day: "Tuesday", open: true, start: "12:00", end: "22:00"},
            { day: "Wednesday", open: true, start: "12:00", end: "22:00"},
            { day: "Thursday", open: true, start: "12:00", end: "22:00"},
            { day: "Friday", open: true, start: "12:00", end: "22:00"},
            { day: "Saturday", open: true, start: "12:00", end: "22:00"},
        ],
        whatsapp: "+507 6594-8852",
        instagram: "@saltysisterspanama",
        description: {en: "Eat Pinsa not Pizza", es: "Come Pinsa no Pizza"},
        
    },
    
];

const events = [
    {
        id: "karaoke",
        placeId: "la-pinche",
        title: "Karaoke Night",
        date: "2026-11-11",
        start: "20:00",
        end: "02:00",
        description: {en: "Fun karaoke night at La Pinche Cantina", es: "Noche divertida de karaoke en La Pinche cantina"},
        approved: true,
    },
    {
        id: "2x1",
        placeId: "oku",
        title: "2x1 Margaritas",
        date: "2026-11-11",
        start: "20:00",
        end: "00:00",
        description: {en: "2x1 Margaritas for all the ladies", es: "2x1 Margaritas para todas las damas"},
        approved: false,
    },
    {
        id: "salsa-night",
        placeId: "tantalo",
        title: "Salsa Night",
        date: "2026-10-24",
        start: "20:00",
        end: "02:00",
        description: {en: "Come dance some salsa", es: "Ven y baile al ritmo de la salsa"},
        approved: true,
    },
]

