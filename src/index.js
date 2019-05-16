//import jQuery from 'jquery'
//import popper from 'popper'
//import bootstrap from 'bootstrap'


require('webpack-jquery-ui');
require('webpack-jquery-ui/css');  //ommit, if you don't want to load basic css theme


//import 'jquery'
//import 'jquery-ui'


import './js/vendors/jquery'
import './js/common.js';
import './scss/main.scss';

import './blocks/btn/btn';
import './blocks/percent_pie/percent_pie';
import './blocks/sliders/sliders';
import './blocks/stages/stages';
import './blocks/form-elements/form-elements';
import './blocks/location/location';
import './blocks/calendar/calendar';
import './blocks/messaging/messaging';
import './blocks/calendar/calendar';
import './blocks/video/video';
//import './css/main.css';
//import Icon from './img/1.png';
import './blocks/video/bg.jpg' //БГ для видео

//import 'bootstrap/dist/css/bootstrap.min.css'
//import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'  //отдельные файлы
// import Vue   // общая библиотека
// import Vue  from 'vue'       если нужно использовать Vue.use()
//window.Vue = require('vue')   //---более правильный метод