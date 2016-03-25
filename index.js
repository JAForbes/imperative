var canvas = document.createElement('canvas')
var con = canvas.getContext('2d')

window.onload = function(){


    window.addEventListener('keydown', function(e){
        ;active[0] && active[0].onkeydown &&
            active[0].onkeydown(e, canvas, con)

        if(e.keyCode == 9){
            active.push(active.shift())
            e.preventDefault()
            canvas.width = canvas.width
        }
    })

    document.body.style.margin = 0
    document.body.appendChild(canvas)

    function onresize(){
        var {width,height} = getComputedStyle(document.body)
        canvas.width = parseInt(width)
        canvas.height = parseInt(height)
    }

    window.onresize = onresize
    onresize()

    function loop(){

        active[0] && active[0].loop &&
        active[0].loop(canvas,con)

        requestAnimationFrame(loop)
    }
    loop()
}
