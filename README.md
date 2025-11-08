# Mettā Muse - Product Listing Page (PLP)

A responsive **Product Listing Page (PLP)** built with **Next.js 16**, **TypeScript**, and **React**.  
The project fetches products from a mock API and implements sorting, filtering, and SSR (Server-Side Rendering).  

---

## 🌐 Live Demo

[View the live site on Netlify](https://silly-blini-bbc4d5.netlify.app/)

---

## 🛠 Technologies Used

- **Next.js 16** (React framework)
- **TypeScript**
- **React Icons**
- **CSS Modules**
- **Server-Side Rendering (SSR)**
- **Netlify** for deployment
- **Fake Store API** for product data: [https://fakestoreapi.com/](https://fakestoreapi.com/)

---

## 📦 Features

- Server-side rendered product listing for SEO and performance.
- Product sorting options:
  - Recommended
  - Popular
  - Newest first
  - Price: Low to High
  - Price: High to Low
- Responsive layout for **desktop, tablet, and mobile**.
- Minimal DOM structure with semantic HTML.
- Header, Hero section, Filter Sidebar, and Footer components.
- SEO optimized:
  - Page title and meta description
  - H1 & H2 tags
  - Alt text on images

---

## 📝 Project Structure
my-app/  
├─ public/ # Static assets like images and logos   
├─ src/    
│ ├─ components/ # React components (Header, Hero, ProductFilterBar, ProductPage, SideBar, Footer)   
│ ├─ pages/ # Next.js pages (_app.tsx, _document.tsx, index.tsx)   
│ ├─ styles/ # CSS Modules   
│ └─ types/ # TypeScript types    
├─ .gitignore     
├─ netlify.toml # Netlify configuration       
├─ package.json    
├─ README.md    
└─ tsconfig.json  

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Appscrip-task-misba.git
   cd Appscrip-task-misba

2.Install dependencies:

npm install


3.Run the development server:

npm run dev


4.Open http://localhost:3000
 to view in your browser.



