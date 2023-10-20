# BLACKprInt

![e](https://raw.githubusercontent.com/n3-rd/blackprint/4c590dce93f726c00a405eaf78c5bdb80f42acb4/src-tauri/icons/128x128.png)

# **A simple qrcode generator**

## Installation

### Linux

Blackprint is available via debian:
[blackprint_1.0.0_amd64.deb](https://github.com/n3-rd/blackprint/releases/download/main/blackprint_1.0.0_amd64.deb)

### Windows

Download windows executable below:
[blackprint_1.0.0_x64-setup.exe](https://github.com/n3-rd/blackprint/releases/download/main/blackprint_1.0.0_x64-setup.exe)

### MacOS

Blackprint is currently as a `dmg` file, support for Homebrew will be added soon:
[blackprint_1.0.0_x64.dmg](https://github.com/n3-rd/blackprint/releases/download/main/blackprint_1.0.0_x64.dmg)

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
