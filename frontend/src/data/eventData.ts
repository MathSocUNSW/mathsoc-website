// NOTE: if a locationURL is not provided, the links for detected social keywords (e.g. YouTube, Discord) will be automatically added

export interface eventDetails {
  title: string; // event title
  eventLink: string; // link to Facebook event
  description: string; // event description
  imagePath: string; // path to event image
  location: string; // event location
  locationURL?: string; // (optional) link for location
  date: string; // date string to be displayed
  startDate: string; // start date for rendering algorithm
  endDate: string; // end date for rendering algorithm
}

const eventData: eventDetails[] = [
  {
    title: "MATH1081 Revision Workshop",
    eventLink: "https://www.facebook.com/events/3695611740565357/",
    description: `Scared of maths? Scared of exams? Scared of math exams? Well, be scared no more with MathSoc’s MATH1081 revision workshop!!!
    Gain the confidence you need to ace those final exams with some brainy math students who went through the exact same thing not too long ago. Don’t pass up the FREE opportunity to learn the secrets and tricks to tackling the toughest final exam questions.
    Cram the week before rather than the night before! You don’t even have to leave your bed!`,
    imagePath: "/images/events/math1081_t1_revision_workshop_2021-min.jpg",
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
    imagePath: "/images/events/math2018_t1_revision_workshop-min.jpg",
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
    imagePath: "/images/events/math2089_t1_revision_workshop_2021-min.jpg",
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
    imagePath: "/images/events/math2111_t1_revision_seminar_2021-min.jpg",
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
    imagePath: "/images/events/math1131_t1_revision_workshop_2021-min.jpg",
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
    imagePath: "/images/events/camp_2021-min.jpg",
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
    imagePath: "/images/events/speed_friending_2021-min.png",
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
    imagePath: "/images/events/world_of_trading_2021-min.jpg",
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
    imagePath: "/images/events/pi_day_2021-min.jpg",
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
    imagePath: "/images/events/panelcast_2021-min.jpg",
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
    imagePath: "/images/events/latex_workshop_2021-min.jpg",
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
    imagePath: "/images/events/resume_workshop_2021-min.jpg",
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
    imagePath: "/images/events/puzzle_hunt_2021-min.png",
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
    imagePath: "/images/events/ice_skating_2021-min.jpg",
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
    imagePath: "/images/events/subcom_2021-min.png",
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
    imagePath: "/images/events/peer_mentee_2021-min.jpg",
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
    imagePath: "/images/events/integration_bee_2021-min.jpg",
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
    imagePath: "/images/events/oweek_2021-min.jpg",
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
    imagePath: "/images/events/peer_mentoring_2021-min.jpg",
    location: "Apply here",
    locationURL: "http://bit.ly/3ovWbCP",
    date: "24th January 2021 11:59PM",
    startDate: "24-1-2021",
    endDate: "24-1-2021"
  }
];

export default eventData;
