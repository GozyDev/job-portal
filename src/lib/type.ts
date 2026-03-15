export type TechStack = {
  name: string;
  icon: string;
};

export type TeamMember = {
  name: string;
  role: string;
  src: string;
};

export type Perk = {
  icon: string;
  title: string;
  description: string;
};

export type Contact = {
  icon: string;
  label: string;
};

export type Images = {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
};

export type Job = {
  id: string;

  // List Page
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  salary: string;
  type: string;
  postedAt: string;
  experience: string;

  // Detail Page
  companyProfile: string;
  website: string;
  foundedDate: string;
  employeeCount: string;
  industry: string;

  techStack: TechStack[];
  team: TeamMember[];
  perks: Perk[];
  contact: Contact[];

  images: Images;
};
