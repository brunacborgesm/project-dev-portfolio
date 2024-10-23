import websites from '../assets/icons/websites-icon.svg'
import api from '../assets/icons/api-icon.svg'
import devops from '../assets/icons/devops-icon.svg'

import { ServicesCards } from '../components/ServicesCards'

export const Services = () => {
    return (
        <div className='bg-dark-gray text-base-gray flex flex-col justify-center py-28'>
            <div className='text-center mx-auto'>
                <span className='font-Inconsolata text-lg text-red'>Meus serviços</span>
                <h3 className='font-Asap font-bold text-2xl pt-4'>Como posso ajudar o seu negócio</h3>


                <div className='grid grid-cols-3 gap-6 pt-14'>
                    <ServicesCards icon={ websites } alt=' icone de websites' title='Websites e Aplicativos' description='Desenvolvimento de interfaces' />

                    <ServicesCards icon={ api } alt='icone de api' title='API e banco de dados' description='Criação de serviços do sistema ' />

                    <ServicesCards icon={ devops } alt='icone de devops' title='DevOps' description='Gestão e infraestrutura da aplicação' />
                </div>

            </div>
        </div>
    )
}
