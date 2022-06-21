import Image from 'next/image';

export const About = ({
  profile,
  profileAlt,
  subtitle,
  title,
  description,
  technologies,
  quickLinks,
}) => {
  return (
    <section className='bg-zinc-800 p-10 lg:p-20'>
      <header className='flex w-full flex-wrap'>
        <div className='relative mr-8 mb-8 h-32 w-32'>
          <Image
            src={profile}
            alt={profileAlt}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div>
          <p className='mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-400'>
            {subtitle}
          </p>
          <h1 className='font-serif text-4xl text-zinc-50 lg:text-6xl'>
            {title}
          </h1>
        </div>
      </header>
      <div className='my-12 grid grid-cols-7 gap-8'>
        <div className='col-span-7 flex max-w-xl flex-col lg:col-span-3'>
          <h3 className='mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50'>
            About
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
            Quick Links
          </h3>
          <ul className='list-none space-y-1'>
            {quickLinks.map((link) => (
              <li key={link.text} className='text-sm text-[#fbbf24]'>
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
