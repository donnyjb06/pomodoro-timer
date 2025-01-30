#!/bin/bash

# Step 1: Install dependencies
echo "Installing SCSS Embedded and vite-tsconfig-paths..."
npm install --save-dev sass-embedded vite-tsconfig-paths

# Step 2: Rename Main.tsx to Index.tsx (ONLY if it exists)
if [ -f "src/Main.tsx" ]; then
  echo "Renaming Main.tsx to Index.tsx..."
  mv src/Main.tsx src/Index.tsx
fi

# Step 3: Update index.html to reference Index.tsx instead of Main.tsx
if [ -f "index.html" ]; then
  echo "Updating index.html to reference Index.tsx..."
  sed -i 's/Main.tsx/Index.tsx/g' index.html
fi

# Step 4: Remove all contents inside src/assets but keep the directory
if [ -d "src/assets" ]; then
  echo "Cleaning up src/assets folder..."
  rm -rf src/assets/*
else
  echo "Creating src/assets directory..."
  mkdir -p src/assets
fi

# Step 5: Clear the contents of README.md (but keep the file)
if [ -f "README.md" ]; then
  echo "Clearing README.md..."
  > README.md
fi

# Step 6: Remove App.css and index.css if they exist
if [ -f "src/App.css" ]; then
  echo "Removing src/App.css..."
  rm src/App.css
fi

if [ -f "src/index.css" ]; then
  echo "Removing src/index.css..."
  rm src/index.css
fi

# Step 7: Create necessary directories (only if they don’t exist)
mkdir -p src/components
mkdir -p src/utils
mkdir -p src/styles/helper

# Step 8: Create SCSS files only if they don’t exist
touch src/styles/helper/_reset.scss
touch src/styles/helper/_variables.scss
touch src/styles/helper/_mixins.scss
touch src/styles/helper/_functions.scss
touch src/styles/index.scss
touch src/styles/App.scss

# Step 9: Update vite.config.ts for tsconfig paths (overwrite with correct content)
echo "Updating vite.config.ts..."
cat > vite.config.ts <<EOL
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
EOL

# Step 10: Modify tsconfig.app.json to add baseUrl and paths WITHOUT overwriting anything else
if [ -f "tsconfig.app.json" ]; then
  echo "Ensuring tsconfig.app.json has baseUrl and paths..."

  # Check if baseUrl exists, if not, add it
  if ! grep -q '"baseUrl":' tsconfig.app.json; then
    sed -i '/"compilerOptions": {/a \    "baseUrl": "./",' tsconfig.app.json
  fi

  # Check if paths exist, if not, add them
  if ! grep -q '"paths": {' tsconfig.app.json; then
    sed -i '/"compilerOptions": {/a \    "paths": {\
      "@components/*": ["src/components/*"],\
      "@utils/*": ["src/utils/*"],\
      "@styles/*": ["src/styles/*"],\
      "@assets/*": ["src/assets/*"]\
    },' tsconfig.app.json
  fi

else
  echo "Error: tsconfig.app.json not found!"
fi

echo "Setup complete! 🎉 No files were deleted—only the necessary changes were made."
