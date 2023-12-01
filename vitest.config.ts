import react from '@vitejs/plugin-react';
import {configDefaults, defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    env: {
      IS_REACT_ACT_ENVIRONMENT: 'true',
    },
    include: ['__tests__/**/*.[jt]s?(x)'],
    exclude: [...configDefaults.exclude, '__tests__/_**/*.[jt]s?(x)']
  },
});