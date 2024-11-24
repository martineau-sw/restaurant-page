# Project: Restaurant Page

[Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) project as part of the The Odin Project curriculum.

## Assignment

*DOM element should be created using JavaScript*

1. Configure `webpack` and `package.json`
2. Include `.gitignore` to exclude `node_modules` and `dist`
3. Create `src/template.html`with `body>(header+nav>(button{Home}+button{Menu}+button{About}))+#content`
4. Run `webpack-dev-server`
5. Create homepage within `#content` with image, headline, and text to outline content
6. Refactor outline to load from JavaScript 
7. Build single page tabbed UX like this [example page](https://web.archive.org/web/20221024060550/https://eckben.github.io/bearysBreakfastBar/) 

### Deployment

1. Create deployment branch `gh-pages`, checkout, and ensure synced changes
2. Build from source
3. Force add `dist` and commit
4. Push branch `git subtree push --prefix dist origin gh-pages`
5. Configure GitHub page

## Concept

### Theme

- High contrast
- Near black
- Sharp lines
- Neon accents
- Abstract images

### Cafe

Name: Facsimilie Cafe

Home
- 
About
- 
Menu
- Espresso
  - Latte
  - Cappuccino 
  - Solo
  - Doppio

## Todo

- [ ] Initialize `package.json` to default
- [ ] Install `webpack`
  - [ ] `webpack`
  - [ ] `webpack-cli`
- [ ] Configure `webpack` with development packages:
  - [ ] `style-loader`, `css-load` for CSS
  - [ ] `html-loader` for images
  - [ ] `html-webpack-plugin`
  - [ ] `webpack-dev-server`
- [ ] Get font
- [ ] Get images
- [ ] `dist/`
- [ ] `src/`
  - [ ] `template.html`
  - [ ] `index.js`
  - [ ] `style.css`
  - [ ] `home.js`
  - [ ] `menu.js`
  - [ ] `about.js`
