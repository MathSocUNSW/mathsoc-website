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
    name: "Citadel Securities",
    type: "major",
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
    name: "Quantium",
    type: "major",
    websiteURL: "https://quantium.com/",
    logoPath: "/images/logos/quantium_logo.png",
    description:
      "Quantium delivers breakthrough solutions in data and technology. We develop, analyse and monetise datasets, generate insights, create decision support tools and embed automated decision engines. We bring all this to bear in Q, which powers everything we do."
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
    type: "principal",
    websiteURL: "https://optiver.com/working-at-optiver/graduate-and-student/",
    logoPath: "/images/logos/optiver_logo.png",
    description:
      "Optiver is a leading global trading firm, powered by technological innovation. Simply put, we trade options and other financial instruments in 50+ exchanges to improve markets around the world. It's a unique business, with unique challenges. We're a quiet powerhouse of creative problem solving and collaboration. And while we built our successfor more than 35 years, we've deliberately forged a culture that gives our people the opportunity and support to help us make an impact every day. At Optiver, we do things a bit differently to most businesses. We operate without clients, taking risks and reaping the rewards ourselves. We play by our own rules and maintain an informal culture to keep it fun. We’re passionate about empowering individuals and creating diverse teams that thrive. Every person at Optiver should feel included, valued and respected because we believe our best work is done together. We're committed to making the world better every day. This commitment extends to our people, making their lives better through a range of initiatives, benefits and opportunities. We believe the best equipped go furthest."
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
    name: "SIG Susquehanna",
    type: "major",
    websiteURL: "https://sig.com/",
    logoPath: "/images/logos/sig_logo.png",
    description:
      "A global quantitative trading firm founded with an entrepreneurial mindset and a rigorous analytical approach to decision making. We commit our own capital to trade financial products around the world. Building virtually all of our own trading technology from scratch, we are leaders and innovators in high performance, low latency trading. Our traders, quants, developers, and systems engineers work side by side to develop and implement our trading strategies. Each individual brings their unique expertise every day to help us make optimal decisions in the global financial markets."
  }
];

// sort alphabetically
const sponsorsData = rawSponsorsData.sort(alphabeticalSort);

export default sponsorsData;
