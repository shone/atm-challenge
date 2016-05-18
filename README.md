# ATM Challenge

A mock Automated Teller Machine in HTML5, created over two days as a coding challenge.

## To run

```sh
git clone <this repository> atm
cd ./atm
npm install
bower install
node server.js --port 8080
```

Open ```localhost:8080``` in a web browser, and click the credit card to begin. Use ```1234``` as the PIN.

## About

The ATM interface is encapsulated into a Polymer module, with the keypad interface also separated into a reusable component. All graphics are implemented with scalable vector files or CSS, aside from JPGs for currency. The minimal dependencies are managed with NPM and Bower.

Tested on Chrome 50 and Firefox 45.

Theme colors and design inspired by [Number26](https://number26.eu/)