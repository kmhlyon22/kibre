import img0 from "@/assets/projects/portfolio/honeybadger-courses.jpg.asset.json";
import img1 from "@/assets/projects/portfolio/mekelle-security-CEpvg.jpg.asset.json";
import img2 from "@/assets/projects/portfolio/mtm-gym.jpg.asset.json";
import img3 from "@/assets/projects/portfolio/hb-school.jpg.asset.json";
import img4 from "@/assets/projects/portfolio/kmg-erp-BZhVJJ.jpg.asset.json";
import img5 from "@/assets/projects/portfolio/afro-eagle.jpg.asset.json";
import img6 from "@/assets/projects/portfolio/united-medical-BwFGGxE-.jpg.jpg.asset.json";
import img7 from "@/assets/projects/portfolio/mtm-website.jpg.asset.json";
import img8 from "@/assets/projects/portfolio/sfk-sport.jpg.asset.json";
import img9 from "@/assets/projects/portfolio/united-construction.jpg.asset.json";
import img10 from "@/assets/projects/portfolio/mr-mrs-churros.jpg.asset.json";
import img11 from "@/assets/projects/portfolio/yonas-chercher.jpg.asset.json";
import img12 from "@/assets/projects/portfolio/afro-tattoo-dJ.jpg.asset.json";
import img13 from "@/assets/projects/portfolio/united-tech.jpg.asset.json";
import img14 from "@/assets/projects/portfolio/amen-car.jpg.asset.json";
import img15 from "@/assets/projects/portfolio/fiandimo.jpg.asset.json";
import img16 from "@/assets/projects/portfolio/kmg-website.jpg.asset.json";
import img17 from "@/assets/projects/portfolio/gospel-light.jpg.asset.json";

export type Project = { id: number; title: string; category: string; description: string; thumbnail: string; link?: string; screenrecording?: string };

// Order matches kibreabs-portfolio.vercel.app
export const projects: Project[] = [
  {"id": 1, "title": "Honebadger Course Selling Platform", "category": "SaaS / E-Learning Platform", "description": "A course-selling platform designed to help creators and businesses offer and manage online courses.", "link": "https://honeybadger.et", "thumbnail": img0.url},
  {"id": 2, "title": "Mekelle City Top Security System", "category": "Civic Security Platform", "description": "An anonymous city safety portal that lets Mekelle residents report crimes with location and photo evidence.", "link": "https://mekelle-city-security.vercel.app/", "thumbnail": img1.url},
  {"id": 3, "title": "MTM Gym ERP", "category": "SaaS / Gym Operations ERP", "description": "An ERP for MTM Gym Ethiopia that runs front-desk check-in, POS, inventory, financials and student growth across branches.", "link": "https://mtm-erp.vercel.app/", "thumbnail": img2.url},
  {"id": 4, "title": "HB School Management System", "category": "SaaS / School Management", "description": "A school management system designed to help schools manage students, classes, attendance, academic records, and other core school operations.", "link": "https://project-qi8ab.vercel.app", "thumbnail": img3.url},
  {"id": 5, "title": "KMG Engineering ERP", "category": "SaaS / Sales & Inventory ERP", "description": "An ERP for KMG Engineering that tracks sales, stock and transfers across both branches from one dashboard.", "link": "https://pixel-perfect-parity-38.lovable.app", "thumbnail": img4.url},
  {"id": 6, "title": "Afro Eagle Engineering ERP", "category": "SaaS / Construction Management ERP", "description": "A construction management system for Afro Eagle Engineering that keeps projects, clients, materials and site costs in one place.", "link": "https://pixel-perfect-playground-1749.lovable.app", "thumbnail": img5.url},
  {"id": 7, "title": "United Secured Medical Transport", "category": "Business Website", "description": "A professional website created for a medical transportation company.", "link": "https://united-website-teal.vercel.app", "thumbnail": img6.url},
  {"id": 8, "title": "MTM Academy Website", "category": "Gym & Martial Arts Website", "description": "The official website for Master Teshome Muay Thai Club, Ethiopia's first Muay Thai club, with branches in Gerji, Bole and Lebu.", "link": "https://mtmmuaythai.com", "thumbnail": img7.url},
  {"id": 9, "title": "SFK Sport Group", "category": "Sports Club Website", "description": "A website for a football recruiting and sports development group operating in Ethiopia.", "screenrecording": "/recordings/sfk.mp4", "thumbnail": img8.url},
  {"id": 10, "title": "United Construction PLC", "category": "Corporate Website", "description": "A professional corporate website developed for a construction company.", "link": "https://unitedconstruction.company", "screenrecording": "/recordings/united-construction.mp4", "thumbnail": img9.url},
  {"id": 11, "title": "Mr & Mrs Churros", "category": "Restaurant Website", "description": "A visually engaging website designed for a restaurant and food business.", "link": "https://speedster-glow.lovable.app", "screenrecording": "/recordings/churros.mp4", "thumbnail": img10.url},
  {"id": 12, "title": "Yonas Cher Cher Restaurant", "category": "Restaurant Website", "description": "A restaurant website designed to showcase the brand, menu, services, and customer experience.", "link": "https://yonaschercher.et", "screenrecording": "/recordings/yonas-chercher.mp4", "thumbnail": img11.url},
  {"id": 13, "title": "Afro Tattoo Studio", "category": "Creative Business Website", "description": "A modern website created for a tattoo studio to showcase artwork, services, and the brand.", "link": "https://afrotattoo.com", "thumbnail": img12.url},
  {"id": 14, "title": "United Tech Ethiopia", "category": "Corporate / Tech Company Website", "description": "A corporate website for a technology company offering ERP systems, website development and mobile apps.", "thumbnail": img13.url},
  {"id": 15, "title": "Amen Car Dealership", "category": "Automotive Website", "description": "A website developed for a car dealership to showcase available vehicles and services.", "screenrecording": "/recordings/amen.mp4", "thumbnail": img14.url},
  {"id": 16, "title": "Fiandimo Aqua Drill", "category": "Corporate / Engineering Website", "description": "A professional website created for a water drilling and engineering company.", "screenrecording": "/recordings/fiandimo.mp4", "thumbnail": img15.url},
  {"id": 17, "title": "KMG Engineering", "category": "Engineering Website", "description": "A professional digital presence created for an engineering company.", "link": "https://kmgelectricalandsanitary.com", "thumbnail": img16.url},
  {"id": 18, "title": "Gospel Light Missionary Company", "category": "Organization Website", "description": "A website designed to create a professional online presence for a missionary organization.", "link": "https://gospel-light-website-main.vercel.app", "thumbnail": img17.url}
];
