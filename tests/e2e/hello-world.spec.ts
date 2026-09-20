import { expect, test } from '@playwright/test'

test('renders HelloWorld in the application', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000')

  const message = page.locator('#hello-world-title')

  await expect(message).toHaveText('Hello World')
  await expect(page.locator('section')).toHaveAttribute('aria-labelledby', 'hello-world-title')
})

test('renders the HelloWorld default Storybook story', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6006/iframe.html?id=components-helloworld--default&viewMode=story'
  )

  await expect(page.locator('#hello-world-title')).toHaveText('Hello World')
})
