var box = {x:300, y:300}
var amplitude = 1
var step = 500
var stroke = 2
var t = 0


function onkeydown(e){
    step = e.keyCode == 38 ? step+step/2
        : e.keyCode == 40 ? step-step/2
        : step

    amplitude =
        e.keyCode == 37 ? amplitude-amplitude/2
        : e.keyCode == 39 ? amplitude+amplitude/2
        : amplitude

    step = step > 3000 ? 3000 : step

    amplitude =
        amplitude > 200 ? 200 : amplitude

    if(e.keyCode == 82){
        //step = 500
        t = 0
        box.x = Math.random() * 300
        box.y = Math.random() * 300
        con.fillStyle = '#'+Math.random().toString(16).slice(2,8)
        stroke = 1 + Math.random() * 4
    }
    if(e.keyCode == 67){
        canvas.width = canvas.width
    }
}

function loop(canvas, con){
    t += step
    //canvas.width = canvas.width
    box.y += Math.sin(t * 1e-4) * 2 * amplitude
    box.x += Math.cos(t * 1e-4) * Math.cos(t * 1e-4) * amplitude
    con.fillRect(box.x,box.y,stroke,stroke)

    if(box.x > canvas.width || box.y > canvas.height || box.y < 0 || box.x < 0){
        onkeydown({ keyCode: 82 })
    }
}

var wave = {
    loop: loop,
    onkeydown: onkeydown
}