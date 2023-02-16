const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("views"));
app.use(cookieParser());

const url =
  "mongodb+srv://arittram:w1rsUFyWgCW3HrEd@mycluster.8ilggc9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);
let result;
let showPropertyDescription;
let dbDetails;
let cookie;

async function dbConnect() {
  try {
    result = await client.connect();
    console.log("Dtatabase Connected!");
  } catch (err) {
    console.log(err);
  }
}
dbConnect();

app.get("/", async (req, res) => {
  if (req.cookies) {
    res.clearCookie(`Phone No`);
    res.clearCookie(`country`);
    cookie = false;
  }

  dbDetails = await result
    .db("myAirBnb")
    .collection("propertyList")
    .find({})
    .toArray();

  res.render("home", {
    dbDetails,
    login: false,
  });
});

app.get("/propertyDescription/:propertyName", async (req, res) => {
  showPropertyDescription = await result
    .db("myAirBnb")
    .collection("propertyList")
    .findOne({ properLocation: req.params.propertyName });
  if (cookie) {
    res.render("propertyDescription", {
      showPropertyDescription,
      login: true,
    });
  } else {
    res.render("propertyDescription", {
      showPropertyDescription,
      login: false,
    });
  }
});

app.get(
  "/billingPage/:totalDate/:noOfGuest/:checkinDt/:checkoutDt/:checkinMn/:checkoutMn",
  (req, res) => {
    if (cookie) {
      res.render("billingPage", {
        showPropertyDescription,
        totalDate: req.params.totalDate,
        noOfGuest: req.params.noOfGuest,
        checkin: req.params.checkinDt,
        checkout: req.params.checkoutDt,
        checkMn: req.params.checkinMn,
        checkoutMn: req.params.checkoutMn,
        login: true,
      });
    } else {
      res.render("billingPage", {
        showPropertyDescription,
        totalDate: req.params.totalDate,
        noOfGuest: req.params.noOfGuest,
        checkin: req.params.checkinDt,
        checkout: req.params.checkoutDt,
        checkMn: req.params.checkinMn,
        checkoutMn: req.params.checkoutMn,
        login: false,
      });
    }
  }
);

app.post("/homeLoginSuccess", async (req, res) => {
  res.cookie(`Phone No`, req.body.loginPhNo);
  res.cookie(`country`, req.body.loginCountry);
  cookie = true;
  dbDetails = await result
    .db("myAirBnb")
    .collection("propertyList")
    .find({})
    .toArray();
  res.render("home", {
    dbDetails,
    login: true,
  });
});

app.listen(PORT, () => {
  console.log("Server Started");
});
