const { test, expect } = require('@playwright/test');

// --- Тести без скріншотів ---

// Test 1: Check page title
test('should have correct page title', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle('Test Page');
});

// Test 2: Verify button visibility
test('should display button on the page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const button = page.locator('#test-button');
    await expect(button).toBeVisible();
});

// Test 3: Verify list items
test('should have a list with three items', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const listItems = page.locator('#test-list li');
    await expect(listItems).toHaveCount(3);
    await expect(listItems.nth(0)).toHaveText('First Item');
    await expect(listItems.nth(1)).toHaveText('Second Item');
    await expect(listItems.nth(2)).toHaveText('Third Item');
});

// Test 4: Verify form interaction
test('should allow typing in the name field', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const nameField = page.locator('#name');
    await nameField.fill('Jane Smith');
    await expect(nameField).toHaveValue('Jane Smith');
});

// --- Тести зі скріншотами ---

// Test 5: Screenshot test for the initial state of the page
test('should match initial screenshot', async ({ page }) => {
    await page.goto('http://localhost:3000');
    expect(await page.screenshot()).toMatchSnapshot('initial-page.png');
});

// Test 6: Screenshot after modifying list items
test('should match screenshot with modified list', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.evaluate(() => {
        const list = document.querySelector('#test-list');
        const newItem = document.createElement('li');
        newItem.textContent = 'Fourth Item';
        list.appendChild(newItem);
    });
    expect(await page.screenshot()).toMatchSnapshot('list-modified.png');
});

// Test 7: Screenshot after form interaction
test('should match screenshot after filling the form', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const nameField = page.locator('#name');
    await nameField.fill('John Doe');
    expect(await page.screenshot()).toMatchSnapshot('form-filled.png');
});
