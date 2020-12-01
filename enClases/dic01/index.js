const mongoose=require('mongoose');
const axios=require('axios').default;
const cheerio=require('cheerio');
const cron=require('node-cron')

const {MONGO_URI}= require('./config');
const {Noticias}=require('./models');