import { Layout, About, PortfolioSection } from '../components';

const Homepage = () => {
  const technologies = [
    'TypeScript',
    'Next.js',
    'React',
    'Tailwind',
    'MongoDB',
    'Express',
  ];

  const quickLinks = [
    { text: 'GitHub', href: 'https://github.com/hunterbecton' },
    { text: 'YouTube', href: 'https://www.youtube.com/skillthrive' },
    { text: 'Twitter', href: 'https://twitter.com/hunterbecton' },
    { text: 'Email', href: 'mailto:hunter@skillthrive.com' },
  ];

  const portfolioItems = [
    {
      title: 'Skillthrive',
      logo: '/skillthrive-logo.png',
      color: '#30bc72',
      description: `What started as a fun way to share my knowledge and explore new topics has now grown into a YouTube channel with over 50K subscribers. I've recently launched a new version of the site that allows authors to create lessons and code snippets directly from the site.`,
      technologies: ['Next.js', 'React', 'Tailwind', 'Stripe', 'Supabase'],
      links: [
        { text: 'Site', href: 'https://www.skillthrive.com' },
        { text: 'YouTube', href: 'https://www.youtube.com/skillthrive' },
      ],
    },
    {
      title: 'LeapPage',
      logo: '/leappage-logo.png',
      color: '#3B82F6',
      description: `LeapPage is a landing page builder made for sales teams to create relevant content experiences for their leads that perform and look great across any device.`,
      technologies: ['Next.js', 'React', 'Tailwind', 'Stripe', 'MongoDB'],
      links: [{ text: 'Site', href: 'https://www.leappage.com' }],
    },
    {
      title: 'Mattermix',
      logo: '/mattermix-logo.png',
      color: '#4f46e5',
      description: `Mattermix is an image generation API to help automate and create images at scale with HTML and CSS. The API is RESTful and has an integration with Zapier to simplifying automation with other apps.`,
      technologies: ['Next.js', 'React', 'Lambda', 'Stripe', 'MongoDB'],
      links: [{ text: 'Site', href: 'https://www.mattermix.com' }],
    },
  ];

  return (
    <Layout>
      <About
        profile='/hunter.jpeg'
        profileAlt='Hunter Becton'
        subtitle='Frontend Developer'
        title='Hunter Becton'
        description={`I'm a full-stack JavaScript developer in Atlanta, GA. I'm building a community for anyone to learn how to code on Skillthrive, plus creating other entertaining and educational content for geeks alike.`}
        technologies={technologies}
        quickLinks={quickLinks}
      />
      {portfolioItems.map(
        ({ title, logo, color, description, technologies, links }) => (
          <PortfolioSection
            key={title}
            title={title}
            logo={logo}
            color={color}
            description={description}
            technologies={technologies}
            links={links}
          />
        )
      )}
    </Layout>
  );
};

export default Homepage;
