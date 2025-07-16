//
// File: ../Hello-world-react/app.spec.js
//
const { test, expect } = require('@playwright/test');

test.describe('React App Routing', () => {
  // check to make sure that it display the Home page by default ...
  test('should display Home page by default', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.locator('h2')).toHaveText('Welcome to the Home Page');
    await expect(page.getByText('This is a simple React application with routing and layout.')).toBeVisible();
  });
  // check to make sure it navigates to correct About page ...
  test('should navigate to About page', async ({ page }) => {
    await page.goto('http://localhost:3000/about');
    await expect(page.locator('h2')).toHaveText('About Us');
    await expect(page.getByText('This page shares more information about our awesome app and team.')).toBeVisible();
  });
  // check to make sure that the LayoutPage is properly rendered ...
  test('should render LayoutPage elements', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    // Check for layout elements, e.g., navigation or footer ...
    await expect(page.getByText('© 2025 Hello World Inc.')).toBeVisible();
    // on the navigation bar, check for links ...
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
  });
  // check to make sure that it is navigating using the links ...
  test('should navigate using layout navigation links', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.click('nav >> text=About');
    await expect(page.locator('h2')).toHaveText('About Us');
    await page.click('nav >> text=Home');
    await expect(page.locator('h2')).toHaveText('Welcome to the Home Page');
  });
});