const Data = [
    { url: './images/1th109951169407606963.jpg',color: 'rgb(183,174,128)'},
    { url: './images/2th109951169405817009.jpg',color: 'rgb(192,136,232)'},
    { url: './images/3th109951169405816563.jpg',color: 'rgb(70, 74, 75)'},
    { url: './images/4th109951169405812874.jpg',color: 'rgb(170,113, 93)'},
    { url: './images/5th109951169405818732.jpg',color: 'rgb(132,153,159)'},
    { url: './images/6th109951169405814377.jpg',color: 'rgb(29, 26, 33)'},
    { url: './images/7th109951169405819786.jpg',color: 'rgb(183,149,102)'},
    { url: './images/8th109951169405828003.jpg',color: 'rgb(172, 74, 27)'},
  ]
   let i=0
  //  获取对象
  const img=document.querySelector('.container img')
  const content=document.querySelector('.content')
  const pre=document.querySelector('.button1')
  const next=document.querySelector('.button2')
    //构造函数

  function change(){
    const dot=document.querySelector(`.dot:nth-child(${i+1})`)
    img.src = Data[i].url
    content.style.background=Data[i].color
    // 小圆点
    document.querySelector('.dots .active').classList.remove('active')
    dot.classList.add('active')
  }
  
  // 调用函数
  next.addEventListener('click',
  function(){
    i++
    if(i>=Data.length) i=0
    change()
  })

  pre.addEventListener('click',
  function(){
    i--
    if(i<0) i=7
  change()
  })
  // 设置定时器
  let time =setInterval(
    function(){
      next.click()
    }
  ,4000)
    // 鼠标经过关闭
  img.addEventListener("mouseenter",
  function(){
    clearInterval(time)
  })
  // 鼠标离开打开
  img.addEventListener('mouseleave',
  function(){
    clearInterval(time)
    time = setInterval(
    function(){
      next.click()
    },4000)
  })
