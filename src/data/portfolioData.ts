import type { Photo, VideoItem, Stat, Service, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { value: '3+', label: 'Tahun Pengalaman' },
  { value: '150+', label: 'Project Selesai' },
  { value: '80+', label: 'Klien Puas' },
];

export const SERVICES: Service[] = [
  {
    icon: '📷',
    title: 'Photography',
    description: 'Foto personal, couple, keluarga, dan event dengan sentuhan artistik dan profesional.',
  },
  {
    icon: '🎬',
    title: 'Videography',
    description: 'Pembuatan video cinematic berkualitas tinggi untuk berbagai kebutuhan.',
  },
  {
    icon: '✂️',
    title: 'Video Editing',
    description: 'Edit video profesional dengan color grading dan motion graphics.',
  },
  {
    icon: '🎥',
    title: 'Wedding & Event',
    description: 'Dokumentasi momen spesial Anda dengan pendekatan storytelling yang emosional.',
  },
];

// Photos — akan tersedia setelah user memindahkan foto ke public/photos/
export const PHOTOS: Photo[] = [
  // Personal
  { id: 'p1', src: '/photos/personal/IMG_9663.jpg', alt: 'Personal Shot 1', category: 'personal', title: 'Portrait I' },
  { id: 'p2', src: '/photos/personal/IMG_9668.jpg', alt: 'Personal Shot 2', category: 'personal', title: 'Portrait II' },
  { id: 'p3', src: '/photos/personal/IMG_9671.jpg', alt: 'Personal Shot 3', category: 'personal', title: 'Portrait III' },
  { id: 'p4', src: '/photos/personal/SNP_1834.jpg', alt: 'Personal Shot 4', category: 'personal', title: 'Mood I' },
  { id: 'p5', src: '/photos/personal/SNP_1893 (2).jpg', alt: 'Personal Shot 5', category: 'personal', title: 'Mood II' },
  { id: 'p6', src: '/photos/personal/SNP_1914.jpg', alt: 'Personal Shot 6', category: 'personal', title: 'Mood III' },
  { id: 'p7', src: '/photos/personal/SNP_3369 (2).jpg', alt: 'Personal Shot 7', category: 'personal', title: 'Street I' },
  { id: 'p8', src: '/photos/personal/SNP_3376 (2).jpg', alt: 'Personal Shot 8', category: 'personal', title: 'Street II' },
  { id: 'p9', src: '/photos/personal/mba-item_01.jpg', alt: 'Personal Shot 9', category: 'personal', title: 'Fashion I' },
  { id: 'p10', src: '/photos/personal/mba-item_02.jpg', alt: 'Personal Shot 10', category: 'personal', title: 'Fashion II' },
  { id: 'p11', src: '/photos/personal/mba-item_03.jpg', alt: 'Personal Shot 11', category: 'personal', title: 'Fashion III' },
  { id: 'p12', src: '/photos/personal/mba-item_04.jpg', alt: 'Personal Shot 12', category: 'personal', title: 'Fashion IV' },
  { id: 'p13', src: '/photos/personal/mba-item_05.jpg', alt: 'Personal Shot 13', category: 'personal', title: 'Fashion V' },
  // Couple
  { id: 'c1', src: '/photos/couple/O.jpg', alt: 'Couple Shot 1', category: 'couple', title: 'Together I' },
  { id: 'c2', src: '/photos/couple/qwe.jpg', alt: 'Couple Shot 2', category: 'couple', title: 'Together II' },
  { id: 'c3', src: '/photos/couple/weq.jpg', alt: 'Couple Shot 3', category: 'couple', title: 'Together III' },
  // Group
  { id: 'g1', src: '/photos/group/IMG_0931.jpg', alt: 'Group Shot 1', category: 'group', title: 'Group I' },
  { id: 'g2', src: '/photos/group/IMG_0933.jpg', alt: 'Group Shot 2', category: 'group', title: 'Group II' },
  { id: 'g3', src: '/photos/group/SNP_6332.JPG', alt: 'Group Shot 3', category: 'group', title: 'Group III' },
  { id: 'g4', src: '/photos/group/SNP_6345.JPG', alt: 'Group Shot 4', category: 'group', title: 'Group IV' },
  { id: 'g5', src: '/photos/group/SNP_6367.JPG', alt: 'Group Shot 5', category: 'group', title: 'Group V' },
  { id: 'g6', src: '/photos/group/SNP_6398.JPG', alt: 'Group Shot 6', category: 'group', title: 'Group VI' },
  { id: 'g7', src: '/photos/group/fwt.jpg', alt: 'Group Shot 7', category: 'group', title: 'Group VII' },
  { id: 'g8', src: '/photos/group/r.jpg', alt: 'Group Shot 8', category: 'group', title: 'Group VIII' },
  { id: 'g9', src: '/photos/group/spl_01.jpg', alt: 'Group Shot 9', category: 'group', title: 'Group IX' },
  { id: 'g10', src: '/photos/group/spl_02.jpg', alt: 'Group Shot 10', category: 'group', title: 'Group X' },
  { id: 'g11', src: '/photos/group/spl_04.jpg', alt: 'Group Shot 11', category: 'group', title: 'Group XI' },
  // Product
  { id: 'pr1', src: '/photos/product/1.jpeg', alt: 'Product Shot 1', category: 'product', title: 'Product I' },
  { id: 'pr2', src: '/photos/product/2.jpeg', alt: 'Product Shot 2', category: 'product', title: 'Product II' },
  { id: 'pr3', src: '/photos/product/3.jpeg', alt: 'Product Shot 3', category: 'product', title: 'Product III' },
  { id: 'pr4', src: '/photos/product/4.jpeg', alt: 'Product Shot 4', category: 'product', title: 'Product IV' },
  { id: 'pr5', src: '/photos/product/5.jpeg', alt: 'Product Shot 5', category: 'product', title: 'Product V' },
  { id: 'pr6', src: '/photos/product/6.jpeg', alt: 'Product Shot 6', category: 'product', title: 'Product VI' },
  { id: 'pr7', src: '/photos/product/7.jpeg', alt: 'Product Shot 7', category: 'product', title: 'Product VII' },
  { id: 'pr8', src: '/photos/product/8.jpeg', alt: 'Product Shot 8', category: 'product', title: 'Product VIII' },
  // Product (batch 2 — dari bahan/Product)
  { id: 'pr9',  src: '/photos/product2/IMG_3822.JPG', alt: 'Product Shot 9',  category: 'product', title: 'Product IX' },
  { id: 'pr10', src: '/photos/product2/IMG_3863.JPG', alt: 'Product Shot 10', category: 'product', title: 'Product X' },
  { id: 'pr11', src: '/photos/product2/IMG_3947.JPG', alt: 'Product Shot 11', category: 'product', title: 'Product XI' },
  { id: 'pr12', src: '/photos/product2/IMG_3951.JPG', alt: 'Product Shot 12', category: 'product', title: 'Product XII' },
  { id: 'pr13', src: '/photos/product2/IMG_4020.JPG', alt: 'Product Shot 13', category: 'product', title: 'Product XIII' },
  { id: 'pr14', src: '/photos/product2/IMG_4031.JPG', alt: 'Product Shot 14', category: 'product', title: 'Product XIV' },
  { id: 'pr15', src: '/photos/product2/IMG_4115.JPG', alt: 'Product Shot 15', category: 'product', title: 'Product XV' },
  { id: 'pr16', src: '/photos/product2/IMG_4127.JPG', alt: 'Product Shot 16', category: 'product', title: 'Product XVI' },
  { id: 'pr17', src: '/photos/product2/IMG_4152.JPG', alt: 'Product Shot 17', category: 'product', title: 'Product XVII' },
  // Wedding
  { id: 'w1', src: '/photos/wedding/1.jpeg', alt: 'Wedding Shot 1', category: 'wedding', title: 'Wedding I' },
  { id: 'w2', src: '/photos/wedding/2.jpeg', alt: 'Wedding Shot 2', category: 'wedding', title: 'Wedding II' },
  { id: 'w3', src: '/photos/wedding/3.jpeg', alt: 'Wedding Shot 3', category: 'wedding', title: 'Wedding III' },
  { id: 'w4', src: '/photos/wedding/4.jpeg', alt: 'Wedding Shot 4', category: 'wedding', title: 'Wedding IV' },
  { id: 'w5', src: '/photos/wedding/5.jpeg', alt: 'Wedding Shot 5', category: 'wedding', title: 'Wedding V' },
  { id: 'w6', src: '/photos/wedding/6.jpeg', alt: 'Wedding Shot 6', category: 'wedding', title: 'Wedding VI' },
  { id: 'w7', src: '/photos/wedding/7.jpeg', alt: 'Wedding Shot 7', category: 'wedding', title: 'Wedding VII' },
  { id: 'w8', src: '/photos/wedding/8.jpeg', alt: 'Wedding Shot 8', category: 'wedding', title: 'Wedding VIII' },
  { id: 'w9', src: '/photos/wedding/9.jpeg', alt: 'Wedding Shot 9', category: 'wedding', title: 'Wedding IX' },
];

