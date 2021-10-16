// Helper Imports
import alphabeticalSort from "src/helpers/alphabeticalSort";

export interface sponsor {
  name: string;
  type: "principal" | "major" | "affiliate" | "bespoke" | "school" | "events";
  logoPath: string;
  websiteURL: string;
  description?: string;
}

// TODO: sort alphabetically
const rawSponsorsData: sponsor[] = [
  {
    name: "Akuna Capital",
    type: "affiliate",
    websiteURL: "https://akunacapital.com/",
    logoPath: "/images/logos/akuna_capital_logo.png",
    description:
      "Akuna Capital is a proprietary trading firm specializing in derivatives market making and sophisticated modeling with a commitment to cutting-edge technology. We are the leading options market maker to successfully enter the industry in recent years with sustainable growth. By providing more liquidity to the markets through rapid innovation, we have the advantage of youth in remaining nimble and agile in an ever-changing competitive landscape."
  },
  {
    name: "Arc",
    type: "school",
    websiteURL: "https://www.arc.unsw.edu.au/",
    logoPath: "/images/logos/arc_logo.png",
    description:
      "Arc is your student organisation at UNSW. From Clubs to Volunteering; Sport to Events; Wellness to Help; and heaps more, we make sure that your student experience is the best that it can be."
  },
  {
    name: "Autumn Compass",
    type: "major",
    websiteURL: "https://www.autumncompass.com/home/",
    logoPath: "/images/logos/autumn_compass_logo.png",
    description:
      "Autumn Compass is a proprietary trading firm developing clever algorithms to provide liquidity on financial markets across Asia-Pacific. Our objective is to efficiently facilitate the flow of capital between market participants and serve a leading role in exchange market making and capital formation."
  },
  {
    name: "Bain & Company",
    type: "bespoke",
    websiteURL: "https://www.bain.com/",
    logoPath: "/images/logos/bain_logo.png",
    description:
      "One of the world's leading management consulting firms. We work with top executives to help them make better decisions, convert those decisions to actions and deliver the sustainable success they desire. For more than 40 years, we've been passionate about achieving better results for our clients—results that go beyond financial and are uniquely tailored, pragmatic, holistic and enduring. We've worked with the majority of the Global 500, thousands of major regional and local organizations, hundreds of nonprofits, and private equity funds representing 75 percent of global equity capital. We are proud of our clients' track record, like the fact that our public clients have historically outperformed the stock market 4 to 1."
  },
  {
    name: "Citadel",
    type: "principal",
    websiteURL: "https://www.citadel.com/",
    logoPath: "/images/logos/citadel_logo.png",
    description:
      "Citadel is a leading investor in the world’s financial markets. For over a quarter of a century, we have sought to deliver industry-leading investment returns to clients including corporate pensions, endowments, foundations, public institutions, and sovereign wealth funds. Our global team works to help our clients' capital fulfill its greatest potential across a diverse range of markets and investment strategies, including fixed income & macro, equities, quantitative, commodities and credit."
  },
  {
    name: "Citadel Securities",
    type: "principal",
    websiteURL: "https://www.citadelsecurities.com/",
    logoPath: "/images/logos/citadel_securities_logo.png",
    description:
      "Citadel Securities is a leading global market maker, delivering a broad array of fixed income and equity products to banks, broker-dealers, government agencies, corporations, insurers, and sovereign wealth funds. Through innovation and efficiency, the firm provides liquidity with the goal of driving price discovery in more than 35 countries and making markets more competitive, open, and transparent. Since its founding more than 15 years ago, Citadel Securities has cultivated a culture of excellence, assembling the brightest minds in trading, technology, and the sciences to make better markets for a better world."
  },
  {
    name: "IMC",
    type: "principal",
    websiteURL: "https://www.imc.com/",
    logoPath: "/images/logos/imc_logo.png",
    description:
      "One of the world’s leading proprietary trading firms, and a market maker in securities listed on exchanges across the globe. Our cutting-edge technology drives everything we do. High performance algorithms, smart strategies and collaborative teams are the core of our business. We are at the core a trading firm, however we value trading and technology equally and we believe that cooperation between traders and technologists is one of our great strengths. This is also reflected in our organizational and remuneration policies. We believe in fostering a truly flat environment in which great ideas can be recognized as well as put into practice from anybody within our organization."
  },
  {
    name: "Jane Street",
    type: "principal",
    websiteURL: "https://www.janestreet.com/",
    logoPath: "/images/logos/jane_street_logo.png",
    description:
      "A proprietary trading firm that operates around the clock and around the globe. We bring a deep understanding of markets, a scientific approach, and innovative technology to trade in the world’s highly competitive financial markets, focusing primarily on equities and equity derivatives. Founded in 2000, Jane Street employs over 700 people in offices in New York, London and Hong Kong. Our entrepreneurial culture is driven by our talented team of traders and programmers."
  },
  {
    name: "Macquarie Group",
    type: "affiliate",
    websiteURL: "https://www.macquarie.com.au/",
    logoPath: "/images/logos/macquarie_logo.png",
    description:
      "Macquarie Group Limited is an Australian multinational independent investment bank and financial services company. Headquartered and listed in Australia (ASX: MQG), Macquarie employs more than 15,000 staff in 31 markets, is the world's largest infrastructure asset manager and Australia's top ranked mergers and acquisitions adviser, with more than A$595 billion in assets under management. The company's operating groups include Banking and Financial Services, Commodities and Global Markets, Macquarie Asset Management and Macquarie Capital."
  },
  {
    name: "Quantium",
    type: "major",
    websiteURL: "https://quantium.com/",
    logoPath: "/images/logos/quantium_logo.png",
    description:
      "Quantium delivers breakthrough solutions in data and technology. We develop, analyse and monetise datasets, generate insights, create decision support tools and embed automated decision engines. We bring all this to bear in Q, which powers everything we do."
  },
  {
    name: "School of Mathematics and Statistics",
    type: "school",
    websiteURL: "https://www.maths.unsw.edu.au/",
    logoPath: "/images/logos/unsw_maths_logo.png",
    description:
      "UNSW Mathematics and Statistics is ranked number one in Australia for Mathematics (ARWU 2020, US News Global 2020, NTU Ranking 2020, CWTS Leiden Ranking 2020). Our research and teaching activities cover a broad spectrum of Applied Mathematics, Pure Mathematics and Statistics. The School has 90+ academic staff, including many research and postdoctoral fellows. Our research presence includes many seminars and visiting academics, and we teach several thousand students annually."
  },
  {
    name: "Servian",
    type: "principal",
    websiteURL: "https://www.servian.com/",
    logoPath: "/images/logos/servian_logo.png",
    description:
      "At Servian, we design, deliver and manage innovative data & analytics, digital, customer engagement and cloud solutions that help you sustain competitive advantage."
  },
  {
    name: "SIG Susquehanna",
    type: "principal",
    websiteURL: "https://sig.com/",
    logoPath: "/images/logos/sig_logo.png",
    description:
      "A global quantitative trading firm founded with an entrepreneurial mindset and a rigorous analytical approach to decision making. We commit our own capital to trade financial products around the world. Building virtually all of our own trading technology from scratch, we are leaders and innovators in high performance, low latency trading. Our traders, quants, developers, and systems engineers work side by side to develop and implement our trading strategies. Each individual brings their unique expertise every day to help us make optimal decisions in the global financial markets."
  }
];

// sort alphabetically
const sponsorsData = rawSponsorsData.sort(alphabeticalSort);

export default sponsorsData;
