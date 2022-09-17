---
title: Automated Web Accessibility Testing
date: "2022-09-16T18:21:48.261Z"
description: ""
attachments:
  [
    {
      title: "Evaluating Web Accessibility by W3C",
      link: "https://www.w3.org/WAI/test-evaluate/",
    },
    {
      title: "Accessibility by MDN Web Docs",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility",
    },
  ]
---

Web accessibility (often abbreviated to A11y) means that websites and web applications are accessible for all people, whether disabled or not, and follow web development standards. The ideal is to test accessibility early and throughout the development process, so problems can be indentified and fixed as soon as possible.

There's two categories to accessibility evaluation: manual/human evaluation and automated evaluation. **Automated evaluation** can check for form labels, color contrast, focus menagement, and others. **Human/manual evaluation** can check for focus order, alternative text quality, screen readers support, and others.

There are tools to assist with automated evaluation, but it's important to note that human/manual evaluation, including user testing with people with disabilities, is required to determine if a website is accessible.

## Automated accessibility testing

For automated tests, we can check for accessibility in unit, integration, and e2e testing. An example of accessibility **unit testing** is testing a component-specific behavior. For example, if we have a toggle component that should have the state `isOpen` when has focus on a specific button. An example of accessibility **integration/e2e testing** is when we have to test a page-level behavior or when we test the color contrast across the entire page.

<a href="https://www.w3.org/WAI/ER/tools/" target="\_blank"> W3C has a list of accessibility tools</a> you can use to find the best automated evaluation tool for your case. **axe-core** is an open-source JavaScript library on the list that offers great flexibility. We can use de cli version or even add the extension to our browser.

We can use the <a href="https://www.npmjs.com/package/jest-axe" target="_blank">jest-axe library</a> to write our automated tests. The documentation have examples with different libraries and frameworks.

For integration/e2e testing with Selenium's WebDriverJS, we can use the <a href="https://www.npmjs.com/package/@axe-core/webdriverjs" target="blank">@axe-core/webdriverjs library</a>.

Also, we can use <a href="https://www.npmjs.com/package/@axe-core/cli" target="blank"> axe-cli</a> to run accessibility tests on a specific URL,example: `axe http://localhost:8000/`. You can also customize the rules axe should check, the scope, and how the results are printed.

### Continuous Integration

It's possible to run axe-cli in our project's CI. Also, by writing unit and integration tests with jest-axe and running them in our project's CI also adds the accessibility layer, encouraging developers to think about accessibility during the development process and prevents accessibility bugs reach production.
