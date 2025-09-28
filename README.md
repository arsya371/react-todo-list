# React Todo List with Drag and Drop

A modern, interactive Todo List application built with React and Vite, featuring drag-and-drop functionality and tag categorization.

## Features

- ✦ Create tasks with titles and tags
- ✦ Tag system with different categories (HTML, CSS, JavaScript, React)
- ✦ Three-column layout (Todo, Doing, Done)
- ✦ Drag and drop tasks between columns
- ✦ Colorful tag system for visual organization
- ✦ Local storage persistence
- ✦ Delete tasks functionality

## Preview

![https://github.com/arsya371/react-todo-list/blob/master/image.jpg?raw=true](https://github.com/arsya371/react-todo-list/blob/master/todo-list/src/assets/preview.png)

## Technology Stack

- React 18s
- Vite
- CSS3 for styling
- Local Storage for data persistence

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/arsya371/react-todo-list.git
cd todo-list
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## How to Use

1. **Adding a Task:**
   - Enter task title in the input field
   - Select at least one tag (HTML, CSS, JavaScript, or React)
   - Choose the status (Todo, Doing, Done)
   - Click "Add Task" button

2. **Managing Tasks:**
   - **Move Tasks:** Drag and drop tasks between columns
   - **Delete Tasks:** Click the delete icon on any task card
   - **View Tags:** Each task shows its associated tags with color coding

3. **Tags Color Coding:**
   - HTML: Orange
   - CSS: Turquoise
   - JavaScript: Yellow
   - React: Light Blue

## Project Structure

```
todo-list/
├── src/
│   ├── components/
│   │   ├── DropArea.jsx    # Drag and drop functionality
│   │   ├── Tag.jsx         # Tag component with color coding
│   │   ├── TaskCard.jsx    # Individual task display
│   │   ├── TaskColumn.jsx  # Column layout component
│   │   └── TaskForm.jsx    # Task creation form
│   ├── assets/            # Icons and images
│   ├── App.jsx           # Main application component
│   └── main.jsx         # Application entry point
└── package.json        # Project dependencies and scripts
```

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

