# agido Frontend Example Project

## Preparation

-   Install [Node.js](https://nodejs.org/en/)
-   Install [Yarn](https://yarnpkg.com/en/)
-   Fork and clone the repository.
-   Create and checkout your own branch.
-   Run `yarn` inside this folder to install all dependencies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Not required here.

## Tasks

### Task 1: Preparation

-   Try to install and run the code.
-   Read the code and try to understand the underlying concepts

### Task 2: Concepts

-   Explain with your own words the different state management approaches (context, redux) with their advantages and disadvantages.
====
    In general, state managment systems are used to maintain the state within an application without passing down props to every component which might need the actual state. The context API is a built-in tool to manage this global state. Its major advantage is its simplicity, as well as the fact that no third-party dependencies are required. This results in a smaller bundle and makes it easier to maintain the code over time. This makes the Context API suitable for using it in smaller applications which need a global state.
    However, Redux should be used for more complex applications. Although it is more time consuming to set it up, It comes with Redux DevTools which helps with debugging while development. It also allowes the implementation of middleware, thus making it more powerfull. Last but not least, Redux has a better performance for larger systems.
====
-   What are the differences between classes and functional components?
====
    As already implied, class components are based on js classes. They can contain constructor functions, state as well as methods to carry out tasks. Until React implemented Hooks, using class components was the best way to maintain state within a component. Function based components do not include the ability to store any value in state. They need less code, are easier to read and provide better performances than class based compoentns. As mentioned before, React introduced Hooks to add state management to functional components.
====
-   What are the advantages of hooks over high order components or even mixins?
====
    There are different ways to share code between several components. Mixins in react were initially used to solve this problem. Although mixins generally do their job, it is hard to track dependencies between components and methods defined in mixins, especially when they are being nested.
    Using higher order components instead, helps to keep the code more organized. HOCs accept a component and returns this component by adding additional funcionality to it (eg. a method or props). Components can be wrapped in HOCs, which simplifies tracking the properties of a child component. Nevertheless, there are some downsides to HOCs. Wrapping component into component into component and so on, can have some sideseffects like maintenance and re-use difficulties (prop collision; break on changing order) since many layers might require adjustments.
    React Hooks are functional components which can hold the same amout of logic by keeping the code in the same place plus requiring less lines of code as well as impoving readability.
====

### Task 3: View

-   Enhance the Match interface with a country (e.g. Spain) and a league (e.g. Primera Division) property
-   Add the new information in a suitable way to the view. Use [styled-components](https://www.styled-components.com/) to layout and style the new elements.

### Task 4: Utils + Tests

-   Show the weekday of a match instead of the full date
-   Adapt the tests accordingly. Run `yarn test` to test your result.

### Task 5: Fetching

-   Add a mechanism to fetch the API data automatically in an inverval of 60 seconds in every examples.

## Pull-Request

-   Create a pull request from your fork to this repo.