// Videos — local files + YouTube placeholder (update YouTube IDs after user provides links)
export const VIDEOS: VideoItem[] = [
  { id: 'v1', src: '/videos/01.mp4', title: 'Cinematic Reel 01', description: 'Short film dokumentasi', type: 'local' },
  { id: 'v2', src: '/videos/2.mp4', title: 'Cinematic Reel 02', description: 'Wedding documentation', type: 'local' },
  { id: 'v3', src: '/videos/3.mp4', title: 'Cinematic Reel 03', description: 'Event coverage', type: 'local' },
  { id: 'v4', src: '/videos/4.mp4', title: 'Cinematic Reel 04', description: 'Portrait session', type: 'local' },
  { id: 'v5', src: '/videos/5.mp4', title: 'Cinematic Reel 05', description: 'Fashion film', type: 'local' },
  { id: 'v6', src: '/videos/6.mp4', title: 'Cinematic Reel 06', description: 'Commercial shoot', type: 'local' },
  { id: 'v7', src: '/videos/7.mp4', title: 'Cinematic Reel 07', description: 'Street & lifestyle', type: 'local' },
  { id: 'v8', src: '/videos/8.mp4', title: 'Cinematic Reel 08', description: 'Highlight reel', type: 'local' },
  { id: 'v9', src: '/videos/9.mp4', title: 'Cinematic Reel 09', description: 'Couple session', type: 'local' },
  { id: 'v10', src: '/videos/10.mp4', title: 'Cinematic Reel 10', description: 'Best moments', type: 'local' },
  // Video reel baru
  { id: 'v11', src: '/videos/KYOU 23 SEPTEMBER 26.mp4', title: 'KYOU — 23 September', description: 'Commercial reel KYOU', type: 'local' },
  { id: 'v12', src: '/videos/KYOU 8 OKTOBER 26.mp4',    title: 'KYOU — 8 Oktober',    description: 'Commercial reel KYOU', type: 'local' },
  { id: 'v13', src: '/videos/machia 7 oktober 26.mp4',  title: 'Machia — 7 Oktober',  description: 'Commercial reel Machia', type: 'local' },
  // YouTube — update these IDs setelah user memberikan link
  // { id: 'yt1', src: '', title: 'YouTube Video', type: 'youtube', youtubeId: 'VIDEO_ID_HERE' },
];
