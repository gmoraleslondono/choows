# Choows

The app allows the user to search TV shows by name, they can see more details about an specific show and add or remove shows from favorite list.

## 🏆 The goal

The program is a Vue.js web application integrated with TVmaze Public REST API. It was built using a central store to share data Vuex,js, using reusable components (ex: header, footer, etc) and different views connected each other.

At the top page there is two buttons that route to home view and favorites view, allowing the user navigate through the web application.

At the home view the user can find an input field were they can type the show name, or a part of the show name, clicking the button search or pressing enter the user can see a show list with all the possible matches.
The user can add or remove from the favorite list clicking in the button under the image.

The user can read more details about one specific show clicking over the picture, or over the TV show name.
In the TV show details view the user can add or remove from favorite list clicking in the button under the image.

In the favorites view the user can find a list with all their favorite shows, it also contains some details about each TV show. The user can remove shows from the list clicking in the button remove.

Find the prototype here: [TV show design.](https://www.figma.com/file/oJz4fk0U8hogJJRuzInjGI/tv_shows?node-id=0%3A1)

## 🚧 Future improvements

See the [project board](https://github.com/gmoraleslondono/tv-shows/projects/1?add_cards_query=is%3Aopen) whit future improvements, issues and other tasks.

## 🛠 Technologies used and tools

- HTML
- CSS
- JavaScript
- Vue.js
- Vuex.js
- Window.localStorage (localStorage)
- TVmaze Public REST API

### For development:

- Prettier
- ESLint
- Editorconfig

### For deployment:

- GitHub
- Vercel

### Other programs

- Figma (Design)
- VSCode (Write code)
- Hoppscotch (Check API endpoints data)

## 📝 Prerequisites

- Node.js 12.x or newer
- Npm 6.x or newer
- Vue CLI

## 👷‍♀️ Development

### How to run locally

- Clone this repository.

```
git clone https://github.com/gmoraleslondono/tv-shows.git
```

- Run npm install in the repository root

- Run npm serve

- Open http://127.0.0.1:8080 🚀

### Other commands

#### Lints and fixes files

```
npm run lint
```

#### Prettier and fixes files

```
npm run prettier
```

#### ESLint and fixes files

```
npm run eslint:check
```

## Credits

Made with ❤ by Gloria Morales
