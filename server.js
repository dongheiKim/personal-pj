import express, { json } from 'express';
import HTTP from 'superagent';

const app = express()
const port = 3000

app.use(express.static('public'));
app.use(json()) 

