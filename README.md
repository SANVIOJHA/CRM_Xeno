 Mini CRM Frontend

This is the frontend application for the Mini CRM Platform built using React.js. It allows users to view and interact with the CRM Dashboard, login to their accounts, and see customer-related data. This project is part of the Xeno SDE Internship Assignment.

---

 🛠️ Tech Stack

- React.js
- React Router DOM
- Axios
- CSS (basic styling)
- Connects to a Node.js + Express + MongoDB backend.

---

 📁 Project Structure

```

crm\_frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Dashboard.js
│   ├── services/
│   │   └── api.js
│   ├── views/
│   │   ├── Home.js
│   │   └── Login.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md

````

---

 🚀 Getting Started

 1. Clone the repository

```bash
git clone https://github.com/your-username/mini-crm-frontend.git
cd mini-crm-frontend
````

 2. Install dependencies

```bash
npm install
```

 3. Start the frontend server

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

 🔄 Available Scripts

 `npm start`: Runs the app in development mode.
 `npm run build`: Builds the app for production to the `build` folder.

---

 🔗 API Connection

Update the base URL in `src/services/api.js`:

```js
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update if your backend uses a different port
});

export default api;
```

Make sure the backend is running on `localhost:5000` or update the URL accordingly.

---

 ⚠️ Common Errors & Fixes

 Blank page?

   Make sure all components render something visible.
   Ensure no runtime error is crashing the render tree.
   Check browser console for errors.

 Module not found?

   Run `npm install` to ensure all packages are installed.



