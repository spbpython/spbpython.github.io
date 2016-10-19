import $ from 'jquery'
import '../css/normalize.css'
import 'css-skeleton'
import 'fullpage.js'
import 'fullpage.js/dist/jquery.fullPage.css'

import '../css/main.css'

$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['wellcome', 'community', 'links'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First', 'Second', 'Third']
  })
})