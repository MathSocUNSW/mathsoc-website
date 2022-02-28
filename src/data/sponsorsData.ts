// Helper Imports
import alphabeticalSort from "src/helpers/alphabeticalSort";

export interface sponsor {
  name: string;
  type: "principal" | "major" | "marketing" | "school" | "events";
  logoPath: string;
  websiteURL: string;
  description?: string;
}
// TODO: sort alphabetically
const rawSponsorsData: sponsor[] = [
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
    type: "events",
    websiteURL: "https://www.autumncompass.com/home/",
    logoPath: "/images/logos/autumn_compass_logo.png",
    description:
      "Autumn Compass is a proprietary trading firm developing clever algorithms to provide liquidity on financial markets across Asia-Pacific. Our objective is to efficiently facilitate the flow of capital between market participants and serve a leading role in exchange market making and capital formation."
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
    name: "Flow Traders",
    type: "marketing",
    websiteURL: "https://www.flowtraders.com/",
    logoPath: "/images/logos/flow_traders_logo.png",
    description:
      "Flow Traders is a leading global financial technology-enabled liquidity provider in financial products, historically specialized in Exchange Traded Products (ETPs), now expanding into other asset classes. We are able to grow our organization further, thereby ensuring that our trading desks in Europe, the Americas and Asia provide liquidity across all major exchanges, globally, 24 hours a day. Founded in 2004, we continue to cultivate the entrepreneurial, innovative and team-oriented culture that has been with us since the beginning."
  },
  {
    name: "IMC",
    type: "major",
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
    name: "Optiver",
    type: "major",
    websiteURL: "https://www.optiver.com/",
    logoPath: "/images/logos/optiver_logo.png",
    description:
      "As a leading global market maker, Optiver works to make markets fairer, more transparent and more efficient. Because the better markets function, the better it is for everyone."
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
  },
  {
    name: "VivCourt Trading",
    type: "major",
    websiteURL: "http://www.vivcourttrading.com.au/",
    logoPath: "/images/logos/vivcourt_logo.png",
    description:
      "On the surface VivCourt Trading might look like your average financial trading firm.  But you just have to scratch the surface (or chat to anyone who works there!) to know it most definitely is not. VivCourt's founder, Rob Keldoulis, has taken the traditional corporate business model and flipped it on its head. He has challenged every aspect and come away with what he believes will evolve into the only sustainable corporate model of the future."
  }
];

// sort alphabetically
const sponsorsData = rawSponsorsData.sort(alphabeticalSort);

export default sponsorsData;
