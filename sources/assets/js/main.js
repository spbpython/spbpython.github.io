import $ from 'jquery'
import '../css/normalize.css'
import 'fullpage.js'
//require('fullpage.js/jquery.fullPage.css');
import 'skeleton-css'
import '../css/main.css'

$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['wellcome', 'community', 'links'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First', 'Second', 'Third']
  })
})