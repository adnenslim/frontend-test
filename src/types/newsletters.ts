export interface NewsletterItem {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

export interface GroupedNewsletters {
  [site: string]: NewsletterItem[];
}
