import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github-contact-icon.svg'
import email from '../assets/icons/email-icon.svg'
import { ContactCards } from '../components/ContactCards'

export const Contact = () => {
  return (
    <div className='bg-bg-end bg-center bg-cover h-screen mx-auto text-center py-32'>
        <div className='text-base-gray pb-14'>
            <span className='text-lg font-Inconsolata text-purple'>Contato</span>
            <h3 className='font-Asap text-2xl font-bold'>Gostou do meu trabalho? </h3>
            <p className='font-Maven'>Entre em contato ou acompanhe as minhas redes sociais!</p>
        </div>

        <div className='flex flex-col gap-3 items-center'>
            <ContactCards icon={ linkedin } label='Linkedin' />
            <ContactCards icon={ instagram } label='Instagram' />
            <ContactCards icon={ github } label='GitHub' />
            <ContactCards icon={ email } label='E-mail' />
        </div>
    </div>
  )
}
