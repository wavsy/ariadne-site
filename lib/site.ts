export const EMAIL = "wavsy.dev@gmail.com";

// Web3Forms access key for the contact form (https://web3forms.com). It is
// made to be public. While it is empty the form uses FormSubmit instead.
export const WEB3FORMS_KEY = "997fb2b1-99ea-4d1e-879f-afa2c2510369";

export const LINKS = {
  hackathon: "https://events.eurodefense.tech/prishtina-2026",
  edth: "https://eurodefense.tech/",
  wavsy: "https://wavsy.dev/",
  linkedin: "https://www.linkedin.com/company/ariadne-patrol/",
};

export const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/research/", label: "Research" },
  { href: "/name/", label: "The name" },
  { href: "/story/", label: "Our story" },
  { href: "/#team", label: "Team" },
];

export type Member = {
  name: string;
  initials: string;
  linkedin: string;
  avatar?: string;
};

export const TEAM: Member[] = [
  {
    name: "Nikolai Todorov",
    initials: "NT",
    linkedin: "https://www.linkedin.com/in/nikolaitodorov/",
    avatar: "/team/nikolai.jpg",
  },
  {
    name: "Kiril Ivanov",
    initials: "KI",
    linkedin: "https://www.linkedin.com/in/kiril-ivanov-470a852b0/",
    avatar: "/team/kiril.jpg",
  },
  {
    name: "Vladimir Barev",
    initials: "VB",
    linkedin: "https://www.linkedin.com/in/vadimir-stoyanov-barev-sofia/",
    avatar: "/team/vladimir.jpg",
  },
  {
    name: "Todor Petrov",
    initials: "TP",
    linkedin: "https://www.linkedin.com/in/todor-petrov-748783315/",
    avatar: "/team/todor.jpg",
  },
  {
    name: "Dimitar Barev",
    initials: "DB",
    linkedin: "https://www.linkedin.com/in/dimitarbarev/",
    avatar: "/team/dimitar.jpg",
  },
];
