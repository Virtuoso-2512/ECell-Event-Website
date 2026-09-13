# Launchpad Event Landing Page | E-Cell BITS Hyderabad
A responsive, glassmorphism-inspired event webpage built for the E-Cell Tech Team induction task. The project aims to recreate a premium, dark-themed aesthetic with interactive 3D elements and smooth animations without relying on heavy external styling libraries.

Visit Website Here: [https://ecell-event-website.netlify.app/]

# Technologies Used
React.js: Core framework for component-based architecture and state management.

# Approach & Architecture
Glassmorphism Aesthetic: The visual identity relies heavily on CSS ```backdrop-filter: blur(), semi-transparent backgrounds (rgba)```, and subtle rim lighting (thin borders) to create depth and separation against the deep black background.

# CSS-Driven Physics & Animations:
*Marquee & Hover States:* Infinite horizontal scrolling and card expansions are handled entirely via CSS `@keyframes` and  `transition` timing functions, ensuring high performance on the browser's render thread.

*3D Rotating Surface:* The core mission mottos utilize CSS perspective combined with transform: `rotateX()` and `translateY()` to create the illusion of text physically rotating on a mechanical drum.

*Streamlined Interactions:* The newsletter subscription form utilizes straightforward browser-native alerts `(window.alert)` to handle submission feedback, prioritizing functional simplicity and immediate execution over complex notification scripting.

*Smooth Navigation:* In-page anchor links and specific UI triggers utilize the native `scrollIntoView({ behavior: 'smooth' })` DOM method to glide between sections seamlessly.

# Setup Instructions
1. Initialize a new React project (e.g., via Create React App or Vite).
2. Replace `App.jsx` and `App.css` with the provided component files.
3. Run npm install for standard React dependencies.
4. Run npm start (or npm run dev) to launch the development server on localhost.