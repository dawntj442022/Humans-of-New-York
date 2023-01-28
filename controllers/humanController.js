const express = require("express");
const router = express.Router();

const Human = require("../models/humans");

// Index
router.get("/", (req, res) => {
  Human.find({}, (error, allHumans) => {
    res.render("humans/Index", {
      humans: allHumans,
    });
  });
});

/// Index
router.get("/", (req, res) => {
  // Get all of the logs from the DB
  Log.find({}, (error, allLogs) => {
    // Send that data to a template
    res.render("logs/Index", {
      logs: allLogs,
    });
  });
});

// Update
router.put("/:id", (req, res) => {
  if (req.body.postToPublic === "on") {
    req.body.postToPublic = true;
  } else {
    req.body.postToPublic = false;
  }
  Human.findByIdAndUpdate(req.params.id, req.body, (err, updatedHuman) => {
    if (err) {
      return res.send({ error: err });
    }
    // console.human("updatedHuman", updatedHuman);
    res.redirect(`/humans/${req.params.id}`);
  });
});

// Edit
router.get("/:id/edit", (req, res) => {
  Human.findById(req.params.id, (err, foundHuman) => {
    if (!err) {
      res.render("humans/Edit", {
        human: foundHuman,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Create
router.post("/", (req, res) => {
  if (req.body.postToPublic === "on") {
    req.body.postToPublic = true;
  } else {
    req.body.postToPublic = false;
  }
  Human.create(req.body, (error, createdHuman) => {
    res.redirect("/humans"); // sends to /logs get route
  });
});

// Delete
router.delete("/:id", (req, res) => {
  Human.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/humans");
  });
});

//put this above your Show route
// New
router.get("/new", (req, res) => {
  res.render("humans/New");
});

// Show - Route
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Human.findById(id, (error, foundHuman) => {
    res.render("humans/Show", {
      human: foundHuman,
    });
  });
});

module.exports = router;
