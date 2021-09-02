export interface sponsor {
  name: string;
  //type: "affiliate" | "bespoke" | "principal" | "major" | "school";
  type: "principal" | "partner";
  logoURL: string;
  websiteURL: string;
  profileText?: string;
}

const sponsorsData: Array<sponsor> = [
  {
    name: "Akuna Capital",
    //type: "affiliate",
    type: "partner",
    websiteURL: "https://akunacapital.com/",
    logoURL: "/images/logos/akuna_capital_logo.png",
    // need a real description
    profileText: "Provider of data, analytics, digital, artificial intelligence and cloud technology services based in Sydney, Australia. The company's services help organizations design and implement robust enterprise data management strategies and data warehouse builds that ensure the security, accuracy and reliability of data through advanced strategies and health checks encompassing data warehousing, analytics and business intelligence.",
  },
  {
    name: "Brain & Company",
    //type: "bespoke",
    type: "partner",
    websiteURL: "https://www.bain.com/",
    logoURL: "/images/logos/brain_and_company_logo.png",
    profileText: "One of the world's leading management consulting firms. We work with top executives to help them make better decisions, convert those decisions to actions and deliver the sustainable success they desire. For more than 40 years, we've been passionate about achieving better results for our clients—results that go beyond financial and are uniquely tailored, pragmatic, holistic and enduring. We've worked with the majority of the Global 500, thousands of major regional and local organizations, hundreds of nonprofits, and private equity funds representing 75 percent of global equity capital. We are proud of our clients' track record, like the fact that our public clients have historically outperformed the stock market 4 to 1.",
  },
  {
    name: "Citadel",
    type: "principal",
    websiteURL: "https://www.citadel.com/",
    logoURL: "/images/logos/citadel_logo.png",
    profileText: "Citadel is a leading investor in the world’s financial markets. For over a quarter of a century, we have sought to deliver industry-leading investment returns to clients including corporate pensions, endowments, foundations, public institutions, and sovereign wealth funds. Our global team works to help our clients' capital fulfill its greatest potential across a diverse range of markets and investment strategies, including fixed income & macro, equities, quantitative, commodities and credit.",
  },
  {
    name: "Citadel Securities",
    type: "principal",
    websiteURL: "https://www.citadelsecurities.com/",
    logoURL: "/images/logos/citadel_securities_logo.png",
    profileText: "Citadel Securities is a leading global market maker, delivering a broad array of fixed income and equity products to banks, broker-dealers, government agencies, corporations, insurers, and sovereign wealth funds. Through innovation and efficiency, the firm provides liquidity with the goal of driving price discovery in more than 35 countries and making markets more competitive, open, and transparent. Since its founding more than 15 years ago, Citadel Securities has cultivated a culture of excellence, assembling the brightest minds in trading, technology, and the sciences to make better markets for a better world.",
  },
  {
    name: "IMC",
    type: "principal",
    websiteURL: "https://www.imc.com/",
    logoURL: "/images/logos/imc_logo.png",
    profileText: "One of the world’s leading proprietary trading firms, and a market maker in securities listed on exchanges across the globe. Our cutting-edge technology drives everything we do. High performance algorithms, smart strategies and collaborative teams are the core of our business. We are at the core a trading firm, however we value trading and technology equally and we believe that cooperation between traders and technologists is one of our great strengths. This is also reflected in our organizational and remuneration policies. We believe in fostering a truly flat environment in which great ideas can be recognized as well as put into practice from anybody within our organization.",
  },
  {
    name: "Jane Street",
    type: "principal",
    websiteURL: "https://www.janestreet.com/",
    logoURL: "/images/logos/jane_street_logo.png",
    profileText: "A proprietary trading firm that operates around the clock and around the globe. We bring a deep understanding of markets, a scientific approach, and innovative technology to trade in the world’s highly competitive financial markets, focusing primarily on equities and equity derivatives. Founded in 2000, Jane Street employs over 700 people in offices in New York, London and Hong Kong. Our entrepreneurial culture is driven by our talented team of traders and programmers.",
  },
  {
    name: "Macquarie",
    //type: "affiliate",
    type: "partner",
    websiteURL: "https://www.macquarie.com.au/",
    logoURL: "/images/logos/macquarie_logo.png",
    // need a real description
    profileText: "Provider of data, analytics, digital, artificial intelligence and cloud technology services based in Sydney, Australia. The company's services help organizations design and implement robust enterprise data management strategies and data warehouse builds that ensure the security, accuracy and reliability of data through advanced strategies and health checks encompassing data warehousing, analytics and business intelligence.",
  },
  {
    name: "Quantium",
    //type: "major",
    type: "partner",
    websiteURL: "https://quantium.com/",
    logoURL: "/images/logos/quantium_logo.png",
    // need a real description
    profileText: "Provider of data, analytics, digital, artificial intelligence and cloud technology services based in Sydney, Australia. The company's services help organizations design and implement robust enterprise data management strategies and data warehouse builds that ensure the security, accuracy and reliability of data through advanced strategies and health checks encompassing data warehousing, analytics and business intelligence.",
  },
  {
    name: "School of Mathematics and Statistics",
    //type: "school",
    type: "partner",
    websiteURL: "https://www.maths.unsw.edu.au/",
    logoURL: "/images/logos/unsw_maths_logo.png",
    // need a real description
    profileText: "Provider of data, analytics, digital, artificial intelligence and cloud technology services based in Sydney, Australia. The company's services help organizations design and implement robust enterprise data management strategies and data warehouse builds that ensure the security, accuracy and reliability of data through advanced strategies and health checks encompassing data warehousing, analytics and business intelligence.",
  },
  {
    name: "Servian",
    type: "principal",
    websiteURL: "https://www.servian.com/",
    logoURL: "/images/logos/servian_logo.png",
    // need a real description
    profileText: "Provider of data, analytics, digital, artificial intelligence and cloud technology services based in Sydney, Australia. The company's services help organizations design and implement robust enterprise data management strategies and data warehouse builds that ensure the security, accuracy and reliability of data through advanced strategies and health checks encompassing data warehousing, analytics and business intelligence.",
  },
  {
    name: "SIG Susquehanna",
    type: "principal",
    websiteURL: "https://sig.com/",
    logoURL: "/images/logos/sig_logo.png",
    profileText: "A global quantitative trading firm founded with an entrepreneurial mindset and a rigorous analytical approach to decision making. We commit our own capital to trade financial products around the world. Building virtually all of our own trading technology from scratch, we are leaders and innovators in high performance, low latency trading. Our traders, quants, developers, and systems engineers work side by side to develop and implement our trading strategies. Each individual brings their unique expertise every day to help us make optimal decisions in the global financial markets.",
  },
  {
    name: "Arc",
    //type: "school",
    type: "partner",
    websiteURL: "https://www.arc.unsw.edu.au/",
    logoURL: "/images/logos/arc_green_logo.png",
    // need a real description
    profileText: "Arc was formed in 2006 and is a not-for-profit organisation for students studying at UNSW. It's symbolic of an umbrella covering all of the students, clubs and societies in its care, and has nothing to do with floods or paired animals. Arc is all about everything outside the classroom; from volunteering opportunities to free food, there are a zillion opportunities to find your thing at uni with one of Arc's fun events or diverse clubs and societies.",
  }
];

export default sponsorsData;
