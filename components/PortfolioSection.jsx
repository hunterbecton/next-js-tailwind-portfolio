import Image from 'next/image';

export const PortfolioSection = ({
  title,
  logo,
  description,
  technologies,
  links,
  color,
}) => {
  return (
    <section>
      <header
        className='flex justify-between pt-10 pl-10 pr-10 lg:pt-20 lg:pl-20 lg:pr-20'
        style={{ backgroundColor: color }}
      >
        <h2 className='mb-1 self-end font-serif text-2xl text-zinc-50 sm:text-3xl md:mb-2 lg:text-4xl'>
          {title}
        </h2>
        <div className='flex h-32 w-32 items-center justify-center bg-zinc-900'>
          <div className='relative h-10 w-10'>
            <Image src={logo} alt={title} layout='fill' objectFit='contain' />
          </div>
        </div>
      </header>
      <div className='grid grid-cols-7 gap-8 bg-zinc-800 p-10 lg:p-20'>
        <div className='col-span-7 flex max-w-xl flex-col lg:col-span-3'>
          <h3 className='mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50'>
            Description
          </h3>
          <p className='text-sm text-zinc-400'>{description}</p>
        </div>
        <div className='col-span-7 flex max-w-xl flex-col lg:col-span-2'>
          <h3 className='mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50'>
            Technologies
          </h3>
          <ul className='list-none space-y-1'>
            {technologies.map((tech) => (
              <li key={tech} className='text-sm text-zinc-400'>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className='col-span-7 flex max-w-xl flex-col lg:col-span-2'>
          <h3 className='mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50'>
            Links
          </h3>
          <ul className='list-none space-y-1'>
            {links.map((link) => (
              <li key={link.text} className='text-sm' style={{ color }}>
                <a
                  href={link.href}
                  className='hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
