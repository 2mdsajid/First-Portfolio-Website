$(document).ready(() => {


  //SCROLL REVEAL
  window.sr = ScrollReveal({
    origin: 'top',
    delay: 200,
    distance: '120px',
    easing: 'ease-in-out',
  })
  sr.reveal('section p')
  sr.reveal('section div')
  sr.reveal('section')


  //NAV LIST TOGGLE
  $('.mode').hide()
  $('.gauntlet').hide()

  $('.tab').on('click', () => {
    $('.tab').toggleClass('click')
    $('ul').toggleClass('hide')
    $('ul').toggleClass('show')
    $('.mode').show(1000)
    $('.gauntlet').show()
  })

  $('li a').on('click', () => {
    $('ul').toggleClass('hide')
    $('ul').toggleClass('show')
    $('.tab').toggleClass('click')
    $('header').css('opacity', 1)
  })


  //TOGGLE NAV ON ACTIVE
  $('section').on('click', toggleNav)
  $('section').on('touchstart', toggleNav)

  function toggleNav() {
    if (document.querySelector('ul').classList.contains('show')) {
      $('ul').toggleClass('hide')
      $('ul').toggleClass('show')
      $('.tab').toggleClass('click')
    }
  }


  //MODE CHANGER
  $('.m-terminal').slideToggle(100)
  $('.mode-img').on('click', () => {
    $('.m-terminal').slideToggle(100)
    $('.mode-img').toggleClass('rotate-img')
  })


  //MORE TOGGLE
  $('.more-ii').slideUp()
  $('.more-img').on('click', () => {
    $('.more-ii').slideToggle(200)
    $('.more-img').toggleClass('rotate-img')
  })


  //GAUNTLET ANIMATION
  $('.gauntlet').on('click', () => {
    $('.gauntlet').attr('src', 'photos/web/as.jpg')
    $('body').fadeOut(3000)
  })

  //ANIMATED TEXT
  let name = ['PROGRAMMER', 'DEVELOPER', 'DOCTOR', 'PHYSICIST']
  i = 0
  j = 0
  text = ''
  fore = true
  setInterval(() => {
    if (j > name.length - 1) {
      j = 0
    }
    names = name[j]
    if (fore) {
      text += names[i]
      i++
      if (i > names.length - 1) {
        fore = false
      }
    } else if (!fore) {
      text = text.substring(0, text.length - 1)
      i--
      if (i <= 0) {
        fore = true
        text = ''
        j++
      }
    }


    $('.the_text').text(text + '  ')
    $('.aux').text('')
  }, 150)




  //ASTRO ANIMATION
  h = parseInt($('.astro').css('height')) - 200
  w = parseInt($('.astro').css('width')) - 250

  let p = Math.floor(Math.random() * h)
  let q = Math.floor(Math.random() * w)

  x = false
  y = false
  s = 1
  theta = 0

  setInterval(() => {
    $('.astro-img').css({ 'top': p, 'left': q, 'transform': `rotate(${theta}deg)` })
    theta += 1

    if (x) {
      p -= s
      if (p <= 0) {
        x = false
      }
    } else {
      p += s
      if (p >= h) {
        x = true
      }
    }

    if (y) {
      q -= s
      if (q <= 0) {
        y = false
      }
    } else {
      q += s
      if (q >= w) {
        y = true
      }
    }

  }, 20)


  //NAV TOGGLE IN SCROLL
  let oldValue = 0;
  opa = 100
  window.addEventListener('scroll', function(e) {


    newValue = window.pageYOffset;

    scrollLength = oldValue - newValue
    //Subtract the two and conclude
    if (scrollLength < -15) {
      if (opa > 100) {
        opa = 100
      }
      opa = 0
      //$('header').slideUp(100)


    } else if (scrollLength > 15) {
      if (opa < 0) {
        opa = 0
      }
      opa = 100
      //$('header').slideDown(100)

    }
    $('header').css('opacity', opa / 100)


    // Update the old value
    oldValue = newValue;
  })


})