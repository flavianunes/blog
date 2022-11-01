---
title: State Management 101
date: "2022-11-01T13:02:17.137Z"
attachments: []
---

A state is data that represents the system/application at a certain time. For example, if you have an accordion component and one of its items is open, at this certain time, the state that handles if your item is open or closed is set to `open`. However this changes when a click event is triggered, and now your state is `closed`. Dealing with front-end applications, there are different types of states we deal with.

## Types of State

**UI state** is usually a short-lived state used to make sure the interface has the expected behavior. The previous accordion example fits in this category. Another common example of this is modal (or dialog) components, where their state may change from open to closed and that value will determine what's displayed at the UI.

Although important, that value usually doesn't need to last more than that moment when the user is interacting with the component, unless you want to track it with Google Analytics, for example, to understand and study users' preferences and/or behavior.

When you're managing the UI state, you usually can keep it inside the component itself, since it's probably not relevant for the rest of the application and doesn't need to be global.

**Persisted state** represents data that needs to last longer than the user session by persisting it to the back-end for example. They can be stored in a database or even in the local storage, for example when you want to store the user preference between a dark or light theme.

## Managing the State

State Management is to handle how that data is stored, synced and updated. While doing that, we should keep in mind that we want user events (like a click or a scroll) triggering data change. We usually don't want data change triggering data changing since this can turn into a lot of re-rendering that can be bad for performance.

Also, we should never mutate data directly, we should create a new reference. This helps with keeping our application predictable. A good example of this is the `useState` hook from React, where you need to use the `setState` to update it, instead of just directly mutating the `state` variable.

## What to use

You can implement your own state management system, but we have several libraries to assist with that. Some of them paired with the most popular frameworks (like <a href="https://pinia.vuejs.org/" target="_blank"> Pinia </a> and <a href="https://redux.js.org/" target="_blank"> Redux</a>) and some of them are framework agnostic (like <a href="https://xstate.js.org/docs/" target="_blank">XState</a>). Keep in mind that you don't always need them, especially if you're only dealing with UI state in a component scope, like the accordion and modal examples.
