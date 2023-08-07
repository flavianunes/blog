---
title: Web Accessibility Testing
date: "2022-09-16T18:21:48.261Z"
description: ""
published: true
---

**Web accessibility** (often abbreviated to **A11Y**) means that websites and web applications are accessible for all people, whether disabled or not, and follow web development standards. The idea is to test accessibility early and throughout the development process, so problems can be identified and fixed as soon as possible.

There are two categories of accessibility testing: manual/human testing and automated testing.

- **Human/manual tests** can check for focus order, alternative text quality, screen readers support, and others.
- **Automated tests** can check for form labels, color contrast, focus management, and others.

There are tools to assist with automated tests, but it's important to note that human/manual tests, including user testing with people with disabilities, are required to determine if a website is accessible.

## Manual accessibility testing

Introducing a few habits to the development process helps find accessibility issues.

One of them is getting navigating applications only with keyboards. This navigation checks if the interactive features are working with a different input method. To do this navigation, make sure you are comfortable with the keyboard shortcuts of your chosen browser. Feeling lost or finding unexpected behavior during the navigation indicates opportunities for improvement.

Another habit is to turn off the monitor and use a screen reader to ensure all content is accessible. To do this navigation, make sure you are comfortable with keyboard shortcuts and the screen reader of your choice. Try to pick browsers and screen readers that are popular among your users.

## Automated accessibility testing

For automated tests, we can check for accessibility in unit, integration, and e2e testing. An example of accessibility **unit testing** is checking a component-specific behavior. For example, a toggle component that has the `isOpen` flag set to `true` when a checkbox is selected. An example of accessibility **integration/e2e testing** is when we have to test a page-level behavior or when we test the color contrast across the entire page.

Tools can make the process easier. <a href="https://www.w3.org/WAI/ER/tools/" target="\_blank"> W3C has a list of accessibility tools</a> you can use to find the best one for your case. One of them is **axe-core**, an open-source JavaScript library. We have some other projects based on axe-core that are useful for testing.

- The <a href="https://www.npmjs.com/package/@axe-core/cli" target="blank">CLI version</a> allows us to run accessibility tests on a specific URL by running `axe http://localhost:8000/` for example. You can also customize the rules axe should check, the scope, and how the results are printed.
- The <a href="https://www.deque.com/axe/browser-extensions/" target="_blank">browser extensions versions</a> can be very practical.
- The <a href="https://www.npmjs.com/package/jest-axe" target="_blank">jest-axe library</a> allows us to write automated accessibility tests with Jest. The documentation has examples using different libraries and frameworks.
- For integration/e2e testing with Selenium's WebDriverJS, we have the <a href="https://www.npmjs.com/package/@axe-core/webdriverjs" target="blank">@axe-core/webdriverjs library</a>.

### Continuous Integration

It's possible to run axe-cli in our project's CI. Writing unit and integration tests with jest-axe and running them in our project's CI also add the accessibility layer, encouraging developers to think about accessibility during the development process, and preventing accessibility bugs to reach production.
