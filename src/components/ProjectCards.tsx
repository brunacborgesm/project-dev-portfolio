type ProjectProps = {
    url: string,
    alt: string,
    title: string,
    description: string,
}

export const ProjectCards = ({ url, alt, title, description }: ProjectProps ) => {
  return (
    <div className='bg-gray-card rounded-xl text-base-gray'>
        <div className='p-3 text-left'>
            <img src={ url } alt={ alt } className="mb-5 rounded-lg"/>
            <h3 className='font-Asap font-bold'>{ title }</h3>
            <p className='font-Maven pt-2 text-sm'>{ description }</p>
        </div>
    </div>
  )
}
