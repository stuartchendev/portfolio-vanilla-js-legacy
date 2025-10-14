# Portfolio Website - Chen Yi-Ting

## Overview

This is a personal portfolio website showcasing my skills, experience, and projects as a Front-End Developer. The website features a responsive design, multi-language support (Chinese, English, and Japanese), theme toggling (light/dark mode), and smooth animations.

![Portfolio Website Screenshot](./images/lit3.1%201.svg)

## Live Demo

Visit the live website: [https://lit-cup.github.io](https://lit-cup.github.io)

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multi-language Support**: Switch between Chinese, English, and Japanese
- **Theme Toggle**: Choose between light and dark themes
- **Smooth Animations**: Intersection Observer API for scroll-based animations
- **Interactive Timeline**: Showcasing my learning journey and skills
- **Project Showcase**: Displaying my portfolio projects
- **Project Filtering**: Filter projects by category or technology
- **Contact Information**: Easy access to my contact details
- **Accessibility**: WCAG 2.1 compliant color contrast ratios and semantic HTML

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- Intersection Observer API
- Local Storage for theme and language preferences

## Project Structure

```
├── index.html              # Main HTML file
├── index.css               # Main CSS file
├── reponsive.css           # Responsive design styles
├── js/
│   ├── index.js            # Main JavaScript file
│   └── language.json       # Translations for multi-language support
├── images/                 # Image assets
└── README.md               # Project documentation
```

## Setup and Installation

1. Clone the repository:

   ```
   git clone https://github.com/lit-cup/lit-cup.github.io.git
   ```

2. Navigate to the project directory:

   ```
   cd lit-cup.github.io
   ```

3. Open `index.html` in your browser to view the website locally.

## Key Components

### Multi-language Support

The website supports three languages: Chinese, English, and Japanese. Language preferences are stored in local storage for persistence across sessions.

```javascript
// Load translations based on selected language
async function loadTranslations(lang) {
  try {
    const response = await fetch("./js/language.json");
    const translations = await response.json();

    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    localStorage.setItem("language", lang);
  } catch (error) {
    console.error("Error loading translations", error);
  }
}
```

### Theme Toggle

The website features a light/dark theme toggle. Theme preferences are stored in local storage.

```javascript
// Theme toggle functionality
themeToggle.addEventListener("click", () => {
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    currentTheme = "dark";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    currentTheme = "light";
  }
  localStorage.setItem("theme", currentTheme);
});
```

### Color System

The website uses an extensive CSS variable system for consistent theming across light and dark modes. The color palette is designed with accessibility in mind, ensuring all text meets WCAG 2.1 contrast requirements.

#### Light Theme Colors

```css
:root {
  /* Primary Colors */
  --color-primary: #ae0000;
  --color-primary-light: #d40000;
  --color-primary-dark: #8b0000;
  --color-primary-contrast: #ffffff;

  /* Secondary Colors */
  --color-secondary: #f5f5f5;
  --color-secondary-light: #ffffff;
  --color-secondary-dark: #e0e0e0;

  /* Accent Colors */
  --color-accent: #ff4d4d;
  --color-accent-light: #ff7373;
  --color-accent-dark: #cc0000;

  /* Background Colors */
  --color-background: #fdfbf8;
  --color-background-alt: #f8f4f4;
  --color-background-elevated: #ffffff;

  /* Text Colors */
  --color-text: #333333; /* 12:1 contrast ratio on background */
  --color-text-light: #666666;
  --color-text-lighter: #999999;
  --color-text-contrast: #ffffff;

  /* Project Colors */
  --color-project-bg: rgba(255, 87, 51, 0.1);
  --color-project-article-bg: rgba(225, 87, 51, 0.3);
  --color-project-title: #8b0000; /* 7:1 contrast ratio */
  --color-project-text: #333333; /* 12:1 contrast ratio */
  --color-project-accent: #d40000; /* 4.5:1 contrast ratio */
  --color-project-border: #ae0000;
  --color-project-hover: rgba(174, 0, 0, 0.8);

  /* Shadow Colors */
  --color-text-shadow: rgba(0, 0, 0, 0.3);
  --color-shadow-light: rgba(0, 0, 0, 0.1);
  --color-shadow-medium: rgba(0, 0, 0, 0.2);
}
```

#### Dark Theme Colors

```css
[data-theme="dark"] {
  /* Primary Colors */
  --color-primary: #ffe500;
  --color-primary-light: #fff04d;
  --color-primary-dark: #ccb700;
  --color-primary-contrast: #000000;

  /* Secondary Colors */
  --color-secondary: #420606;
  --color-secondary-light: #631010;
  --color-secondary-dark: #2d0404;

  /* Accent Colors */
  --color-accent: #ffb800;
  --color-accent-light: #ffc933;
  --color-accent-dark: #cc9200;

  /* Background Colors */
  --color-background: #0c0706;
  --color-background-alt: #1a1311;
  --color-background-elevated: #241b19;

  /* Text Colors */
  --color-text: #f5f5f5; /* 18:1 contrast ratio on background */
  --color-text-light: #cccccc;
  --color-text-lighter: #999999;
  --color-text-contrast: #000000;

  /* Project Colors */
  --color-project-bg: rgba(255, 127, 80, 0.2);
  --color-project-article-bg: rgba(255, 127, 80, 0.4);
  --color-project-title: #ffe500; /* 15:1 contrast ratio */
  --color-project-text: #f5f5f5; /* 16:1 contrast ratio */
  --color-project-accent: #fff04d; /* 14:1 contrast ratio */
  --color-project-border: #ffd700;
  --color-project-hover: rgba(255, 229, 0, 0.8);

  /* Shadow Colors */
  --color-text-shadow: rgba(255, 255, 255, 0.3);
  --color-shadow-light: rgba(255, 255, 255, 0.1);
  --color-shadow-medium: rgba(255, 255, 255, 0.2);
}
```

#### Color System Features

- **Semantic Color Naming**: Colors are named by their function, not their appearance
- **Contrast Compliance**: All text colors meet or exceed WCAG 2.1 AA standards (4.5:1 minimum)
- **Hierarchical Structure**: Colors are organized into logical groups (primary, secondary, accent, etc.)
- **Theme Consistency**: Each color has an equivalent in both light and dark themes
- **Component-Specific Colors**: Special colors for projects, timelines, and UI elements

### Accessibility Features

The website is designed with accessibility in mind, following WCAG 2.1 guidelines:

#### Color Contrast

- All text elements meet or exceed the WCAG 2.1 AA standard (4.5:1 contrast ratio)
- Most text elements meet the more stringent AAA standard (7:1 contrast ratio)
- Detailed contrast ratios:
  - Light theme body text: 12:1 contrast ratio
  - Dark theme body text: 18:1 contrast ratio
  - Interactive elements: Minimum 4.5:1 contrast ratio

#### Semantic HTML

- Proper heading hierarchy with `<h1>` through `<h6>` elements
- Semantic sectioning elements (`<header>`, `<main>`, `<footer>`, `<article>`, etc.)
- ARIA attributes where appropriate

#### Keyboard Navigation

- All interactive elements are focusable
- Logical tab order follows visual layout
- Focus styles are visible and meet contrast requirements

#### Responsive Design

- Content remains accessible at all viewport sizes
- No information is lost when zooming to 200%
- Text remains readable on mobile devices

### Animation System

The website features a comprehensive animation system that enhances user experience through subtle and engaging visual effects:

#### CSS Keyframe Animations

Various keyframe animations are used throughout the site for different elements, including fade-in, slide-in, and pulse animations.

#### Animation Variables

CSS variables are used to maintain consistent animation properties:

```css
:root {
  --animation-duration: 1s;
  --animation-timing: ease-in-out;
  --transform-3d: translate3d(0, 0, 0);
}
```

#### Scroll-Triggered Animations

Elements animate into view as they enter the viewport using the Intersection Observer API:

```javascript
// Animation observer function
function setupIntersectionObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Additional animation logic...
      }
    });
  }, options);

  // Observe elements...
}
```

#### Performance Optimizations

Techniques used to ensure smooth animations:

1. **Hardware Acceleration**: Using `transform: translate3d(0, 0, 0)` and `will-change` properties
2. **Debounced Events**: Preventing animation jank during scroll events
3. **CSS Transitions**: Using CSS transitions for smoother state changes
4. **Animation Timing**: Carefully tuned timing functions for natural movement

## Responsive Design

The website is fully responsive with three main breakpoints:

- Desktop (>1024px)
- Tablet (600px-1024px)
- Mobile (<600px)

## Browser Compatibility

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add more projects to the portfolio section
- Enhance project filtering with multiple categories
- Add a blog section
- Improve accessibility features
- Add more interactive elements
- Implement lazy loading for project images

## License

© 2024 Chen Yi-Ting. All rights reserved.
