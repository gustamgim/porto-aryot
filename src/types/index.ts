export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: 'personal' | 'couple' | 'group' | 'product' | 'wedding';
  title?: string;
}

export interface VideoItem {
  id: string;
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
  type: 'local' | 'youtube';
  youtubeId?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export type PhotoCategory = 'all' | 'personal' | 'couple' | 'group' | 'product' | 'wedding';
