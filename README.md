# Choows

[![GitHub license](https://img.shields.io/github/license/gmoraleslondono/todoly.svg)](https://github.com/gmoraleslondono/todoly/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

Users can search TV shows by name, see details such as rating, summary, etc. And save their favorite shows for later to see upcoming episodes.

## 🎨 Design (Figma)

https://www.figma.com/file/oJz4fk0U8hogJJRuzInjGI/choows

## 🚥 Lighthouse report

Home: https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fchoows.vercel.app%2F
Favorites:https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fchoows.vercel.app%2Ffavorites
Upcoming: https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fchoows.vercel.app%2Fupcoming


## 🏆 The goal

It is a web application integrated with TV Maze public REST API. It was built using Vue.js and a central store to share data Vuex, using reusable components (e.g. header, footer, etc.) and different views connected.

At the top of the page, there is a menu that allows the user to navigate through the web application.

At the home page, the user can find an input field where they can type the show name, or a part of the show name, clicking the button search or pressing enter the user can see a show list with all the possible matches. The user can add or remove from the favorite list by clicking on the button under the image.

The user can read more details about one specific show by clicking over the picture, or over the TV show name. On the TV show details page, the user can add or remove from the favorite list by clicking on the button under the image.

On the favorites page, the user can find a list with all their favorite shows, it also contains some details about each TV show. The user can remove shows from the list by clicking on the button remove.

The upcoming episodes page, contains the favorites TV shows upcoming episodes ordered chronologically.

## 🚧 Future improvements

Check the project board for future improvements, ideas and bugs:<br>
https://github.com/gmoraleslondono/choows/projects/1

## 🛠 Technologies and tools

### Prerequisites

- Node.js 12.x or newer
- npm 6.x or newer
- Vue CLI

### Technologies

- HTML
- CSS
- JavaScript
- Vue.js
- Vuex
- localStorage
- Prettier
- ESLint

### Tools

- Figma
- TV Maze public REST API
- Hoppscotch
- GitHub
- Visual Studio Code
- Vercel

## 👷‍♀️ Development

### How to run locally

- Clone this repository.

```
git clone https://github.com/gmoraleslondono/choows.git
```

In the root directory

- Run `npm install`

- Run `npm serve`

- Open http://127.0.0.1:8080 🚀

### Other commands

#### Run ESLint

```
npm run lint
```

#### Run Prettier

```
npm run prettier
```

## Credits

Made with ❤ by Gloria Morales
