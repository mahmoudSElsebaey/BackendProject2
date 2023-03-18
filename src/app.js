const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// public folder
const publicDerctory = path.join(__dirname, "../public");
app.use(express.static(publicDerctory));

app.set("view engine", "hbs");

const viewsDerctory = path.join(__dirname, "../handlebars/views");
app.set("views", viewsDerctory);

var hbs = require("hbs");
const partialsPath = path.join(__dirname, "../handlebars/partials");
hbs.registerPartials(partialsPath);

// home page ==> index
app.get("/", (req, res) => {
  res.render("index", {
    // title: "Welcome To website",
    welcTitle: "Welcome To website",
    info: "This site is one of the best sites in the world to download the latest online games",
    imgbg: "images/homebg.jpg",
    mobile: "01207247967",
    phone: "0482977847",
    email: "mahmoudelsebaey710@gmail.com",
    address: "Egypt/Cairo/Garden city",
  });
});
//games page
app.get("/games", (req, res) => {
  res.render("games", {
    title: "games",
    info: "This site is one of the best sites in the world to download the latest online games",

    imgbg: "images/gamebg.jpg",
    mobile: "01207247967",
    phone: "0482977847",
    email: "mahmoudelsebaey710@gmail.com",
    address: "Egypt/Cairo/Garden city",
    game1: {
      img: "images/g1.jpg",
      name: "Game's Name",
      rate: "4.4",
      desc: "this game is very good for children and youth too , you can play it online and offline",
    },
    game2: {
      img: "images/g2.jpg",
      name: "Game's Name",
      rate: "4.5",
      desc: "this game is very good for children and youth too , you can play it online and offline",
    },
    game3: {
      img: "images/g3.jpg",
      name: "Game's Name",
      rate: "3.4",
      desc: "this game is very good for children and youth too , you can play it online and offline",
    },
    game4: {
      img: "images/g4.jpg",
      name: "Game's Name",
      rate: "3.8",
      desc: "this game is very good for children and youth too , you can play it online and offline",
    },
    game5: {
      img: "images/g5.jpg",
      name: "Game's Name",
      rate: "4.1",
      desc: "this game is very good for children and youth too , you can play it online and offline",
    },
    game6: {
      img: "images/g6.jpg",
      name: "Game's Name",
      rate: "4.4",
      desc: "this game is very good for children and youth too , you can play it online and offline",
    },
  });
});
// About page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About us",
    info: "This site is one of the best sites in the world to download the latest online games",
    desc: {
      d1: "Welcome to our website! We are a team of professionals who are dedicated to providing you with high-quality products and services. Our mission is to make your life easier and more enjoyable by offering solutions that meet your needs and exceed your expectations.",
      d2: "Thank you for visiting our website. We hope you find the information you are looking for and encourage you to contact us if you have any questions or concerns. We look forward to serving you!",
    },
    aboutImages: { img1: "images/about1.jpg", img2: "images/about2.jpg" },
    mobile: "01207247967",
    phone: "0482977847",
    email: "mahmoudelsebaey710@gmail.com",
    address: "Egypt/Cairo/Garden city",
    imgbg: "images/aboutbg.jpg",
  });
});
// team page
app.get("/team", (req, res) => {
  res.render("team", {
    title: "Team",
    info: "This site is one of the best sites in the world to download the latest online games",
    team1: {
      img: "images/team1.jpg",
      name: "Mahmoud Elsebaey",
      age: 22,
      city: "Menoufia",
      dept: "Full-stack developer",
    },
    team2: {
      img: "images/team2.jpg",
      name: "Ali Ahmed Matar",
      age: 25,
      city: "Alex",
      dept: "Front-end developer",
    },
    team3: {
      img: "images/team3.jpg",
      name: "Islam Mohamed",
      age: 26,
      city: "Mansoura",
      dept: "Full-stack developer",
    },
    team4: {
      img: "images/team4.jpg",
      name: "Salma Hassan",
      age: 23,
      city: "cairo",
      dept: "Web Designer",
    },
    mobile: "01207247967",
    phone: "0482977847",
    email: "mahmoudelsebaey710@gmail.com",
    address: "Egypt/Cairo/Garden city",
    imgbg: "images/teambg.jpg",
  });
});
//contact page
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "contact us",
    info: "if you need any help , you can contact with us from this page",
    mobile: "01207247967",
    phone: "0482977847",
    email: "mahmoudelsebaey710@gmail.com",
    address: "Egypt/Cairo/Garden city",
    imgbg: "images/contactbg.jpg",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
