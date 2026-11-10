# Keda Tech React Assesment

## Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building reusable UI components |
| Vite | Development environment and build tool |
| Sass (SCSS) | Styling and CSS organization |
| Radix UI | Accessible UI components, including the login dialog |

## Installation and Setup

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Rizkidwi14/Keda-Tech-React-Assesment.git
```

### 2. Navigate to the project directory

```bash
cd Keda-Tech-React-Assesment
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## Production Build

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
StockUp/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Login.jsx
│   ├── styles/
│   │   ├── main.scss
│   │   └── variables.scss
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```