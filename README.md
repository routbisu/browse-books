# Reading list

Consumes a reading list API and displays a list of recommended books to read.

### Steps to run

Recommended node version: v16.13.1

```
npm install
npm start // Starts the React app
```

## Storybook

Storybook allows testing and playing with components in isolation. Run this command to start storybook on port 6006

```
npm run storybook
```

## Potential improvements

In the interest of time there were a few features missed out from the implementation which would ideally be done in a production environment:

- Better error handling (now displays an alert message)
- Building custom components with own CSS instead of using an UI library like Chakra UI, or writing custom CSS for finegrain control over CSS.
- Unit testing of components with Jest.
- Building a component for displaying book details on the second page.
