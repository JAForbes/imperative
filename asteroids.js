var ship = { x:0, y: 0, vx:0, vy: 0, angle: 0}

function loop(canvas, context){

    ship.x += ship.vx
    ship.y += ship.vy

    canvas.width = canvas.width
    context.translate(canvas.width/2, canvas.height/2)

    context.save()
        context.translate(-10,-10)
        context.rotate(ship.angle)
        context.fillRect(ship.x-10,ship.y-10,20,20)
    context.restore()

}

function onkeydown(e){
    ship.angle =
        e.keyCode == 39 ?
            ship.angle + Math.PI / 10 :
        e.keyCode == 37 ?
            ship.angle - Math.PI / 10 :
        ship.angle

    if(e.keyCode == 38){
        var v = Math.atan2(ship.vy, ship.vx)
        v+= ship.angle / 10
        ship.vx += Math.cos(v)
        ship.vy += Math.sin(v)
    }

  console.log(ship.angle, e.keyCode)
}


var asteroids = {
    loop: loop,
    onkeydown: onkeydown
}