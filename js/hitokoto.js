fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto_all = data
      const hitokoto = document.querySelector('blockquote')
      hitokoto.innerText = data.hitokoto
      // console.log(hitokoto_all)
    })
    .catch(console.error)