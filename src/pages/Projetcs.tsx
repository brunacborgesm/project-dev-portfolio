import travelgram from '../assets/images/travelgram.svg'
import technews from '../assets/images/technews.svg'
import recipe from '../assets/images/recipepage.svg'
import zingen from '../assets/images/zingen.svg'
import refund from '../assets/images/refund.svg'
import tourism from '../assets/images/tourismpage.svg'

import { ProjectCards } from '../components/ProjectCards'

export const Projetcs = () => {
  return (
    <div className='bg-bg-gray h-screen text-center flex flex-col justify-center'>
        <div className='pb-14'>
            <span className='text-red font-Inconsolata text-xl'>Meu trabalho</span>
            <h2 className='font-Asap font-bold text-2xl text-base-gray'>Veja os projetos em destaque</h2>
        </div>

        <div className='grid grid-cols-3 gap-6 w-3/4 mx-auto'>
            <ProjectCards url={ travelgram } alt='Imagem Travelgram' title='Travelgram' description='Rede social onde as pessoas mostram os registros de suas viagens pelo mundo' />

            <ProjectCards url={ technews } alt='Imagem Tech News' title='Tech News' description='Homepage de um portal de notícias sobre a área de tecnologia' />

            <ProjectCards url={ recipe } alt='Imagem Página de receita' title='Página de receita' description='Página com o passo a passo de uma receita para cupcakes' />

            <ProjectCards url={ zingen } alt='Imagem Zingen' title='Zingen' description='Landing Page completa e responsiva de um aplicativo de Karaokê' />

            <ProjectCards url={ refund } alt='Imagem Refund' title='Refund' description='Um sistema para pedido e acompanhamento de reembolso ' />

            <ProjectCards url={ tourism } alt='Imagem Página de turismo' title='Página de turismo' description='Página com as principais informações para quem quer viajar para Busan' />
        </div>
    
    </div>
  )
}
