# 🍽 Litual

## 🔎 Overview

Litual is a simple single page app that allows users to order food from the conveinence of their browsers. Users add and remove items from their carts, but in order to submit an order, they must register an account or login. A text message is sent to the restaurant upon submitting and order via the Twilio API and once the restaurant accepts or rejects the user's order, a text message is sent to the user with the time estimate for their order's completion. 

Litual also contains a convenient restaurant view where a restaurant will recieve all incoming orders in a simple display, separating pending and accepted orders for easy tracking.

For a hands on demo, simply visit the following link and allow for up to 10 seconds for the heroku database to wake up from standby.

https://litual.herokuapp.com/

## 📸 Snapshots 

### Home View

!["Home View"](https://i.imgur.com/g5k250o.png)

_____
### Order Review

!["Order Review"](https://i.imgur.com/URF8Gcd.png)

_____
### Restaurant View

!["Order Review"](https://i.imgur.com/K2iQGBD.png)

_____

## 🛠 Setup

To play around with and edit the code, follow these instructions:

1. Clone the repository in a local folder

2. Install dependencies with `npm install`

3. Once the dependencies are installed, run the app from the root directory with `npm run local`

4. Go to http://localhost:8080 in your browser to interact with the app

## ⚙️ Dependencies 

- bcrypt: ^3.0.7
- body-parser: ^1.19.0
- chalk: ^2.4.2
- cookie-session: ^1.3.3
- dotenv: ^2.0.0
- ejs: ^2.6.2
- express: ^4.17.1
- express-longpoll: 0.0.6
- morgan: ^1.9.1
- node-sass-middleware: ^0.11.0
- pg: ^6.4.2
- pg-native: ^3.0.0
- sass: ^1.23.7
- twilio: ^3.37.1
