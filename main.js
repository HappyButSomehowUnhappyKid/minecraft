var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("https://s.namemc.com/3d/skin/body.png?id=70cddf23a25e1c2f&model=classic&width=308&height=308", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}
player_update()
function drawObject(img){
fabric.Image.fromURL(img, function(Img){
    block_image_object = Img
    block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({top:player_y,left:player_x});
    canvas.add(block_image_object)
})
}
drawObject("https://thumbs.dreamstime.com/b/fundo-do-bloco-terrestre-estilo-pixel-minecraft-conceito-de-horizontal-pixelado-sem-soldadura-ilustra%C3%A7%C3%A3o-vetorial-212305546.jpg")

window.addEventListener("keydown", my_keydown)

function my_keydown(tecla){
codigo = tecla.keyCode
//terra com grama
if(codigo == 71){
	drawObject("https://static.planetminecraft.com/files/image/minecraft/texture-pack/2021/709/14376136-pack_xl.webp")
}

if(codigo == 75){
	player_x += 10
	canvas.remove(player_object)
	player_update()
	if(player_x > 970){
		player_x = -110
	}
}

if(codigo == 74){
	player_x -= 10
 canvas.remove(player_object)
 player_update()
 if(player_x < -110){
	player_x = 970
 }
}

if(codigo == 73){
	player_y -= 10
	canvas.remove(player_object)
	player_update()
	if(player_y < -140){
		player_y = 510
	}
}

if(codigo == 77){
	player_y += 10
	canvas.remove(player_object)
	player_update()
	if(player_y > 510){
		player_y = -140
	}
}
//1. grama
if(codigo == 82){
	drawObject("https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5d/Grass_%28item%29.png")
}
//2. ouro
if(codigo == 79){
	drawObject("data:image/jpeg;base64,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")
{
}

//blocos que quero usar:


//3. vidro
//4. tijolos
//5. madeira
//6. wooden planks
//7.terra
//8.stone bricks
