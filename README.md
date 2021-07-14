# Laravel Electron Desktop Application
Build laravel desktop applications using Electron JS.

[![NPM](https://badgen.net/badge/npm/7.17.0/orange?icon&label)](https://www.twitter.com/giusniyyel)
[![License](https://badgen.net/badge/license/MIT/blue)](LICENSE)
![Status](https://badgen.net/badge/status/stable/green)
[![Twitter](https://badgen.net/badge/twitter/@giusniyyel/blue?icon&label)](https://www.twitter.com/giusniyyel)
[![Medium](https://badgen.net/badge/medium/@giusniyyel/blue?icon&label)](https://medium.com/@giusniyyel)

### Required
- php 7.4 or higher
- NodeJS 7.17 or higher

### Included
- Electron
- Electron-Packager
- Laravel 8

## Installation
This repository requires NodeJS 16.4.2 & Laravel 8 or higher to run.
```sh
# Clone this repository
git clone https://github.com/giusniyyel/electron-laravel.git
# Go into the repository
cd electron-laravel
# Install dependencies
npm install
# Create your laravel project (you should use www as project name)
laravel new www
# Run the app
npm start
```

## Configuration
If you need to make some modifications of the PHP Server you can check [PHP Server Manager Documentation](https://www.npmjs.com/package/php-server-manager)

### Application Index
The default `index.php` is found in laravel project public folder (`/www/public` by default), you can change it in `// server configuration` section which is in `main.js` file.

## Credits
I really apreaciate this repositories for the help
- [Mark Lee (Electron-Packager)](https://github.com/electron/electron-packager)
- [AJ-TechSoul (Electron 4 PHP)](https://github.com/aj-techsoul/ELECTRON-4-PHP/)
- [Oscar Otero (PHP Server Manager)](https://github.com/oscarotero/php-server-manager)
- [Haruncpi (laravel-electron)](https://github.com/laravelarticle/laravel-electron)
- [Electron JS](https://www.electronjs.org/)

---
Typed with ❤️ by [Daniel Campos](https://github.com/giusniyyel) 😊
