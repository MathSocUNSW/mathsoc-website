// NOTE: if a locationURL is not provided, the links for detected social keywords (e.g. YouTube, Discord) will be automatically added

type day =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31";

type month = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type year = "2021";

type dateString = `${day}-${month}-${year}`;

export interface eventDetails {
  title: string; // event title
  eventLink: string; // link to Facebook event
  description: string; // event description
  imagePath: string; // path to event image
  location: string; // event location
  locationURL?: string; // (optional) link for location
  date: string; // date string to be displayed
  startDate: dateString; // start date for rendering algorithm
  endDate: dateString; // end date for rendering algorithm
}

// Template
// {
//   title: "",
//   eventLink: "",
//   description: "",
//   imagePath: generateImagePath(""),
//   location: "",
//   date: "",
//   startDate: "",
//   endDate: ""
// }

const generateImagePath = (fileName: string): string => {
  const FOLDER_PATH = "/images/events";
  return `${FOLDER_PATH}/${fileName}`;
};

const eventData: eventDetails[] = [
  {
    title: "MATH1081 Revision Workshop",
    eventLink: "https://www.facebook.com/events/3695611740565357/",
    description: `Scared of maths? Scared of exams? Scared of math exams? Well, be scared no more with MathSoc’s MATH1081 revision workshop!!!
    Gain the confidence you need to ace those final exams with some brainy math students who went through the exact same thing not too long ago. Don’t pass up the FREE opportunity to learn the secrets and tricks to tackling the toughest final exam questions.
    Cram the week before rather than the night before! You don’t even have to leave your bed!`,
    imagePath: generateImagePath("math1081_t1_revision_workshop_2021.jpg"),
    location: "Keith Burrows & YouTube",
    date: "26th & 27th April 2021, 1-3PM",
    startDate: "26-4-2021",
    endDate: "27-4-2021"
  },
  {
    title: "MATH2018/MATH2019 Revision Workshop",
    eventLink: "https://www.facebook.com/events/242553397552980/",
    description:
      "Come join the MATH2018 and MATH2019 revision workshop for the course content and then we will tackle some exam questions so you get that HD in your exam! Drop by so you don’t miss your chance on being on the Dean’s list this year!",
    imagePath: generateImagePath("math2018_t1_revision_workshop.jpg"),
    location: "Electrical Engineering G23 and YouTube",
    date: "28th & 29th April 2021, 2-4PM",
    startDate: "28-4-2021",
    endDate: "29-4-2021"
  },
  {
    title: "MATH2089 Revision Workshop",
    eventLink: "https://www.facebook.com/events/134264328628331/",
    description: `✨Name a more ICONIC trio✨
    MATH 2089, Maple and YOU
    Join our workshop as we go over some of the harder problems in past exams and break down the methods to solving them. Whether you’re 5 weeks behind on content or already a master of statistical analysis, you wouldn’t want to miss this.`,
    imagePath: generateImagePath("math2089_t1_revision_workshop_2021.jpg"),
    location: "YouTube",
    date: "26th & 27th April 2021, 4-6PM",
    startDate: "26-4-2021",
    endDate: "27-4-2021"
  },
  {
    title: "MATH2111/MATH2011 Revision Seminar",
    eventLink: "https://www.facebook.com/events/390485278709800/",
    description:
      "Are you struggling with the ideas and techniques used in several variable calculus? Behind on your lectures? Join us for our MATH2111 seminar, split into two sections over two days, where we will revise the course content and then tackle some exam questions to get you ready to ace your exam! So come chill and add another HD to your collection!",
    imagePath: generateImagePath("math2111_t1_revision_seminar_2021.jpg"),
    location: "Electrical Engineering G23 and YouTube",
    date: "28th & 29th April 2021, 5-7PM",
    startDate: "28-4-2021",
    endDate: "29-4-2021"
  },
  {
    title: "MATH1131/MATH1141 Revision Workshop",
    eventLink: "https://www.facebook.com/events/1582745265254360/",
    description: `Tired of studying by yourself? Stressed about upcoming math exams? You'll feel better after coming to our MATH1131/MATH1141 revision classes!
    MathSoc is offering two 2 hour revision classes for algebra and calculus to help you excel in your finals. The revision classes will show you the top strats to tackle common exam questions with confidence. Not to mention this class is completely free! Algebra content will be covered on the Monday revision class, while Calculus will be covered on Tuesday. See you there!`,
    imagePath: generateImagePath("math1131_t1_revision_workshop_2021.jpg"),
    location: "YouTube",
    date: "26th & 27th April 2021, 1-3PM",
    startDate: "26-4-2021",
    endDate: "27-4-2021"
  },
  {
    title: "MathSoc x DataSoc Camp",
    eventLink: "https://www.facebook.com/events/4305401209487840/",
    description: `UNSW Data Science Society and UNSW Mathematics Society are proud to present 🔥 THE CAMPOCALYPSE OF 2021 🔥. It's a no-BRAINER🧟: if you can survive the end of the world, you can survive ANYTHING 💪.
    Join us for a JAM-PACKED weekend of fun camp activities🏃, intense challenges 🏅, good food🍝 and drinks🍻 where you can meet a bunch of new friends👯‍♂️, make memories, dance💃 till you drop at our nightly PARTIES🎉, and celebrate your survival of ONE THIRD of the academic calendar.
    The apocalypse doesn't discriminate - students from ALL years and degrees are invited to witness the end of the world 🌏💥, especially 1ST YEARS 👶 and those 2ND YEARS 🧒 who missed out on camp last year. Tickets are ❗LIMITED❗ so get in quick! It's DEAD⚰️ easy - just click the link below!`,
    imagePath: generateImagePath("camp_2021.jpg"),
    location: "The Tops Conference Centre",
    date: "28-30 May 2021",
    startDate: "28-5-2021",
    endDate: "30-5-2021"
  },
  {
    title: "Online Speed Friending",
    eventLink: "https://www.facebook.com/events/458047345253197/",
    description: `Haven't made many friends at uni and nervous 😟 about socialising? Still feeling the aftereffects of quarantine loneliness? 😭 Or perhaps you're overseas 🌎 or studying exclusively online and haven't met any peers yet?
    We've got a solution for you! Speed friending - the platonic version of speed dating 😘, without the potential for emotional trauma and trust issues🙅‍♀️🙅‍♂️.
    Join us online as we embark on an evening of fun and bonding that will leave everybody feeling refreshed and more connected to fellow peers👯‍♀️👯‍♂️. With games such as Scribblio, Among Us, Scattegories and Codenames to look forward to, MathSoc is here to help nudge you towards developing meaningful relationships with a wide range of people! ❤️`,
    imagePath: generateImagePath("speed_friending_2021.png"),
    location: "Discord",
    date: "9th April 2021, 6-8PM",
    startDate: "9-4-2021",
    endDate: "9-4-2021"
  },
  {
    title: "The World of Trading",
    eventLink: "https://www.facebook.com/events/891620388078290/",
    description: `Are you interested in working collaboratively to solve complex problems? Curious about how you can apply your mathematics skills to jobs in trading firms? UNSW MathSoc and UNIT UNSW are proud to present The World of Trading, our Q&A panel discussion featuring representatives from the following distinguished trading firms:
    ⭐ Citadel
    ⭐ IMC
    ⭐ Jane Street
    ⭐ Optiver
    The event will start off with a few questions from UNSW MathSoc and UNIT UNSW to open up the discussion, where you will learn about the mathematics involved in trading, what a day in the life of a trader is like, and many more insightful things!
    Afterwards, you can ask any question you'd like to our panelists, where the most popular questions will be taken to the discussion floor so come prepared with your questions!`,
    imagePath: generateImagePath("world_of_trading_2021.jpg"),
    location: "Zoom",
    date: "15th April 2021, 4-5:30PM",
    startDate: "15-4-2021",
    endDate: "15-4-2021"
  },
  {
    title: "PI Day",
    eventLink: "https://www.facebook.com/events/1151411998637299/",
    description: `Did somebody say free pies? 😍🤩 Happy 🥧 Day cutie π's!
    In celebration of Pi Day, MathSoc is giving away free pies for all MathSoc members! 🥳
    Don’t be like π and go on forever by cramming for midterms non-stop. Take a break and treat yo self to some well deserved and delicious pies 🤤. Your wellbeing matters too! ❤️
    Please have you student ID card with your MathSoc sticker ready in order to collect your free pie 🤩`,
    imagePath: generateImagePath("pi_day_2021.jpg"),
    location: "Naked Lady Lawn",
    date: "29th March 2021, 2-4PM",
    startDate: "29-3-2021",
    endDate: "29-3-2021"
  },
  {
    title: "The UNSW MathSoc Panelcast",
    eventLink: "https://www.facebook.com/events/793344807975270/",
    description: `What can I do with a Mathematics degree? What are my job prospects? What will life be like after I graduate?
    If you've ever asked yourself questions like these, wonder no more! MathSoc is bringing you a series of Q&A panelcasts with professionals from various fields, that will answer all your burning questions and doubts!
    The first panelcast will focus on Mathematics Research, featuring FOUR of our very own UNSW Mathematicians:
    📢 Dr Thomas Britz
    📢 Dr Clara Grazian
    📢 Dr Alexander Gilbert
    📢 Michael Denes
    Though this panel discussion is aimed at undergraduate, pre-honours students who would like insight into academic research, all are welcome to join! So, if you're interested in knowing what higher Mathematics research is like, want to know more about suitable career paths into Math Research & more, register and join via the links below for an informative night!`,
    imagePath: generateImagePath("panelcast_2021.jpg"),
    location: "Zoom",
    date: "17th March 2021, 6-7:30PM",
    startDate: "17-3-2021",
    endDate: "17-3-2021"
  },
  {
    title: "LaTeX Workshop",
    eventLink: "https://www.facebook.com/events/936197930517093/",
    description: `CSESoc is teaming up with MathSoc to bring you the answers to all your LaTeX questions, in a workshop on LaTeX presented by Gerald Huang. 🤩
    Calling all 1131/1141 students and students enrolled in:
    ↪️ ALL MATH courses
    ↪️ COMP3121/COMP9101
    This is the perfect event for you and will be extremely useful for your upcoming assignments. 👍
    LaTeX is a high-quality typesetting system; it includes features designed for the production of technical and scientific documentation.`,
    imagePath: generateImagePath("latex_workshop_2021.jpg"),
    location: "Zoom",
    date: "16th March 2021, 4-6PM",
    startDate: "16-3-2021",
    endDate: "16-3-2021"
  },
  {
    title: "Resume Workshop",
    eventLink: "https://www.facebook.com/events/284670036374709/",
    description: `Step up your resume game and your employability at our Resume Workshop! Hosted by leading data consultancy, Servian, this workshop will better prepare YOU for the recruiting season as Servian employees share their own insight into what makes an excellent resume.
    The event will consist of a 30-minute workshop where invaluable resume tips and tricks will be shared, followed by a Q&A session, then a PERSONAL student resume review session where you will have the chance for YOUR OWN RESUME to be evaluated by Servian professionals.`,
    imagePath: generateImagePath("resume_workshop_2021.jpg"),
    location: "Science and Engineering Building G07",
    date: "11th March 2021, 4-5:30PM",
    startDate: "11-3-2021",
    endDate: "11-3-2021"
  },
  {
    title: "Puzzle Hunt",
    eventLink: "https://www.facebook.com/events/1076676322814846/",
    description: `Welcome to the Puzzle Hunt of the year, jointly delivered by 🧩PuzzleSoc🧩 and 🔢MathSoc🔢‼️ RATIONALISE your thinking 🤔 as you work through our x+1 = 6, solve for x number of puzzles. Be careful though, as some of these clues might be quite DISCRETE! No maths knowledge is required to solve these puzzles but the PuzzleSoc team will be available on the night to give hints!💡
    Doesn't matter if you're competitive or casual- just get ready for an EXPONENTIAL 📈 amount of fun 🤩 Hope to see everyone there!
    Stay tuned as we are preparing some awesome prizes 🏆 which will be announced soon 👀`,
    imagePath: generateImagePath("puzzle_hunt_2021.png"),
    location: "Law Building",
    date: "5th March 2021, 4-6PM",
    startDate: "5-3-2021",
    endDate: "5-3-2021"
  },
  {
    title: "Ice Skating Night Meet & Greet",
    eventLink: "https://www.facebook.com/events/791894801408678/",
    description: `Matrix multiplication 🔢 got you in grief 😱? Mate, trick on the ice instead and multiply✖️your respect amongst your peers.
    Mathematicians and Ice Skaters rejoice! MathSoc and IceSoc are teaming up once again to bring you a fun social night of ice skating 🥳.
    Algebra? Gonna be more like "Ow, bra" when you lose control and ram straight into that unsuspecting first year.
    Flex your ice skating prowess and meet your fellow math majors, as well as the diverse group of students making up UNSW's best ice skating club.
    Tickets are going for $19.99 ($14.99 for IceSoc Gold Members!) Book ahead to secure your spot here, or pay on the day by cash 💵 or card 💳.
    The event is to be held at Ice Zoo in Alexandria - a short bus or car ride from uni, or easily accessible via the T8 Airport and South Line.
    We've booked out the entire rink to maximise flex potential, so don't miss out on this once-in-a-year opportunity!`,
    imagePath: generateImagePath("ice_skating_2021.jpg"),
    location: "Ice Zoo",
    date: "4th March 2021, 6:15PM",
    startDate: "4-3-2021",
    endDate: "4-3-2021"
  },
  {
    title: "Subcommittee Applications 2021",
    eventLink: "https://www.facebook.com/events/1053727138447044/",
    description: `The highly anticipated ✨MATHSOC SUBCOM APPLICATIONS✨ are finally open! Whether you're a first year looking for ways to get involved at UNSW, a final year veteran wanting to expand their social circle, or anything in-between, MathSoc is eager to have you join our team! You DO NOT have to be studying a Mathematics degree to be accepted.
    As a member of one of our 🤩FIVE SUBCOMMITTEES🤩, you will be guided throughout the year by a friendly team of directors and executives who will encourage you to step out of your comfort zone, meet new people in our tight-knit community, expand your skillsets, have fun and rewarding experiences, and make treasured memories that you can take with you even after you leave university. The following positions are currently up for grabs:
    ❤️ 9x Education
    🧡 6x Events (Corporate)
    💛 6x Events (Socials)
    💚 2x IT
    💙 9x Marketing
    PLEASE NOTE: the number of slots available are approximations and not set in stone. The number of subcommittee members accepted will be decided after interviews.
    Good luck with your applications! We can't wait to meet you.`,
    imagePath: generateImagePath("subcom_2021.png"),
    location: "Apply here",
    locationURL: "https://bit.ly/2ZfNGAW",
    date: "28th February 2021, 11:59PM",
    startDate: "28-2-2021",
    endDate: "28-2-2021"
  },
  {
    title: "Peer Mentoring Applications 2021",
    eventLink: "https://www.facebook.com/events/3711444278941702/",
    description: `Have you just started uni and already feel a bit lost? MathSoc is proud to introduce our ✨2021 Peer Mentoring Program✨ for all you first years!
    Whether you need a study buddy, have a deep desire to know all the best microwave spots on campus, want to make a few new friends, or would like advice from a uni veteran, this program is designed to give you a helping hand as you traverse the all too rocky road of your first year at UNSW. In order to be a mentee, you must be in your first year of UNSW. You are not required to be studying a Mathematics degree in order to be accepted!
    Good luck with your applications! Our mentors are excited to meet you!`,
    imagePath: generateImagePath("peer_mentee_2021.jpg"),
    location: "Apply here",
    locationURL: "https://bit.ly/39Y7ezW",
    date: "14th February 2021, 11:59PM",
    startDate: "14-2-2021",
    endDate: "14-2-2021"
  },
  {
    title: "Integration Bee",
    eventLink: "https://www.facebook.com/events/229772198613349/",
    description: `MathSoc cordially invites you to our 🐝Annual Integration Bee!🐝 - a fast-paced competition for those wanting to flex their integration skills. Open to anyone interested, participants will face off in a knockout competition by completing integrals until a winner prevails! Prizes are up for grabs and there will be plenty of space at the venue for social distancing.
    Good luck and may the best integral-cruncher win!`,
    imagePath: generateImagePath("integration_bee_2021.jpg"),
    location: "Keith Burrows Theatre",
    date: "9th February 2021, 3PM",
    startDate: "9-2-2021",
    endDate: "9-2-2021"
  },
  {
    title: "O-Week 2021",
    eventLink: "https://www.facebook.com/events/257374372628919/",
    description: `Another year, another O-Week! Stop by MathSoc's stall on campus to become an official member of our society, and pick up some ❗FREE MERCH❗ as a reward.
    We are also running a few events to kick off the year! Keep your 👀eyes peeled👀 for more details on our Facebook event pages.
    ✨ Integration Bee
    ✨ MathSoc Streams
    ✨ Subcommittee Applications
    Have a great O-Week! We can't wait to meet you.`,
    imagePath: generateImagePath("oweek_2021.jpg"),
    location: "UNSW Kensington Campus",
    date: "9-11th February 2021",
    startDate: "9-2-2021",
    endDate: "11-2-2021"
  },
  {
    title: "Peer Mentor Applications",
    eventLink: "https://www.facebook.com/events/459540218764685/",
    description: `Do you want to help new uni students ease into the daunting world of higher education? Are you willing to put yourself out there as a mentor to help guide these mentees and while you're at it, get a shiny AHEGS accreditation to flaunt on your resume?
    MathSoc is currently reaching out to recruit mentors for our ✨ 2021 Peer Mentoring Program. ✨ As a mentor, you will contribute largely to the mathematics community of UNSW! In order to be a mentor, you must be in second year or above. You are not required to be studying a Mathematics degree in order to be accepted! Good luck with your applications!`,
    imagePath: generateImagePath("peer_mentoring_2021.jpg"),
    location: "Apply here",
    locationURL: "http://bit.ly/3ovWbCP",
    date: "24th January 2021, 11:59PM",
    startDate: "24-1-2021",
    endDate: "24-1-2021"
  },
  {
    title: "EntSoc Talkshow Vol. 1 with Adam Driussi",
    eventLink: "https://www.facebook.com/events/4075748952480958/",
    description:
      "🙌 EntSoc x MathSoc x CSE Soc x EngSoc x MtrnSoc presents: our first-ever TALK SHOW with Adam Driussi! 🙌 Adam Driussi is the co-founder and CEO of Quantium. An Actuary with over 20 years of experience, Adam has overall responsibility for Quantium’s day-to-day operations and strategy.",
    imagePath: generateImagePath("talkshow_vol_1_2021.jpeg"),
    location: "Colombo Theatres",
    date: "16th June 2021, 4-5:30PM",
    startDate: "16-6-2021",
    endDate: "16-6-2021"
  },
  {
    title: "Mathematics of Poker",
    eventLink: "https://www.facebook.com/events/473295257301669",
    description:
      "UNSW MathSoc and SIG are inviting STEM students to our ‘Mathematics of Poker’ talk and pizza night. Come hear from our traders about maths, poker and their connection to trading, and play some casual poker while being mentored by the very best. You are highly encouraged to attend if you are in your final or penultimate year as this might be the career move that you’re looking for!",
    imagePath: generateImagePath("mathematics_of_poker_2021.jpeg"),
    location: "SIG Office",
    date: "9th June 2021, 5:30-8:00PM",
    startDate: "9-6-2021",
    endDate: "9-6-2021"
  },
  {
    title: "Piece of Mind Competition",
    eventLink: "https://www.facebook.com/events/1682361398630801",
    description: `Introducing ♟ Piece of Mind ♟! UNSW Chess Club and UNSW MathSoc 🤓 are hosting our first ever problem solving collab to get you pumped for the term. Come and flex 💪 that big brain 🧠 with your friends (if you have any 😩) or enter by yourself and join some friendly strangers 🍬 🚙 and win some juicy prizes 🤑🤑🤑. Snacks will also be provided, so come and get a 🌟FREE🌟 bite 🍪🍕!
    This event will run for about 2 hours, and you will be competing in teams of four against other teams to collect points by solving chess-based mathematics problems 👩‍🔬. Prizes will be given for first, second and third places. Entries are limited, so sign up fast before spots are taken🏃‍♂️🏃‍♀️💨.`,
    imagePath: generateImagePath("piece_of_mind_2021.jpeg"),
    location: "Mathews 302, 303, and 306",
    date: "6th June 2021, 3PM",
    startDate: "6-6-2021",
    endDate: "6-6-2021"
  },
  {
    title: "Weekly Study Sessions",
    eventLink: "https://www.facebook.com/events/332716108424609",
    description: `Are you worried you will fall behind in Term 2? Are you also feeling a bit lonely after many terms of online classes? If the answer is yes to any one of these, then here is a solution for you… presenting MathSoc's Weekly Study Sessions! Here you can meet new people whilst being productive!
    These study sessions are held at uni every Wednesday where anyone can come and chill and/or study. The event is not exclusive to maths students. Each session is 3 hours long, however you are welcome to come and go whenever you’d like.
    We hope to see you there! 🤩`,
    imagePath: generateImagePath("weekly_study_session_t2_2021.jpeg"),
    location: "Blockhouse G16",
    date: "Every Wednesday (Weeks 1 - 10) 2-5PM",
    startDate: "2-6-2021",
    endDate: "4-8-2021"
  },
  {
    title: "2021 MathSoc Merchandise",
    eventLink: "https://www.facebook.com/events/337177148007511",
    description: `MathSoc’s got you covid year-round with our 2021 Merchandise, designed to keep mew cozy and snug in our soft kitty hoodies as well as comfortable and active in our returning cowculator shirts from this year's O-Week.
    Don’t be left feline high and dry - if you're looking for the purr-fect way to keep warm AND flex your fashion game to your furr-ends, make sure to grab one before they're all sold out.`,
    imagePath: generateImagePath("merchandise_2021.jpg"),
    location: "Store",
    locationURL: "https://unsw-mathematics-society.square.site/",
    date: "11th July 2021",
    startDate: "11-7-2021",
    endDate: "11-7-2021"
  },
  {
    title: "League of Legends Tournament",
    eventLink: "https://www.facebook.com/events/523173728826405",
    description: `MathSoc's got your back in quarantine, with a LEGENDARY online event that's LEAGUES better than anything you've ever seen. 👀
    Our League of Legends Tournament will be running over the course of TWO DAYS, where 8 teams of 5 players will be battling it out in an elimination-style tournament to show off their skills and win the dazzling PRIZES that are up for grabs for the winning team. 🏆
    So what are you waiting for! Sign up below - either in a premade team, or as an individual (individuals will then be sorted into a team). Good luck and may the best team win!`,
    imagePath: generateImagePath("lol_tournament_2021.jpg"),
    location: "Twitch",
    date: "Wednesday 7th July & Thursday 8th July (Week 6)",
    startDate: "7-7-2021",
    endDate: "7-7-2021"
  },
  {
    title: "2021 FMAA Stem Alternate Pathways Evening",
    eventLink: "https://www.facebook.com/events/469298847502047",
    description: `Are you a STEM (Science, Technology, Engineering or Maths) student curious about a pathway to business? Or are you still unsure about what path you want to take after uni and would like to learn more about the opportunities available?
    Either way, FMAA UNSW invites you to the FMAA STEM Alternate Pathways Evening, to help you discover the endless possibilities that a STEM degree can lead to.
    The evening will feature a panel discussion with a live Q&A by STEM background representatives from Australia’s leading firms across diverse industries, including management consulting, banking, asset management and professional services.
    We encourage all STEM students (no business background required) to register for this event!`,
    imagePath: generateImagePath("fmaa_stem_2021.jpg"),
    location: "Zoom",
    date: "Wednesday, 7th July 6-8PM",
    startDate: "7-7-2021",
    endDate: "7-7-2021"
  },
  {
    title: "Intro to R",
    eventLink: "https://www.facebook.com/events/494177305194067",
    description:
      "R is a free and powerful statistical software, and is widely used in both uni courses and the workforce. The workshop will cover what you can do with R, how easy it is to use it, and show key functions in data handling and plotting.",
    imagePath: generateImagePath("intro_to_r_2021.jpg"),
    location: "Zoom",
    date: "Tuesday 6th July 2-4PM",
    startDate: "6-7-2021",
    endDate: "6-7-2021"
  },
  {
    title: "Careers in Consulting",
    eventLink: "https://www.facebook.com/events/2657273001237201",
    description:
      "Ever thought about becoming a consultant? Don’t know what the consulting industry is like? Curious about how your STEM degree can help you become a ✨star consultant✨?\nUNSW MathSoc is proud to present Careers in Consulting, our Q&A panel discussion featuring representatives from the following distinguished consulting firms:\n🌟 Servian\n🌟 Deloitte\n🌟 EY\nWe’ll be diving into various topics regarding consulting, such as what the average day in a life of a consultant looks like, what are the most valuable soft and technical skills in their consulting toolkit, how they familiarise themselves with a new industry to tackle a new project, and many more insightful topics!\nIf you have any of your own burning questions, or are just simply curious about other aspects of the consulting industry, then don’t worry, because there will be a section at the end for YOUR questions!\nRegister below for the Zoom link to the event!",
    imagePath: generateImagePath("careers_in_consulting_2021.jpg"),
    location: "Zoom",
    date: "29th July 2021, 4-5PM",
    startDate: "29-7-2021",
    endDate: "29-7-2021"
  },
  {
    title: "Exploring Mathematics at UNSW",
    eventLink: "https://www.facebook.com/events/496876828053416",
    description:
      "Not sure about which Math major to choose? Curious about the difficulty of Math courses later on in your degree? Need advice on how to survive UNSW Math & Stats degrees?\nIf you've ever asked yourself questions like these, wonder no more! MathSoc is proud to present Exploring Mathematics at UNSW, a Q&A panel discussion featuring some of our very own experienced MathSoc alumni who have nearly finished their Math degrees, and are here to guide you along your journey!\nWe’ll be going through various topics about the experience of doing Math & Stats at UNSW, such as the different majors available to choose from, what honours year is like, what the most interesting Math/Stats courses are, and many more insightful things!\nIn fact, you can also bring your questions to the discussion floor with the panellists! So make sure to come prepared with your juiciest questions 😳😳.",
    imagePath: generateImagePath("exploring_mathematics_at_unsw_2021.jpg"),
    location: "Zoom",
    date: "22nd July 2021, 7-8:30pm",
    startDate: "22-7-2021",
    endDate: "22-7-2021"
  },
  {
    title: "Fouriers Feud",
    eventLink: "https://www.facebook.com/events/532493108001312",
    description:
      "We surveyed 100 people and the top 8 answers are on the board. The question: what is the best way for UNSW students to spend their lockdown? The top answer is... ATTENDING MATHSOC EVENTS! 😍\nWelcome, one and all, to Fourier's Feud* - MathSoc's very own game show! (with absolutely no relation to Family Feud.) This event aims to keep you on your toes by testing your quick thinking, general knowledge and teamwork skills.\nOur event will have 🌟4 teams🌟 of up to 5 members each going head-to-head in several rounds of Fourier's Feud, all for the chance of winning a special something from our 🌟prize pool🌟. If you are applying solo or as a team of less than 5, you will be assigned to a team.\nAnd if you don't want to compete, become a member of our live audience!\n*No Mathematics knowledge required.",
    imagePath: generateImagePath("fouriers_feud_2021.jpg"),
    location: "Zoom",
    date: "8th September 2021, 5:30-7:30pm",
    startDate: "8-9-2021",
    endDate: "8-9-2021"
  },
  {
    title: "MATH1081 Revision Workshop",
    eventLink: "https://www.facebook.com/events/3695611740565357/",
    description:
      "Scared of maths? Scared of exams? Scared of math exams? Well, be scared no more with MathSoc’s MATH1081 revision workshop!!!\n    Gain the confidence you need to ace those final exams with some brainy math students who went through the exact same thing not too long ago. Don’t pass up the FREE opportunity to learn the secrets and tricks to tackling the toughest final exam questions.\n    Cram the week before rather than the night before! You don’t even have to leave your bed!",
    imagePath: generateImagePath("math1081_revision_workshop_2021.jpg"),
    location: "Keith Burrows & YouTube",
    date: "26th & 27th April 2021, 1-3PM",
    startDate: "26-4-2021",
    endDate: "27-4-2021"
  },
  {
    title: "MATH1231 1241 Revision Workshop",
    eventLink: "https://www.facebook.com/events/1524857484521368",
    description:
      "Are you worried that you'll get matric-ked by the complex concepts taught in MATH1231/1241? Heard worrying things about the final exam and don't want to send your WAM to L'Hospital? Come along and revise with us instead of cramming and stressing the night before your final exam 😎\nMathSoc will get you exam-ready by revising the important concepts and then teaching you how to tackle past exam questions to make sure there will be no surprises when you take the real MATH1231/1241 test! We'll be splitting the workshop into two sessions: one for the course's calculus content and one for algebra content.",
    imagePath: generateImagePath("math1231_1241_revision_workshop_2021.jpg"),
    location: "YouTube",
    date: "9th August 2021 3-5PM, 10th August 2021 12-2PM",
    startDate: "9-8-2021",
    endDate: "10-8-2021"
  },
  {
    title: "MATH2121 2221 Revision Seminar",
    eventLink: "https://www.facebook.com/events/414353703280228",
    description:
      "In case you haven’t noticed, I’m weird 🙄 I’m a weirdo 🤠 I don’t fit in and I don’t WANT to fit in 😔. I'm not ORDINARY... I'm different... some might say I'm differential.\" -MATH2121/2221\nMathSoc presents our ✨MATH2121/2221 Revision Seminar✨ for Term 2! This seminar will run over 2x two hour sessions to give you the best chance of understanding MATH2121/2221 course content to the fullest. We will also be covering key exam questions that may pop up in your final, as well as useful techniques to tackle them.\nSo, what are you waiting for? Put the POWER in power series, switch your brain on, and come join our sessions! It's an ELEMENTARY decision.",
    imagePath: generateImagePath("math2121_2221_revision_seminar_2021.jpg"),
    location: "YouTube",
    date: "10th & 12th August 2021, 3-5PM",
    startDate: "10-8-2021",
    endDate: "12-8-2021"
  },
  {
    title: "MATH2400 Revision Seminar",
    eventLink: "https://www.facebook.com/events/518206899398675",
    description:
      "Falling behind in MATH2400? Want to get the best marks you possibly can? MathSoc's presents our T2 ✨MATH2400 Revision Seminar.✨\nRun over the course of 2x two hour sessions, this seminar will get you prepped for your upcoming exam by covering all course content, as well as going over key exam questions and life saving techniques.\n",
    imagePath: generateImagePath("math2400_revision_seminar_2021.jpg"),
    location: "YouTube",
    date: "3rd August 2021 2-4PM, 6th August 2021 3-5PM",
    startDate: "3-8-2021",
    endDate: "6-8-2021"
  },
  {
    title: "MATH2501 2601 Revision Seminar",
    eventLink: "https://www.facebook.com/events/1234679803669959",
    description:
      "Are you worried about MATH2501/2601 damaging your WAM? Does the thought of final exams approaching make your heart go boom boom? Well, stress no more because MathSoc has the solution for you! Presenting… our ✨MATH2501/2601 Revision Seminar!✨\nMathSoc is offering two 2-hour revision classes to help you ace your final exams. In these revision classes, you will learn how to confidently tackle common exam questions with the best strategies. Best of all, these revision seminars are completely free!",
    imagePath: generateImagePath("math2501_2601_revision_seminar_2021.jpg"),
    location: "YouTube",
    date: "9th & 12th August 2021, 12-2PM",
    startDate: "9-8-2021",
    endDate: "12-8-2021"
  },
  {
    title: "MATH2801 2901 Revision Seminar",
    eventLink: "https://www.facebook.com/events/218340043528221",
    description:
      "On the fence about coming to a MathSoc revision seminar? Allow us to POSITIVELY SKEW your attitude in the right direction... Statistically speaking, attending our MATH2801/2901 seminar grants you a significantly higher chance of securing the best marks possible in your final exam.\nSpeaking of statistics... MathSoc presents our ✨MATH2801/2901 Revision Seminar✨ for T2. This two part seminar will be covering all course content, while exposing you to key exam questions and life saving techniques.",
    imagePath: generateImagePath("math2801_2901_revision_seminar_2021.jpg"),
    location: "YouTube",
    date: "7th & 11th August 2021, 3-5PM",
    startDate: "7-8-2021",
    endDate: "11-8-2021"
  },
  {
    title: "STEM Industry Mentoring Program",
    eventLink: "https://www.facebook.com/events/1261760917595142",
    description:
      "🧐Want to hear more about your future career pathways?\n🤩Looking for advice from experienced industry experts and leaders?\n🥰Want to bond with like-minded students, whilst forging your own career?\nIf you answered 𝐘𝐄𝐒 to any of the above, or even if you just want some more insights into what your future could look like in the STEM industry, apply now to our 𝗦𝗧𝗘𝗠 𝗜𝗻𝗱𝘂𝘀𝘁𝗿𝘆 𝗠𝗲𝗻𝘁𝗼𝗿𝗶𝗻𝗴 𝗣𝗿𝗼𝗴𝗿𝗮𝗺!",
    imagePath: generateImagePath("stem_industry_mentoring_program_2021.jpg"),
    location: "Apply here",
    locationURL: "https://forms.gle/1WGc1niRfNqUbGQe6",
    date: "27th August - 10th September 2021",
    startDate: "27-8-2021",
    endDate: "10-9-2021"
  },
  {
    title: "The World of Trading Part 2",
    eventLink: "https://www.facebook.com/events/539550180809570",
    description:
      "Are you interested in using your collaborative skills and passion for the markets in a fast-paced environment? Are you curious to how your quantitative and analytical skills can be applied in a trading firm?\nDue to popular demand, UNIT UNSW and UNSW MathSoc are proud to bring back The World of Trading (Part 2), a Q&A panel discussion featuring representatives from:\n⭐ SIG\n⭐ Tibra\n⭐ Akuna Capital\nThe event will kick off with questions from UNIT UNSW and UNSW MathSoc, where the representatives will share their experiences working in a trading firm, their career journey and advice for students interested in a career in trading.\nThe event will finish off with open Q&A from the audience, where you will have the chance to get your burning questions answered.",
    imagePath: generateImagePath("the_world_of_trading_part_2_2021.jpg"),
    location: "Zoom",
    date: "2nd August 2021, 5:30-7PM",
    startDate: "2-8-2021",
    endDate: "2-8-2021"
  },
  {
    title: "Virtual Scavenger Hunt - Scour the Net!",
    eventLink: "https://www.facebook.com/events/182366417362039",
    description:
      "Covid lockdown got you yearning to travel 🛫? Well, get your friends together and join our road trip 🚗 across the internet at MathSoc’s (Virtual) Scavenger Hunt - Scour the Net! Take a tour through a series of puzzles 🧩 and just like your midterms, we’ll be searching through the net 🌐 for all the answers! There is absolutely no limit to what you can search. Get a group of your friends for a team of 3-6 or compete as a lone wolf! Keen to see you there! 🙂",
    imagePath: generateImagePath("virtual_scavenger_hunt_2021.jpg"),
    location: "Discord",
    locationURL: "https://discord.gg/F5PHHWHk",
    date: "30th September 2021, 6:30-8PM",
    startDate: "30-9-2021",
    endDate: "30-9-2021"
  },
  {
    title: "Data Modelling in Sports Wagering",
    eventLink: "https://www.facebook.com/events/547435696486153",
    description: `Find out where mathematics can take you! It's no surprise that your uni math knowledge can open up many potential career paths. In this event, we will be exploring one potential path by learning how ⚽sports wagering⚽ incorporates the mathematics of managing risks and probabilities.
    In our first edition of ⭐Seminal Seminars⭐, we invite data scientist Melinda Mortimer to the stage where she will be discussing the various ways that a wagering business leverages big data, from simulating live sporting matches to generating targeted campaigns.
    The seminar, followed by a live Q&A, will run for 1h 15mins. Although the maths involved is best suited to second and third year statistics students, much of the discussion is relevant for first year mathematics & statistics students. However, all are welcome!`,
    imagePath: generateImagePath("data_modelling_in_sports_2021.jpg"),
    location: "Zoom",
    date: "6th October 2021, 3-4:15PM",
    startDate: "6-10-2021",
    endDate: "6-10-2021"
  },
  {
    title: "Accelerate",
    eventLink: "https://www.facebook.com/events/4438215162903353",
    description: `Are you competitive and ready to use your big brain? 🧠
    This event is for you! All you have to do is solve a series of maths questions which don’t require any knowledge taught at uni! 🤯🤯There will be $75 worth of Uber Eats vouchers up for grabs so you better not miss out! So are you ready to Accelerate? 🏃🏻‍♀️ 🏃🏻`,
    imagePath: generateImagePath("accelerate_2021.jpg"),
    location: "Zoom",
    date: "8th October 2021, 5-6PM",
    startDate: "8-10-2021",
    endDate: "8-10-2021"
  },
  {
    title: "MathSoc Hoodie THROWBACK SALE",
    eventLink: "https://www.facebook.com/events/535523234242404",
    description: `Looking to DIFFERENTIATE yourself from the crowd? Then look no further! Our 🔥Anti-Derivative Derivative Hoodies🔥 are back to become an INTEGRAL part of your wardrobe. But they won't be around for long! 🤯ONLY 63🤯 of our ADDC hoodie SERIES are available for purchase.
    And that's not all! Jump over to our website to see what other limited stock items are available from our past collections. 👀`,
    imagePath: generateImagePath("throwback_sale_2021.jpg"),
    location: "Store",
    date: "17st October 2021",
    startDate: "1-10-2021",
    endDate: "17-10-2021"
  },
  {
    title: "MathSoc x Servian Poker Night",
    eventLink: "https://www.facebook.com/events/955500351719146",
    description: `❗❗Calling all poker maestros and enthusiasts ❗❗
Bluff your way to the top with MathSoc's online ♣️♦️poker night ♣️♥️
Unleash your competitive spirit with a multi round poker tournament to crown MathSoc's best poker players. With prizes up for grabs and the opportunity to network with Servian Representatives, this is an opportunity you don't want to miss!`,
    imagePath: generateImagePath("servian_poker_2021.jpg"),
    location: "Zoom",
    date: "21st October 2021, 5:30-7:30PM",
    startDate: "21-10-2021",
    endDate: "21-10-2021"
  },
  {
    title: "MathSoc Annual General Meeting",
    eventLink: "https://www.facebook.com/events/1072834699788313",
    description: `The Executives for UNSW Mathematics Society are proud to present our Annual General Meeting for 2021! With this year once again feeling the impacts of the pandemic, we have strived to connect the community and support students in their studies.
We invite all members of the MathSoc community to our AGM hosted on Zoom!`,
    imagePath: generateImagePath("agm_2021.jpg"),
    location: "Zoom",
    locationURL: "https://unsw.zoom.us/j/81643281850",
    date: "22nd October 2021, 6-8PM",
    startDate: "22-10-2021",
    endDate: "22-10-2021"
  },
  {
    title: "UNSW Interfaculty Presents - Psychometric Squid Game",
    eventLink: "https://www.facebook.com/events/261639219309401/?ti=ls",
    description: `💵Looking for a quick way to win 45.6 billion won?💵 Or a sure way to 𝗘𝗔𝗥𝗡 it? 🤩
    The VIPs have arrived and the games are ready! 𝗦𝗖𝗜𝗦𝗢𝗖, 𝗘𝗻𝗴𝗦𝗼𝗰, 𝗠𝗮𝘁𝗵𝗦𝗼𝗰 and 𝗗𝗮𝘁𝗮𝗦𝗼𝗰 are glad to present ✨𝙋𝙨𝙮𝙘𝙝𝙤𝙢𝙚𝙩𝙧𝙞𝙘 𝙎𝙦𝙪𝙞𝙙 𝙂𝙖𝙢𝙚✨.`,
    imagePath: generateImagePath("squid_game_2021.jpg"),
    location: "Zoom",
    date: "3rd November 2021, 6–8pm",
    startDate: "3-11-2021",
    endDate: "3-11-2021"
  }
];

export default eventData;
