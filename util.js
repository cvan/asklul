var responses = [
	{
		phrase:"I'm hearing voices!",
		boolresp:true,
		keywords:[
			"talking",
			"voices",
			"lully"
		]
	},
	{
		phrase:"I'm hearing voices and its not me!",
		boolresp:true,
		keywords:[
			"talking",
			"voices",
			"lully"
		]
	},
	{
		phrase:"No, you're just doing it wrong.",
		boolresp:true,
		keywords:[
			"math",
			"calc",
			"schwanicate",
			"schwanicating",
			"nina"
		]
	},
	{
		phrase:"Go ask Mennig.",
		boolresp:true,
		keywords:[
			"logs",
			"log",
			"natural",
			"yoga",
			"chocolate",
			"island",
			"study",
			"spa",
			"goddess"
		]
	},
	{
		phrase:"I'm hungry for hugs.",
		boolresp:false,
		keywords:[
			"kurt",
			"absent",
			"lully",
			"cakes",
			"lullycakes",
			"lunch",
			"food",
			"fud",
			"kosick"
		]
	},
	{
		phrase:"Where's 503?",
		boolresp:false,
		keywords:[
			"katrina",
			"bartoli",
			"503",
			"roll",
			"absent"
		]
	},
	{
		phrase:"Your mom goes to college.",
		boolresp:false,
		keywords:[
			"mom",
			"college",
			"go",
			"goes",
			"going"
		]
	},
	{
		phrase:"Press Zoom, then Trig. Zoom, trig, zoom trig.",
		boolresp:false,
		keywords:[
			"zoom",
			"trig",
			"calc",
			"calculator",
			"ti83",
			"ti-83"
		]
	},
	{
		phrase:"Fanti's been playing with my knobs.",
		boolresp:true,
		keywords:[
			"fanti",
			"touch",
			"knob",
			"overhead",
			"over"
		]
	},
	{
		phrase:"Hold on, let me finish this research paper.",
		boolresp:true,
		keywords:[]
	},
	{
		phrase:"Go away or I'll FLIP OUT!",
		boolresp:true,
		keywords:["flip","help"]
	},
	{
		phrase:"Could I call you back in like two minutes?",
		boolresp:true,
		keywords:["cef"]
	},
	{
		phrase:"Alright lets call on Dorbad.",
		boolresp:false,
		keywords:[
			"dorbad",
			"dot",
			"dots",
			"point",
			"question"
		]
	},
	{
		phrase:"<span style=\"color:red\">Red X for Bernie!</span>",
		boolresp:false,
		keywords:[
			"bernie",
			"red",
			"x",
			"shouting",
			"talking",
			"seat",
			"sit",
			"sitting",
			"loud"
		]
	},
	{
		phrase:"I'd answer that, but Bernie is out of his seat.",
		boolresp:true,
		keywords:[
			"bernie",
			"seat",
			"grade",
			"calc"
		]
	},
	{
		phrase:"I'm over the hill; lets leave it at that.",
		boolresp:false,
		keywords:[
			"age",
			"old"
		]
	},
	{
		phrase:"You're going to have to schwanicate to figure that one out.",
		boolresp:true,
		keywords:[
			"plus",
			"times",
			"minus",
			"opposite",
			"divided",
			"square",
			"root"
		]
	},
	{
		phrase:"I have a headache!<br />It's right here!",
		boolresp:false,
		keywords:[]
	},
	{
		phrase:"I hate my computer.",
		boolresp:false,
		keywords:["computer","computers"]
	},
	{
		phrase:"SUCKING DOWN BATTERIES.",
		boolresp:false,
		keywords:["graph","function","curve","parabola"]
	},
	{
		phrase:"Lets sing show tunes.",
		boolresp:false,
		keywords:["show","tunes","sing"]
	},
	{
		phrase:"I'm honestly going to sue.",
		boolresp:false,
		keywords:["sue","quaglia","scream","flip"]
	},
	{
		phrase:"Is Bernie in ISS again?",
		boolresp:false,
		keywords:["iss","bernie"]
	},
	{
		phrase:"Cheeze?",
		boolresp:false,
		keywords:["cheese","cheeze","cheezus","katie"]
	},
	{
		phrase:"Why do you call Sarah 'Crazy Eights'?",
		boolresp:false,
		keywords:["crazy","eights","sarah"]
	},
	{
		phrase:"Math Nine: 'x' squared, comma x,<br />comma negative two, comma two",
		boolresp:true,
		keywords:[]
	},
	{
		phrase:"Yeah, Science Olympiad sucks.",
		boolresp:true,
		keywords:["sucks","science","olympiad","palmer"]
	},
	{
		phrase:"Yeah we don't like AP Calc anymore.",
		boolresp:true,
		keywords:["ap","calc","calculus"]
	},
	{
		phrase:"I drink your milkshake!",
		boolresp:true,
		keywords:[]
	},
	{
		phrase:"Let's calculate how much wood a wood chuck could chuck if the wood chuck could chuck wood.",
		boolresp:true,
		keywords:[]
	},
	{
		phrase:"Ms. Palmer? She can go make me a sammich.",
		boolresp:true,
		keywords:["palmer"]
	},
	{
		phrase:"Somebody's making a sammich and it's not Lul!",
		boolresp:true,
		keywords:["sammich","sandwich"]
	},
	{
		phrase:"Mennig says she smells things when we do yoga.",
		boolresp:true,
		keywords:["yoga","Mennig"]
	},
	{
		phrase:"Everybody loves Mennig. Everybody loves Chrissy more.",
		boolresp:true,
		keywords:['mennig','chrissy','loves']
	},
	{
		phrase:"Hold on a sec... Chrissy's about to sprial into a fit of maniac depression.",
		boolresp:true,
		keywords:['chrissy','depression','friends']
	},
	{
		phrase:"We don't talk about Dan. He just doesn't understand the material.",
		boolresp:true,
		keywords:['failing','dan']
	},
	{
		phrase:"Nobody wants to know what Chrissy is willing for Class Day.",
		boolresp:true,
		keywords:["chrissy","class","day"]
	},
	{
		phrase:"Does Marissa smell again?",
		boolresp:true,
		keywords:["smell","smelly","marissa","cassagrande"]
	},
	{
		phrase:"I've got a headache! It's right here!<br /><img src=\"005.jpg\" alt=\"HEADACHE!\" />",
		boolresp:true,
		keywords:["chrissy","headache","here"]
	},
	{
		phrase:"Dorbad should put his hand up so it doesn't look like I'm intentionally calling on him.",
		boolresp:true,
		keywords:["dorbad","hand","raise","call"]
	},
	{
		phrase:"I'm smelling take-home!",
		boolresp:false,
		keywords:[
			"take",
			"home",
			"thq",
			"test",
			"quiz",
			"takehome",
			"take-home"
		]
	}
];
var boolresp = [
	"am",
	"are",
	"is",
	"can"
];
var crs = null;

