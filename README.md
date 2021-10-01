# How to inject Svelte using chrome extension
Find more information at [byteofcode.io](https://byteofcode.io).
## Get started


Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Open google chrome. Navigate to [google.com](https://www.google.com/). Go to the vertical three dot elipses on the top right and click on more tools -> Extensions, or `chrome://extensions/` in chrome. Click on and enable Develor Mode. Then load the package by clicking on Load unpacked, find the directory for this project. Select public and confirm.  When you go to [google.com](https://www.google.com/) you can begin to start your code injection in `src/main.js`.  Enjoy

## main things to take away
### Find where you want to inject code
this code is in `src/main.js` it will create the div to be used for the target for the App.
```
const div = document.querySelectorAll('form[action="/search"]')[0].parentElement.parentElement.children[3]
div.innerHTML = '<div id="addSvelteHere"></div>'
const app = new App({
	target: document.querySelector("#addSvelteHere"),
  //...
})
```

### Manifest
This section of the manifest enables the enjected code. Must build with `npm run dev`.
```json
  "content_scripts": [
    {
      "matches": [
        "https://*/*"
      ],
      "css": [ "build/bundle.css"],
      "js": ["build/bundle.js"]
    }
  ]
```
