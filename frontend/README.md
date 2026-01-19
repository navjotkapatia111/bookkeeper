# BookKeeper Frontend

A modern React-based frontend application for managing books with authentication, CRUD operations, and a beautiful user interface featuring dark mode support.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Routes](#routes)
- [Components](#components)
- [Styling](#styling)
- [API Integration](#api-integration)

## 🎯 Overview

BookKeeper Frontend is a React application built with Vite that provides a user-friendly interface for managing books. It includes user authentication, protected routes, dark mode support, and a complete CRUD interface for book management.

## 🛠 Tech Stack

- **React** (v19.2.0) - UI library
- **Vite** (v7.2.4) - Build tool and development server
- **React Router DOM** (v7.12.0) - Client-side routing
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework
- **Axios** (v1.13.2) - HTTP client for API requests
- **React Toastify** (v11.0.5) - Toast notification library
- **React Icons** (v5.5.0) - Icon library

### Dev Dependencies

- **ESLint** (v9.39.1) - Code linting
- **@vitejs/plugin-react** (v5.1.1) - Vite plugin for React
- **TypeScript types** - Type definitions for React

## 📁 Project Structure

```
frontend/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── components/
│   │   ├── context/
│   │   │   └── themecontext.jsx      # Dark mode theme context provider
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Main book management page (CRUD)
│   │   │   ├── About.jsx             # About page
│   │   │   ├── Contact.jsx           # Contact page
│   │   │   └── Navbar.jsx            # Navigation bar component
│   │   ├── ui/
│   │   │   └── LoadingSpinner.jsx    # Reusable loading spinner component
│   │   ├── user_auth/
│   │   │   ├── login.jsx             # User login page
│   │   │   └── register.jsx          # User registration page
│   │   └── protected_routes.jsx     # Route protection wrapper component
│   ├── App.jsx                       # Main app component with route definitions
│   ├── main.jsx                      # Application entry point
│   ├── App.css                       # App-specific styles
│   └── index.css                     # Global styles (Tailwind imports)
├── axios.js                          # Axios instance with interceptors
├── vite.config.js                    # Vite configuration
├── eslint.config.js                  # ESLint configuration
├── index.html                        # HTML template
└── package.json                      # Dependencies and scripts
```

## ✨ Features

### Authentication
- **User Registration** - Sign up with name, email, and password
- **User Login** - Authenticate with email and password
- **Protected Routes** - Automatic redirection for unauthenticated users
- **Token Management** - JWT token stored in localStorage
- **Auto Token Injection** - Axios interceptors automatically add auth tokens to requests
- **Session Persistence** - Login state persists across page refreshes

### Book Management (CRUD)
- **Create Books** - Add new books with form validation
  - Book Name
  - Book Title
  - Author
  - Selling Price
  - Publish Date
- **Read Books** - Display all books in a responsive table
- **Update Books** - Edit existing book information inline
- **Delete Books** - Remove books with confirmation

### User Interface
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Works on desktop and mobile devices
- **Loading States** - Loading spinners for better UX
- **Toast Notifications** - User-friendly feedback messages
- **Form Validation** - Client-side validation for all forms
- **Clean Table Layout** - Organized book display with action buttons
- **Modern UI** - Built with Tailwind CSS for a polished look

### Navigation
- **Navbar** - Consistent navigation across pages
- **Theme Toggle** - Easy dark/light mode switching
- **Logout Functionality** - Secure logout with token removal
- **Route Protection** - Automatic redirects based on auth state

## 📦 Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- Backend API server running (see backend README)

## 🚀 Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `frontend` directory:

```env
VITE_BASE_BACKEND=http://localhost:8000
```

**Note:** Replace `http://localhost:8000` with your backend API URL in production.

The environment variable is used in `axios.js` to configure the base URL for all API requests.

## 🏃 Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📡 Routes

| Route | Component | Description | Protected |
|-------|-----------|-------------|-----------|
| `/` | `Home` | Book management page with CRUD operations | ✅ Yes |
| `/login` | `Login` | User login page | ❌ No |
| `/signup` | `Register` | User registration page | ❌ No |
| `/about` | `About` | About page with project information | ❌ No |
| `/contact` | `Contact` | Contact page with contact details | ❌ No |

### Route Protection

- Protected routes automatically redirect to `/login` if user is not authenticated
- Authenticated users are redirected to `/` if they try to access `/login` or `/signup`

## 🧩 Components

### Pages

#### Home.jsx
Main book management interface featuring:
- Form for adding/editing books
- Table displaying all books
- Delete and edit actions for each book
- Dark mode support
- Loading states
- Toast notifications

#### Login.jsx
User authentication page with:
- Email and password input fields
- Form validation
- Error handling
- Redirect to home on successful login
- Link to registration page

#### Register.jsx
User registration page with:
- Name, email, and password fields
- Form validation
- Success notifications
- Redirect to login after registration
- Link to login page

#### About.jsx
Informational page about the BookKeeper application with:
- Project description
- Tech stack information
- Dark mode support

#### Contact.jsx
Contact information page with:
- Email, phone, and address details
- Dark mode support

#### Navbar.jsx
Navigation component featuring:
- Logo/brand name
- Navigation links (Home, About, Contact)
- Dark mode toggle button
- Logout button
- Responsive design

### UI Components

#### LoadingSpinner.jsx
Reusable loading spinner component with:
- Configurable sizes (sm, md, lg)
- Multiple color options
- Table cell support for inline loading states

### Context Providers

#### ThemeContext
Dark mode management using React Context API:
- `darkMode` state
- `toggleTheme` function
- Available throughout the app via `useTheme()` hook

### Utilities

#### ProtectedRoutes.jsx
Route protection wrapper that:
- Checks localStorage for authentication token
- Redirects to login if not authenticated
- Renders children if authenticated

## 🎨 Styling

### Tailwind CSS
The project uses Tailwind CSS v4 for styling:
- Utility-first CSS framework
- Responsive design utilities
- Dark mode support via conditional classes
- Custom color schemes

### Dark Mode Implementation
Dark mode is implemented using:
- React Context API for state management
- Conditional Tailwind classes based on `darkMode` state
- Theme toggle button in navbar
- Consistent theming across all components

### Example Dark Mode Usage
```jsx
className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
```

## 🔌 API Integration

### Axios Configuration

The `axios.js` file configures:
- Base URL from environment variables
- Request interceptors to add JWT tokens automatically
- Response interceptors to handle 401 errors (unauthorized)
- Automatic logout on authentication failure

### API Endpoints Used

#### Authentication
- `POST /user/register` - User registration
- `POST /user/login` - User login

#### Book Operations
- `GET /booklist` - Fetch all books
- `POST /addbook` - Create new book
- `PUT /update` - Update existing book
- `POST /delete` - Delete book

### Request/Response Handling

- All requests include JWT token in Authorization header (via interceptor)
- Success responses trigger toast notifications
- Error responses are handled with appropriate error messages
- 401 errors automatically clear auth and redirect to login

## 🔐 Authentication Flow

1. User registers/logs in through respective pages
2. Backend returns JWT token on successful authentication
3. Token is stored in localStorage as `userAuth` JSON object:
   ```json
   {
     "isLogin": true,
     "token": "jwt_token_here"
   }
   ```
4. Axios interceptor adds token to all subsequent requests
5. Protected routes check for `isLogin` flag in localStorage
6. Logout clears localStorage and redirects to login

## 📱 Responsive Design

The application is fully responsive:
- Mobile-friendly forms and tables
- Adaptive layouts using Tailwind grid and flexbox
- Touch-friendly buttons and interactions
- Responsive navigation bar

## 🚀 Deployment

### Build for Production

1. Update `.env` with production backend URL
2. Run build command:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to your hosting service

### Recommended Hosting Services
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🔧 Development Notes

- Uses ES6 modules (`"type": "module"`)
- React 19 with latest features
- Vite for fast HMR (Hot Module Replacement)
- Strict mode enabled for better development experience
- ESLint configured for React best practices

## 📝 Code Style

- Functional components with hooks
- ES6+ JavaScript features
- Consistent naming conventions
- Component-based architecture
- Separation of concerns

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Errors**
   - Verify backend server is running
   - Check `VITE_BASE_BACKEND` in `.env`
   - Ensure CORS is enabled on backend

2. **Authentication Issues**
   - Clear localStorage and try logging in again
   - Check browser console for errors
   - Verify token format in localStorage

3. **Build Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check Node.js version compatibility
   - Clear `node_modules` and reinstall if needed

## 📄 License

ISC

---

**Note:** This frontend application requires the BookKeeper backend API to function properly. Make sure the backend server is running and accessible before starting the frontend.
