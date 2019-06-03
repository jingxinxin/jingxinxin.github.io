/*
 Aerial 1.0 by HTML5 UP
 html5up.net | @n33co
 Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
 */

// Skel.
skel.init({
  reset      : 'full',
  breakpoints: {
    'global' : {
      range       : '*',
      href        : 'assets/css/style.css',
      lockViewport: true,
      viewport    : 'minimal-ui'
    },
    'wide'   : {
      range: '-1680',
      href : 'assets/css/style-wide.css'
    },
    'normal' : {
      range: '-1280',
      href : 'assets/css/style-normal.css'
    },
    'mobile' : {
      range: '-640',
      href : 'assets/css/style-mobile.css'
    },
    'mobilep': {
      range: '-360',
      href : 'assets/css/style-mobilep.css'
    },
    'qr'     : {
      range: '*',
      href : 'assets/css/QR-code.css'
    }
  }
})

// Events (JS).

// Remove "loading" class once the page has fully loaded.
window.onload      = function () {
  document.body.className = ''
  var sum                 = Math.floor(Math.random() * 4)
  var images_bg_url       = 'https://i.loli.net/2019/06/03/5cf4e6954292173131.jpg' //assets/css/images/bg.jpg
  var images_bg_url1      = 'https://i.loli.net/2019/06/03/5cf4e69655a1389060.jpg' //assets/css/images/bg1.jpg
  var images_bg_url2      = 'https://i.loli.net/2019/06/03/5cf4e6977849b53249.jpg' //assets/css/images/bg2.jpg
  var images_bg_url3      = 'https://i.loli.net/2019/06/03/5cf4e6944752013937.jpg' //assets/css/images/bg3.jpg
  var images              = []
  images.push(images_bg_url, images_bg_url1, images_bg_url2, images_bg_url3)
  switch (sum) {
    case 0:
      document.getElementById('bg').style.backgroundImage = 'url(' + images[ sum ] + ')'
      break
    default:
      document.getElementById('bg').style.background     = 'url(' + images[ sum ] + ')'
      document.getElementById('bg').style.backgroundSize = 'contain'
      break
  }
  if (!window.IsPC()) {
    document.getElementById('qq_pc').href = '#qq'
  }
}
// IsPC
window.IsPC        = function () {
  var userAgentInfo = navigator.userAgent
  var Agents        = [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod' ]
  var flag          = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[ v ]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
// Prevent scrolling on touch.
window.ontouchmove = function () {
  return false
}

// Fix scroll position on orientation change.
window.onorientationchange = function () {
  document.body.scrollTop = 0
}

/*

 // Events (jQuery).
 // Aerial doesn't need jQuery, but if you're going to use it anyway remove the
 // block of JS events above and use the jQuery-based ones below instead.

 $(window)

 // Remove "loading" class once the page has fully loaded.
 .on('load', function() {
 $('body').removeClass('loading');
 })

 // Prevent scrolling on touch.
 .on('touchmove', function() {
 return false;
 })

 // Fix scroll position on orientation change.
 .on('orientationchange', function() {
 $('body').scrollTop(0);
 });

 */