function g(x){return document.getElementById(x);}
function x() {
	g("a").innerHTML = "waiting for response...";
	setTimeout(resp,2000);
}
function resp(){
	var pv = [];
	var keywords = g("qu").value.split(" ");
	if(keywords.length>0){
		for(var k=0;k<keywords.length;k++)
			for(var i=0;i<responses.length;i++)
				for(var j=0;j<responses[i].keywords.length;j++)
					if(trim12(keywords[k].toLowerCase())==responses[i].keywords[j].toLowerCase()){
						pv[pv.length] = responses[i];
						break;
					}
	}
	if(pv.length<1){
		var isbool = false;
		for(var ib=0;ib<boolresp;ib++){
			for(var kw=0;kw<keywords.length;kw++)
				if(keywords[kw]==boolres[ib]){
					isbool = true;
					break;
				}
			if(isbool)
				break;
		}
		if(isbool){
			for(var pi=0;pi<responses.length;pi++)
				if(responses[pi].boolresp)
					pv[pv.length]=responses[pi];
		}else
			pv = responses;
	}
	var r = Math.floor(Math.random() * pv.length);
	var xy = pv[r].phrase;
	g("a").innerHTML = xy;
}
window.onload = function() {
	for(var oli=0;oli<responses.length;oli++)
		if(responses[oli].keywords==null)
			responses[oli].keywords=["_xqzsxz_"];
}
function trim12(str) {
	var	str = str.replace(/^\s\s*/, ''),
		ws = /\s/,
		i = str.length;
	while (ws.test(str.charAt(--i)));
	return str.slice(0, i + 1).replace("?","").replace(".","").replace(";","").replace("!","").replace("\"","").replace("'","");
}