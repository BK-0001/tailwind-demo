# React Lab Day - Cafe Menu

## Description

This is a simple React.js application that displays a menu for a cafe. The menu is stored in a JSON file inside of the folder backend.

![image View](./docs/Screenshot%202024-09-09%20at%2012.04.55 AM.png)

# Backend

## Installation

To run the backend it's necessary to install the JSON Server package:

```bash
cd backend
npm init -y
npm install -D json-server
```

## Execution

Inside the backend folder run the following command:

```bash
npx json-server products.json --port 3005
```

## Data model

The data model is composed by the following fields:

```json
{
  "id": 1,
  "name": "Cappuccino",
  "price": 3.5,
  "image": "https://images.unsplash.com/photo-1551024601-9bda064b9e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "about": "A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam."
}
```

# Frontend

## Installation

To install follow the documentation and the slides of the class, but don't forget to install inside of the Frontend folder.

```bash
cd frontend
```

```bash
npm create vite@latest .
```

## Design

You can find the design, colors and fonts in the [link](https://www.figma.com/file/8hFPRvmZEpsYQqcpwGGPL4/NextJS-Assignment?type=design&node-id=1%3A141&mode=design&t=UdBZ3nIjXUi7wSgl-1)

**You don't need to be concerned about the responsiveness of the application or to be accurate with the colors and fonts.** The main goal is to create the components and pages.

1. Header:

- The icons in the right doesn't need to be functional.
- The links in the left need to be functional, since is the way to navigate between the pages.

2. Footer

- The links in the right doesn't need to be functional.

3. Menu Page

- The items will be provided by the backend. You need to fetch the data from the backend and display the items in the page.

4. Detail Page

- The about section is provided by the backend.
- The button of the sizes need to be functional.
- The 'plus' and 'minus' buttons need to be functional and they need to update the price accordingly.
- The button add to cart doesn't need to be functional.

5. Context

- It is not technically necessary to implement
- However, considering the app will grow, Let's have it as needed
