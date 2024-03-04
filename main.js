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
if(codigo == 71 && tecla.shiftKey){
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
}

//blocos que quero usar:

//2. ouro
//3. vidro
//4. tijolos
//5. madeira
//6. wooden planks
//7.terra
//8.stone bricks
