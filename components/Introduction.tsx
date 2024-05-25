"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
        <div className="z-25 grid items-center h-full p-6 py-2 md:py-0 md:grid-cols-2">
            <Image src="/Jo.png" priority width="400" height="400" alt="Yo" />
            <div className="flex flex-col justify-center max-w-md">
                <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Bienvenido a mi portafolio, <br />
                    <TypeAnimation
                        sequence={[
                            'Soy Josting Ramos',
                            1000,
                            'Soy Desarrolador de software',
                            1000,
                            'Soy Yo :)',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                    />
                </h1>

                <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                Soy un recién graduado en Desarrollo de Software
                con una sólida formación académica y una profunda
                pasión por la programación. Mi compromiso con la
                excelencia y encontrar soluciones innovadoras.
                </p>
                <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                    <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                        Ver proyectos
                    </a>
                    <a href="/contact"
                        className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                        Contacta conmigo
                    </a>
                </div>
            </div>
        </div>
    </div>
);
}
export default Introduction;