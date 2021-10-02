function Select(){
    x = document.getElementById('SelectBtn')
    setTimeout("x.style='display:none'",300)
    x.style='opacity:0'
    document.getElementById('readline').style='display:unset!important;'
    // Hide The Button
    y = document.getElementById('SelectBox')
    y.innerHTML = ''
    for (var i=0;i<500;i++){
        y.innerHTML += '<div class=\'namebox\' id=\'namebox\'>'+names[Math.floor(Math.random() * names.length)]+'</div>'
    }
    y.style = 'transition: all 10s ease;opacity:1;margin-bottom:0px;'
}