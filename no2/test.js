alert("my browser has visited :"+history.length+" pages!");

window.alert("あなたのブラウザーは、"+navigator.appName);

if(navigator.appName == "Microsoft Internet Explorer"){

	document.write("Welcome IE USER!");
}else{

	document.write("このスクリプトの実行には、IEが必要です。");
}

if(navigator.javaEnabled()){

	document.write("Java is enabled");
}else{

	alert("Java is not enabled on your browser!");
}


function Hero(name, armor, strength, attack){

	this.name = name;
	this.armor = armor;
	this.strength = strength;
	this.attack = attack;
}

var dwarf3 = new Hero("dwarf","5","5","5");
var barbarian = new Hero("barbarian","7","7","7");
var elf = new Hero("elf","9","9","9");

var character = elf;

document.write("<h3>"+character.name+" properties</h3><br />");
document.write("Armor: "+character.armor+"<br />");
document.write("Strength: "+character.strength+"<br />");
document.write("Attack: "+character.attack+"<br />");

for (var x in dwarf3){

	document.write(x + ":" + dwarf3[x] + "<br />");
}


var dwarf2 = {

strength: "5",
armor: "7",
attack: "10",

}

document.write("here strength: "+dwarf2.strength+"<br />"+
					"hero armor: "+dwarf2.armor+"<br />"+
					"hero atack: "+dwarf2.attack+"<br />"
	);


var dwarf = new Object();

dwarf.strength = "7";
dwarf.armor = "8";
dwarf.attack = "6";
dwarf.show_properties = function(){
	
	document.write("here strength: "+dwarf.strength+"<br />"+
					"hero armor: "+dwarf.armor+"<br />"+
					"hero atack: "+dwarf.attack+"<br />"
		);
}

dwarf.show_properties();


var girl = ["高山千晶","森田薫","古屋円","知念弥生","成田茉優"];

girl[1] = "吉田ちひろ";
girl.push("末宗志乃","栁瀨愛乃");
girl.length = 7
girl.reverse();

for (b=0; b<girl.length; b++){

	document.write(girl[b]+"<br />");
}

var girls = new Array("高山千晶","森田薫","古屋円","知念弥生","成田茉優");

for (a=0; a<girls.length; a++){

	document.write(girls[a]+"<br />");
}

var test = 1;
var test2 = 1;

while (test < 10){

	document.write(test+". 森田薫"+"<br />");
	test++;

}

do {

	document.write(test2+". 成田茉優"+"<br />");
	test2++;

} while (test2 < 10)


for (i = 1; i<=15; i++){

	document.write(i+". 高山千晶"+"<br />");
}


var age = 33;

function first(){

	var age = 32;
	document.write("森田薫は"+age+"歳です。");
}

function second(){

	first();
}

second();

var women = "成田茉優"

switch (women){

	case "森田薫":
		document.write("森田薫はかわいい");
		break;
	case "古屋円":
		document.write("古屋円はかわいい");
		break;
	case "高山千晶":
		document.write("高山千晶はかわいい");
		break;
	default:
		document.write("成田茉優がかわいい");
}

var name = window.prompt("名前を入力してください");

if (name == ""){

	document.write("<br />"+"何か入力してください");
}else{

	document.write("<br />"+"ようこそ"+name+"さん");
}