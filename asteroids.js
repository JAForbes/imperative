(function(){
    var ship = { x:0, y: 0, vx:0, vy: 0, angle: 0}

    function loop(canvas, context){

        canvas.width = canvas.width
        context.translate(canvas.width/2, canvas.height/2)

        context.save()
            context.translate(ship.x, ship.y)
            context.rotate(ship.angle)
            context.fillRect(-10,-10,20,20)
        context.restore()


        //move
        ship.x += ship.vx
        ship.y += ship.vy


        //screen wrapping

        var hW = canvas.width/2
        var hH = canvas.height/2
        ship.x =
            ship.x > hW ? -hW:
            ship.x < -hW ? hW:
            ship.x

        ship.y =
            ship.y > hH ? -hH:
            ship.y < -hH ? hH:
            ship.y


    }

    function onkeydown(e){
        //turn
        ship.angle =
            e.keyCode == 39 ?
                ship.angle + Math.PI / 100 :
            e.keyCode == 37 ?
                ship.angle - Math.PI / 100 :
            ship.angle

        //accelerate
        if(e.keyCode == 38){
            ship.vx += Math.sin(-ship.angle) * 1e-1
            ship.vy += Math.cos(-ship.angle) * 1e-1
        }

    }


    window.active = window.active || []
    active.push({
        loop: loop,
        onkeydown: onkeydown
    })
}())