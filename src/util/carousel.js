export function carouselJs() {
    
  var container = document.querySelector('.container')
  var arrow_l = document.querySelector('.arrow_l')
  var arrow_r = document.querySelector('.arrow_r')
  var show = document.querySelector('.show')
  var containerWidth = container.offsetWidth
  var ol = document.querySelector('.circle')

  container.addEventListener('mouseover', function() {
    arrow_l.style.display = 'inline-block'
    arrow_r.style.display = 'inline-block'
    clearInterval(timer)
    // 清楚定时器变量
    timer = null   

  })
  container.addEventListener('mouseleave', function() {
    arrow_l.style.display = 'none'
    arrow_r.style.display = 'none'
    timer = setInterval(() => {
      arrow_r.click()
    }, 2000);
  })

  // 设置底部小圆圈事件,要在克隆第一张图片节点之前
  for(var i = 0; i < show.children.length; i++) {
    var li = document.createElement('li')
    li.setAttribute('index', i)
    ol.appendChild(li)
    li.addEventListener('click', function() {
      for(var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = ''
      }
      this.className = 'current'
      var index = this.getAttribute('index')
      num = index
      circle = index
      animate(show, -index*containerWidth)
    })
  }

  var first = show.children[0].cloneNode(true)
  show.appendChild(first)
  
  var num = 0
  var circle = 0
  circleChange()
  var flag = true
  arrow_r.addEventListener('click', function() {
    
    if(flag) {
      flag = false
      if(num == show.children.length - 1) {
        show.style.left = 0 
        num = 0
      }
      num++
      // show.style.left = - (600*num) + 'px'
      animate(show, -num*containerWidth, function() {
        flag = true
      })
      // console.log(num)
      circle++
      if(circle == ol.children.length) {
        circle = 0
      }
      circleChange()
    }

  })

  arrow_l.addEventListener('click', function() {
  
    
      if(flag) {
        flag = false
        if(num == 0) {
          num = show.children.length - 1
          show.style.left = -num * containerWidth + 'px'
        }
        num--
        // show.style.left = - (num*containerWidth) + 'px'
        animate(show, -num*containerWidth, function() {
          flag = true
        })
        // console.log(num)
        circle--
        circle = circle < 0 ? ol.children.length - 1 : circle
        circleChange()
      }
  })

  // 设置自动播放
  var timer = setInterval(() => {
    arrow_r.click()
  }, 2000);

  function circleChange() {
    for(var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = ''
    }
    ol.children[circle].className = 'current'
  }
}