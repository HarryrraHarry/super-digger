player.onChat("run", function () {
	
})
player.onTravelled(FLY, function () {
    blocks.fill(
    AIR,
    pos(1, 1, 1),
    pos(1, 1, 1),
    FillOperation.Replace
    )
})
