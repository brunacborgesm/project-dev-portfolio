type ContactProps = {
    icon: string,
    label: string,
}

import arrow from '../assets/icons/cta.svg'

export const ContactCards = ({ icon, label }: ContactProps ) => {
  return (
    <div className='flex p-5 rounded-lg justify-between w-4/12 bg-gray-card text-base-gray items-center hover:border hover:border-blue hover:text-blue'>
        <div className='flex flex-row space-x-3'>
            <img className='w-6' src={ icon } />
            <span className='font-Maven'>{ label }</span>
        </div>
        <img src={ arrow } className='w-3' />
    </div>
  )
}