# BLACKprInt

![e](https://raw.githubusercontent.com/n3-rd/blackprint/4c590dce93f726c00a405eaf78c5bdb80f42acb4/src-tauri/icons/128x128.png)

# **A simple qrcode generator**

## Installation

### Linux

Blackprint is available on multiple linux distrubutions, just search `blackprint` on your package manager

### Windows

Blackprint is currently not available on Windows, but will be in the near future, you can watch for releases. Blackprint can also be built manually for windows

### MacOS

Blackprint is currently not available on MacOS, but can be built manually.

## Building

Blackprint is built using [Tauri](https://tauri.app), so you will require NodeJS and Rust to build.

#### Developing

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run tauri dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

To create a production version of the app:

```bash
npm run tauri build
```

## Contributing

Contributions are always welcome!
