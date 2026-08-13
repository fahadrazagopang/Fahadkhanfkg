export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  dateBadge?: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  caption: string;
  subtitle?: string;
  isPlaceholder?: boolean;
}

export interface CustomMemoryNote {
  id: string;
  author: 'Fahad' | 'Toobuu' | string;
  message: string;
  timestamp: string;
  likes: number;
}
