type ServicesProps = {
    icon: string,
    alt: string,
    title: string,
    description: string,
}

export const ServicesCards = ( { icon, alt, title, description }: ServicesProps ) => {
  return (
    <div className="text-left border-2 border-bg-gray border-opacity-50 rounded-xl p-5">
        <img src={ icon } alt={ alt } />
        <h3 className="font-Asap font-bold pt-6">{ title }</h3>
        <p className="pt-2">{ description }</p>
    </div>
  )
}
