# Next JS web app boilerplate
Web app boilerplate based on React, Redux, Redux-Saga, Next JS, styled-components and typescript.
Feel free to use it for your project.

## ⚡ Features
* Server side rendering provided by NextJs.
* NextJS, routing (feel free to customize).
* Styled components styling.
* Not bonded with any structure.
* TypeScript implemented.
* Redux and Redux-Saga ready to use.
* Custom 404 error page.

## ▶️ Getting started
```
git clone https://github.com/HelloBanksy/nextjs-web-app-boilerplate
```

## 👨‍💻 Starting dev environment
```
yarn
yarn dev
```

## 🚀 Starting prod environment
```
yarn build
yarn start
```

## Redux and Redux-Saga implementation example
```javascript
// Mapping redux state
const mapStateToProps = (state) => {
  return {
    exampleState: state,
  }
}

// Mapping functions dispatches
const mapDispachToProps = (dispatch) => {
  return {
    onExampleCall: () => dispatch({ type: 'YOUR_TYPE_OF_ACTION' }),
  }
}

const ComponentContainer = (props) => {
  return <Component {...props} />
}

export default connect(mapStateToProps, mapDispachToProps)(ComponentContainer)

```
