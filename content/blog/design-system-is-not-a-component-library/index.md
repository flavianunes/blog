---
title: Design Systems from a Software Engineer perspective
date: "2022-10-11T16:41:33.741Z"
description: ""
attachments: []
---

Building interfaces it's a part of a front-end engineering job. You most likely interact with the design team, and that interaction can come with some challenges for both, but a Design System can help with some of them.

## What is a Design System?

_Spoiler: it's not just a component library_

A design system is a set of standards to manage the user interface, creating a shared language and visual consistency through a collection of reusable components, documentation, and standards used to design and implement the applications.

For example, if your company has three applications, all three of them probably have buttons. Buttons are one of our reusable components, and you can learn how/where/when/why you should use them to reflect the company's brand, design languages, visual consistency, and standards in the documentation.

Design systems are constantly evolving as they are a product, not a project. For example, the design system's users are your company's front-end engineers and UX/UI designers. They all use the DS to build features, so they can give feedback and make suggestions often, so the team makes sure the DS is serving its purpose.

## The FE Engineer's contribution

Having FE Engineers involved in the DS is essential since they are the ones making the code version of the components and can also document their use to other engineers. Besides that, they can contribute to decisions and evaluate the technical feasibility of the designer's ideas.

It's important to know that **design and code must be in sync** for this to work. The color `gray-100` must be the same on the designer's tools (like Figma or Adobe XD) and the engineer's code. The components must have the same look and behavior. If you have this, when a designer makes a prototype of a new page using their assets of the DS (Figma components, for example), the engineer should be able to build the page as expected by using their assets (the component library, for example).

## Documentation, documentation everywhere

As mentioned, it's not only about having the building blocks (component library), but also about knowing how to use them to represent the company and give the user the best experience. To be able to do that, we need documentation. It's not negotiable.

Let's say the design team researches tooltips and concludes that they are bad for UX because of accessibility issues, so we shouldn't use them. This should be documented, so other designers don't make features that uses tooltips.

Also, if the research concludes that it's bad for accessibility, but you can use it in certain situations, in some specific ways, the documentation must include how to guarantee that use case in the component. Maybe it's passing a specific prop or using it in combination with other specific components. The goal is that engineers won't use the component in a different way than established by the DS.

At the end of the day, the DS documentation is your source of truth when it comes to user interfaces and should be updated frequently to reflect reality.
