import { TimelineItem, PhotoItem } from '../types';
import toobuuImg from '../assets/images/toobuu_jaan_portrait_1786641946082.jpg';
import fahadImg from '../assets/images/fahad_raza_portrait_1786641957606.jpg';
import coupleImg from '../assets/images/couple_memory_1786641972531.jpg';

export const INITIAL_PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    url: toobuuImg,
    alt: 'Toobuu Jaan',
    caption: 'Toobuu Jaan ❤️',
    subtitle: 'Meri Choti Si Duniya',
    isPlaceholder: false,
  },
  {
    id: 'photo-2',
    url: fahadImg,
    alt: 'Fahad Raza',
    caption: 'Fahad Raza 💙',
    subtitle: 'Tumhara Fahad',
    isPlaceholder: false,
  },
  {
    id: 'photo-3',
    url: coupleImg,
    alt: 'Karachi to Punjab Love',
    caption: 'Punjab Se Karachi Tak ✨',
    subtitle: '20 Deno Ki Khoobsurat Yaadein',
    isPlaceholder: false,
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'tl-1',
    title: 'Woh Pehla Lamha ❤️',
    description: 'Tum Punjab aayi... main ne tumhein dekha... and pata nahi kyun dil tumhari taraf khinch gaya.',
    dateBadge: 'Day 1 in Punjab',
  },
  {
    id: 'tl-2',
    title: 'Baatein Shuru Hui 💙',
    description: 'Phir phone calls, WhatsApp messages aur choti choti baaton ne hum dono ko qareeb kar diya.',
    dateBadge: 'The Connection',
  },
  {
    id: 'tl-3',
    title: 'Woh Judaai Ka Lamha 🥺',
    description: 'Tumhari Ammi tumhein wapas Karachi le gayin. Tumhara Punjab se jaana hum dono ke liye bohat emotional tha.',
    dateBadge: 'Goodbye to Punjab',
  },
  {
    id: 'tl-4',
    title: 'Ab Bhi Saath 💙',
    description: 'Karachi aur Punjab ke darmiyan fasla zaroor hai, lekin humari baatein ab bhi humein qareeb rakhti hain.',
    dateBadge: 'Karachi ✈️ Punjab',
  },
];

export const STORY_PARAGRAPHS = [
  {
    id: 'st-1',
    text: 'Toobuu Jaan... kis ne socha tha ke <span class="text-blue-400 font-bold">Karachi se Punjab</span> aane wali ek larki meri zindagi mein itni khaas ban jayegi?',
  },
  {
    id: 'st-2',
    text: 'Main ne tumhein Punjab mein dekha... aur pata nahi us ek lamhe mein kya hua, lekin mera dil tumhari taraf khinch gaya.',
  },
  {
    id: 'st-3',
    text: 'Phir humari baat cheet shuru hui... phone calls, WhatsApp messages aur choti choti baatein.',
  },
  {
    id: 'st-4',
    text: 'Har guzarte din ke saath tum mere dil ke aur qareeb hoti gayi.',
  },
  {
    id: 'st-5',
    text: 'Hamari mulaqat ko abhi sirf <span class="text-blue-400 font-bold">20 din</span> hue hain, lekin ye 20 din mere liye bohat khaas ban gaye hain.',
  },
  {
    id: 'st-6',
    text: 'Phir woh waqt aaya jab tumhari Ammi tumhein wapas Karachi le gayin...',
  },
  {
    id: 'st-7',
    text: 'Tum Punjab se ja rahi thi, aur hum dono bohat emotional thay. Tum WhatsApp par mere saath bohat roi... aur sach kahun Toobuu Jaan, tumhara woh udaas hona main kabhi nahi bhool sakta.',
  },
  {
    id: 'st-8',
    text: 'Ab tum Karachi mein ho aur main Punjab mein... lekin distance ne humari baatein nahi rokein.',
  },
  {
    id: 'st-9',
    text: 'Hum phone par baat karte hain, WhatsApp par baatein karte hain, aur har baat ke saath mera tumhare liye pyaar aur bhi zyada hota ja raha hai.',
  },
  {
    id: 'st-10',
    text: 'Jagah badal gayi... lekin mere dil mein tumhari jagah kabhi nahi badli. ❤️',
  },
];

export const LETTER_CONTENT = {
  title: 'Tumhare Liye Ek Message 💌',
  subtitle: 'Fahad Raza ki taraf se Toobuu Jaan ke liye',
  salutation: 'Meri Toobuu Jaan ❤️',
  paragraphs: [
    'Mujhe nahi pata main apni feelings ko perfect words mein kaise bayan karun, lekin tumse milne ke baad mere andar bohat kuch badal gaya hai.',
    'Sirf 20 din mein tum meri zindagi ka ek bohat khaas hissa ban gayi ho. Tumhari har call, har message aur tumhari har choti si baat mere liye bohat important hai.',
    'Mujhe pata hai tum Karachi mein ho aur main Punjab mein. Humare darmiyan fasla hai, lekin main nahi chahta ke ye fasla humari kahani ka faisla kare.',
    'Toobuu Jaan, ek baat hamesha yaad rakhna:',
  ],
  highlightPromise: 'Main tumhare liye Karachi aaunga.',
  afterPromise: [
    'Pata nahi woh din kab aayega, lekin jab aaunga to dil se aaunga... sirf tumse milne ke liye. ❤️',
    'Tab tak mere saath baat karti rehna, muskurati rehna, aur ye yaad rakhna ke Punjab mein koi hai jo tumhein bohat yaad karta hai.',
  ],
  signature: '— Tumhara Fahad ❤️',
};

export const SURPRISE_CONTENT = {
  header: '💙🖤 Toobuu Jaan 🖤💙',
  message: 'Chahe Karachi kitna bhi door ho...\ntum hamesha mere dil ke bohat qareeb rahogi.\n\nI LOVE YOU ❤️',
  signoff: '— Tumhara Fahad',
};
