namespace SpriteKind {
    export const Collectible = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Collectible, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Balloons.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(10)
})
let Balloons: Sprite = null
tiles.setCurrentTilemap(tilemap`Arena Demo`)
scene.setBackgroundColor(12)
let myEzra = sprites.create(assets.image`Ezra`, SpriteKind.Player)
controller.moveSprite(myEzra)
myEzra.setStayInScreen(true)
Balloons = sprites.create(assets.image`Balloons`, SpriteKind.Collectible)
info.startCountdown(10)
