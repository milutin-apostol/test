import express from "express";
const app = express();
const port = 3000; // default port to listen

import fs from 'fs';
import simpleGit, { SimpleGit } from 'simple-git';
const git: SimpleGit = simpleGit();


// Define a route handler for the default home page
app.get("/", async (req, res) => {
    try {
        await git.add('./../../*').commit("first commit!").addRemote('origin', 'https://github.com/milutin-apostol/test.git').push('origin', 'master');

        res.send("Done");
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});

// Start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});