type AppCardListItem = Array<{
  id: number;
  imgSrc: string;
  href: string;
  title: string;
  description: string;
  technologies: Array<string>;
}>;

export const appCardList: AppCardListItem = [
  {
    id: 1,
    imgSrc: "/img/pitangoux.png",
    href: "https://www.pitangoux.com/",
    title: "PitangoUX",
    description:
      "PitangoUX is an end-to-end UX/UI service agency that I used to work for as a Full Stack Developer.",
    technologies: [
      "React",
      "Redux",
      "Zustand",
      "Next.js",
      "Vue.js",
      "Laravel",
      "Express",
      "Nest.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    id: 2,
    imgSrc: "/img/yna.png",
    href: "https://www.yna.co.il/",
    title: "Y&A",
    description:
      "A software company that I used to work for as a Full Stack Developer.",
    technologies: [
      "React",
      "Redux",
      "Zustand",
      "Next.js",
      "Vue.js",
      "Laravel",
      "Express",
      "Nest.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    id: 3,
    imgSrc: "/img/recipes-and-ingredients.png",
    href: "https://recipes-and-ingredients.vercel.app/",
    title: "Recipes & Ingredients",
    description:
      "A site where you could post your own recipes using our ingredients, also supports fetching recipes from a youtube video.",
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Sanity",
      "TailwindCSS",
      "Zustand",
      "Clerk",
    ],
  },
  {
    id: 4,
    imgSrc: "/img/electronic-music-calculators.png",
    href: "https://electronic-music-calculators.vercel.app/",
    title: "Electronic Music Calculators",
    description:
      "This site brings together useful calculators for electronic music production, from tuning delay times to musical notes, to calculating kick drum lengths, tempo-based delay times, and BPM-to-Hz conversion.",
    technologies: ["Next.js 15", "React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 5,
    imgSrc: "/img/everx-algoplanner.png",
    href: "https://www.linkedin.com/company/ever-x/",
    title: "AlgoPlanner",
    description:
      "EverX (formerly known as AlgoPlanner) is a platform for supply chain planning teams to plan, build and customize automations.",
    technologies: [
      "Electron",
      "React",
      "Nest.js",
      "TypeScript",
      "DynamoDB",
      "Material UI",
      "TailwindCSS",
      "SASS",
    ],
  },
  {
    id: 6,
    imgSrc: "/img/fastjob.png",
    href: "https://fastjob.vercel.app/",
    title: "Fast Job",
    description:
      "A platform where you can post your own jobs, or apply for existing ones.",
    technologies: [
      "Next.js",
      "React",
      "Nest.js",
      "TypeScript",
      "MongoDB",
      "Material UI",
      "TailwindCSS",
      "SASS",
    ],
  },
  {
    id: 7,
    imgSrc: "/img/enter-catalog.png",
    href: "https://enter-catalog-frontend.onrender.com/",
    title: "Enter Catalog",
    description:
      "A users catalog of the company ENTER, which provides a professional, supportive and promoting space for people with employment barriers.",
    technologies: [
      "Angular",
      "Angular Material",
      "SASS",
      "Nest.js",
      "TypeScript",
      "PostgreSQL",
      "JWT & Passport",
    ],
  },
  {
    id: 8,
    imgSrc: "/img/outerz.jpg",
    href: "https://github.com/ron1232/outerz/",
    title: "OuterZ",
    description: "A small ecommerce site that I built back in 2021.",
    technologies: ["React", "Bootstrap", "Redux", "Express.js", "JWT"],
  },
  {
    id: 9,
    imgSrc: "/img/outerx.jpg",
    href: "https://github.com/ron1232/outerx",
    title: "OuterX",
    description: "A small ecommerce site that I built back in 2021.",
    technologies: ["Laravel", "PHP", "MySQL"],
  },
];
