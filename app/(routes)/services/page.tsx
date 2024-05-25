
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
           <TransitionPage />
           
           <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Desarrollo sitios web y aplicaciones atractivas y funcionales, utilizando las tecnologías más avanzadas como HTML, CSS y JavaScript. Diseño interfaces de usuario intuitivas y responsivas que no solo reflejan la identidad de marca de mis clientes, sino que también mejoran significativamente su presencia en línea.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

               
                <div>
                    <SliderServices />
                </div>
            </div>
            


        </>
    );
};

export default ServicesPage;