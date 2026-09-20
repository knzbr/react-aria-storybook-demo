import { defineConfig } from '@playwright/test'

const isCi = Boolean(process.env.CI)

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  use: {
    browserName: 'chromium',
    trace: 'on-first-retry'
  },
  webServer: [
    {
      command: 'npm run dev',
      url: 'http://127.0.0.1:3000',
      reuseExistingServer: !isCi
    },
    {
      command: 'npm run storybook -- --ci',
      url: 'http://127.0.0.1:6006',
      reuseExistingServer: !isCi
    }
  ]
})
