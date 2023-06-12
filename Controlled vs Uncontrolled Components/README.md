# Controlled vs. Uncontrolled Components in ReactJS

A simple React webpage to showcase how to build a React component that is Controlled and Uncontrolled.

## Description

In ReactJS you use components and depending on how you build them they are Controlled, Uncontrolled, or both. A Controlled component is one whose state is managed within the component. Whereas an Uncontrolled component is one who leaves the state management to the developer and is not controlled within the component.

The [accordion component](/Controlled%20vs%20Uncontrolled%20Components/src/components/Accordion/Accordion.tsx#L21) in this project is able to be controlled and uncontrolled. When clicking on an individual accordion its state is maintained within the component and when clicking the `Toggle All` button it allows the developer to override the internal state management and changes the state of all accordions manually.

### Dependencies

- React
- React-dom
- React-router-dom
- Vite

### Running Project Locally

- Clone the project locally
- Run `npm install` via command line
- Run `npm run dev` via command line
- Open your web browser to the IP address printed from the above command
