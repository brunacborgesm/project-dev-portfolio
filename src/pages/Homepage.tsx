import { TechCards } from "../components/TechCards"

export const Homepage = () => {
    return (
        <div className="bg-bg-home h-screen text-center text-gray-400">
            <div className="pt-20 flex flex-col items-center">
                <div className="">
                    <img src="src/assets/images/profile.svg" alt="foto de perfil" className="rounded-full border-2" />
                </div>

                <p className="text-xl font-Inconsolata pt-14">Hello World! Meu nome é <span className="text-red">Martina Santos</span> e sou</p>
            </div>

            <div>
                <h1 className="text-gray-200 text-6xl font-bold font-Asap pt-2">Desenvolvedora Fullstack</h1>
                <p className="font-Maven text-sm pt-5">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
            </div>

            <div className="flex justify-center gap-4 pt-20">
                <TechCards
                    url="src/assets/icons/github-icon.svg"
                    alt="icone do github"
                    color=""
                    tech="GitHub" />

                <TechCards
                    url="src/assets/icons/html-icon.svg"
                    alt="icone do html"
                    color=""
                    tech="HTML" />

                <TechCards
                    url="src/assets/icons/css-icon.svg"
                    alt="icone do css"
                    color=""
                    tech="CSS" />

                <TechCards
                    url="src/assets/icons/js-icon.svg"
                    alt="icone do javascript"
                    color=""
                    tech="JavaScript" />

                <TechCards
                    url="src/assets/icons/react-icon.svg"
                    alt="icone do react"
                    color=""
                    tech="React" />

                <TechCards
                    url="src/assets/icons/node-icon.svg"
                    alt="icone do nodejs"
                    color=""
                    tech="Node.js" />
            </div>
        </div>
    )
}
