import { BookText, CodeSquare, HomeIcon, UserRound, Instagram, Linkedin, Twitter, Rss, Twitch, Youtube, Github, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/josting-ramos-257a73146/",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/jou_1211/",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Josting12",
    },
    

    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Licenciado En Ingieneria con especialización en Desarrollo de Software",
        subtitle: "UTP",
        description: "",
        date: "Dic 2024 ",
    },
    {
        id: 2,
        title: "Tecnico En Ingieneria con especialización en Desarrollo de Software.",
        subtitle: "UTP",
        description: "",
        date: "Jul 2023",
    },
    {
        id: 3,
        title: "Soporte tecnico Practica Profesional",
        subtitle: "PayPro",
        description: "Tuve la oportunidad de hacer mi practica profesional como soporte tecnico y aprendiendo otras habilidades en el departamento de informatica.",
        date: "Ene 2020",
    },
    {
        id: 4,
        title: "Graduado en bachiller informatica",
        subtitle: "Colegio Ingeneniero Tomas Guardia.",
        description: "        ",
        date: "Dic 2019",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años Programando",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 6,
        text: "Lenguajes aprendidos ",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 8,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 3,
        text: "Aplicaciones moviles",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Diseño Web",
        description: "Creación de interfaces visualmente atractivas y fáciles de usar que mejoran la experiencia del usuario.",
    },
    {
        icon: <Pencil />,
        title: "Desarrollo Responsivo",
        description: "Adaptación de sitios web para que funcionen perfectamente en dispositivos móviles, tabletas y desktops.",
    },
    {
        icon: <Computer />,
        title: "E-commerce",
        description: "Desarrollo y configuración de tiendas en línea seguras y eficientes, con pasarelas de pago integradas p.",
    },
    {
        icon: <Book />,
        title: "Desarrollo Web",
        description: "Creación de aplicaciones web interactivas y dinámicas que cumplen con las necesidades específicas de tu negocio",
    },
    {
        icon: <Rocket />,
        title: "Mantenimiento y Soporte",
        description: "Servicios de mantenimiento continuo para asegurar que tu sitio web funcione sin problemas .",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "ScriptRaptor",
        image: "/Script.png",
        urlGithub: "https://gitlab.com/NelsonRodriguez7/portafolio-web",
        urlDemo: "https://portafolio-web-nelsonrodriguez7.vercel.app/",
    },
    {
        id: 2,
        title: "Colores con IA",
        image: "/Colores.png",
        urlGithub: "https://github.com/Josting12/Formulario-con-IA",
        urlDemo: "",
    },
    {
        id: 3,
        title: "Netflix ",
        image: "/Netflix.png",
        urlGithub: "https://github.com/Josting12/Netflixjs ",
        urlDemo: "https://netflixjs-kouwtho5n-josting12.vercel.app/",
    },
    {
        id: 4,
        title: "Portafolio",
        image: "/porta.png",
        urlGithub: "https://github.com/Josting12/Portfolio",
        urlDemo: "https://jostingramos-portfolio.netlify.app",
    },
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/Jou.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];