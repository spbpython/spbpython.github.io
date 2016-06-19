import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import 'fullpage.js'
import 'fullpage.js/jquery.fullPage.css'

import './css/normalize.css'

import './css/app.css'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }

})

$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['wellcome', 'community', 'links'],
//    sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First', 'Second', 'Third']
  })
})
