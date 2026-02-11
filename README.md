# Parametric3D Dataset Website

Modern, visually attractive static website for the Parametric3D research dataset.

## 🚀 Live Site

Visit: [https://ronitjaiswal1.github.io/3d_synthetic_dataset/](https://ronitjaiswal1.github.io/3d_synthetic_dataset/)

## 📦 Tech Stack

- **React** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **Three.js** via @react-three/fiber and @react-three/drei
- **GitHub Pages** for hosting

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Ensure all changes are committed
2. Push to `main` branch:
   ```bash
   git push origin main
   ```
3. GitHub Actions will automatically build and deploy

### First-Time Setup

1. Go to your repository settings
2. Navigate to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. The site will be available at: `https://ronitjaiswal1.github.io/3d_synthetic_dataset/`

## 📊 Dataset Information

- **Total Objects**: 99,603+
- **Surface Functions**: 20 mathematical parametric functions
- **Modalities**: OBJ mesh, RGB image, Binary mask, Depth map
- **Organization**: 
  - 3D_Dataset_1: 49,604 objects (chunked)
  - 3D_Dataset_2: 49,999 objects

## 🎓 Credits

**Authors**: Ronit Jaiswal et al.  
**Institution**: Faculty of Technology, University of Delhi  
**Supervisor**: Dr. Sangita Yadav

## 📄 License

[Add your license here]

      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
