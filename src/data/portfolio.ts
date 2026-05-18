export type Work = {
  title: string;
  slug: string;
  year: string;
  category: string[];
  description: string;
  image: string;
  featured: boolean;
};

export type Project = {
  title: string;
  slug: string;
  status: "进行中" | "已完成" | "研究";
  tags: string[];
  description: string;
  count: string;
  cover: string;
};

export const tags = [
  "全部",
  "角色",
  "机械",
  "载具",
  "场景",
  "世界观",
  "练习"
];

export const worksData: Work[] = [
  {
    title: "机械蛋",
    slug: "machine-egg",
    year: "2026",
    category: ["机械", "道具", "世界观"],
    description: "带有生物感细节的圆润工坊设备，像是日常里真的会被使用的小机器。",
    image: "/images/machine-egg.jpg",
    featured: true
  },
  {
    title: "迷你坦克",
    slug: "mini-tank",
    year: "2026",
    category: ["载具", "机械"],
    description: "用于跑腿、野外维修和奇怪配送任务的小型实用装甲载具。",
    image: "/images/mini-tank.jpg",
    featured: true
  },
  {
    title: "拉面餐车",
    slug: "ramen-vehicle",
    year: "2025",
    category: ["载具", "场景", "世界观"],
    description: "像一小片街区一样移动的拉面摊，带着温热蒸汽和生活感。",
    image: "/images/ramen-vehicle.jpg",
    featured: true
  },
  {
    title: "城市色彩研究",
    slug: "city-color-study",
    year: "2025",
    category: ["场景", "练习"],
    description: "为明亮日常城市做的街景色彩记录，保留一些机械生活痕迹。",
    image: "/images/city-car.jpg",
    featured: true
  },
  {
    title: "乡下小店",
    slug: "country-shop",
    year: "2025",
    category: ["场景", "世界观"],
    description: "给旅人、备用零件和午后点心准备的安静地方小店。",
    image: "/images/country-shop.jpg",
    featured: true
  },
  {
    title: "雪地旅程",
    slug: "snow-journey",
    year: "2024",
    category: ["场景", "角色"],
    description: "带着轻装备和冬日安静感的旅行场景。",
    image: "/images/snow-journey.jpg",
    featured: true
  },
  {
    title: "兴奋书店",
    slug: "book-store",
    year: "2024",
    category: ["场景", "世界观"],
    description: "塞满地图、野外手册和不可思议委托的书店。",
    image: "/images/book-store.jpg",
    featured: true
  },
  {
    title: "轻战术少女",
    slug: "tactical-girl",
    year: "2024",
    category: ["角色", "服装"],
    description: "轻战术装备方向的角色设计，强调实用、友好和可亲近的轮廓。",
    image: "/images/tactical-girl.jpg",
    featured: true
  },
  {
    title: "旅人少女",
    slug: "traveler-girl",
    year: "2023",
    category: ["角色", "世界观"],
    description: "为地方道路、小型维修和偶遇故事准备好的年轻旅人。",
    image: "/images/traveler-girl.jpg",
    featured: true
  },
  {
    title: "Bang!",
    slug: "bang",
    year: "2023",
    category: ["角色", "练习"],
    description: "带有图形节奏和明快色彩的角色瞬间。",
    image: "/images/bang.jpg",
    featured: false
  }
];

export const projectsData: Project[] = [
  {
    title: "机械工坊",
    slug: "mecha-workshop",
    status: "进行中",
    tags: ["机械", "道具", "工坊"],
    description: "圆润机械、实用机器人和工坊设备。",
    count: "08 张图 / 12 张草图",
    cover: "/images/machine-egg.jpg"
  },
  {
    title: "日常载具",
    slug: "daily-vehicles",
    status: "进行中",
    tags: ["载具", "日常"],
    description: "小坦克、餐车、移动小店和奇怪但实用的载具。",
    count: "06 张图 / 10 张草图",
    cover: "/images/ramen-vehicle.jpg"
  },
  {
    title: "旅行札记",
    slug: "travel-notes",
    status: "研究",
    tags: ["场景", "氛围"],
    description: "街道、雪地、地方小店和安静风景。",
    count: "12 张图 / 18 条笔记",
    cover: "/images/snow-journey.jpg"
  },
  {
    title: "角色档案",
    slug: "character-archive",
    status: "进行中",
    tags: ["角色", "服装"],
    description: "少女、旅人、工坊成员、动物伙伴与轻战术装备。",
    count: "15 个设计 / 20 张草图",
    cover: "/images/traveler-girl.jpg"
  },
  {
    title: "世界碎片",
    slug: "world-fragments",
    status: "已完成",
    tags: ["世界观", "概念"],
    description: "可能继续生长成更大原创世界的小型叙事片段。",
    count: "09 个片段 / 05 张地图",
    cover: "/images/country-shop.jpg"
  }
];

export const socialLinks = [
  { label: "ArtStation", href: "https://artstation.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Bilibili", href: "https://bilibili.com/" },
  { label: "小红书", href: "https://www.xiaohongshu.com/" }
];

export const contactEmail = "hello@ekoubird.work";
