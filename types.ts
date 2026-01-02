
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  name: string;
  imageUrl: string;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}
