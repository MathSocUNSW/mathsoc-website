export type sponsor = {
  name: string;
  type: 'affiliate' | 'bespoke' | 'principal' | 'major' | 'school';
  logoURL: string;
  websiteURL: string;
  profileText?: string;
};

const sponsorsData: Array<sponsor> = [
  {
    name: 'Akuna Capital',
    type: 'affiliate',
    websiteURL: 'https://akunacapital.com/',
    logoURL: '/images/logos/akuna_capital_logo.png'
  },
  {
    name: 'Brain & Company',
    type: 'bespoke',
    websiteURL: 'https://www.bain.com/',
    logoURL: '/images/logos/brain_and_company_logo.png'
  },
  {
    name: 'Citadel | Citadel Securities',
    type: 'principal',
    websiteURL: 'https://www.citadelsecurities.com/',
    logoURL: '/images/logos/citadel_citadel_securities_logo.png'
  },
  {
    name: 'IMC',
    type: 'principal',
    websiteURL: 'https://www.imc.com/',
    logoURL: '/images/logos/imc_logo.png'
  },
  {
    name: 'Jane Street',
    type: 'principal',
    websiteURL: 'https://www.janestreet.com/',
    logoURL: '/images/logos/jane_street_logo.png'
  },
  {
    name: 'Macquarie',
    type: 'affiliate',
    websiteURL: 'https://www.macquarie.com.au/',
    logoURL: '/images/logos/macquarie_logo.png'
  },
  {
    name: 'Quantium',
    type: 'major',
    websiteURL: 'https://quantium.com/',
    logoURL: '/images/logos/quantium_logo.png'
  },
  {
    name: 'School of Mathematics and Statistics',
    type: 'school',
    websiteURL: 'https://www.maths.unsw.edu.au/',
    logoURL: '/images/logos/unsw_maths_logo.png'
  },
  {
    name: 'Servian',
    type: 'principal',
    websiteURL: 'https://www.servian.com/',
    logoURL: '/images/logos/servian_logo.png'
  },
  {
    name: 'SIG Susquehanna',
    type: 'principal',
    websiteURL: 'https://sig.com/',
    logoURL: '/images/logos/sig_logo.png'
  },
  {
    name: 'Arc',
    type: 'school',
    websiteURL: 'https://www.arc.unsw.edu.au/',
    logoURL: '/images/logos/arc_green_logo.png'
  }
];

export default sponsorsData;
