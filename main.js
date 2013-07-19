//Tony Keiser
//ASD 0713
//Week 2
$( '#add' ).on( 'pageinit',function(){
 
var json =
	{ 
		"breeds":	[
			{
					"breed"   :	"Labrador",
					"attack"  : '7',
					"defense" : '7',
					"speed"   : '6'
			},
			{
					"breed"   :	"Beagle",
					"attack"  : '6',
					"defense" : '6',
					"speed"   : '8'
			},
			{
					"breed"   :	"Bulldog",
					"attack"  : '7',
					"defense" : '10',
					"speed"   : '3'
			},
			{
					"breed"   :	"Boxer",
					"attack"  : '9',
					"defense" : '6',
					"speed"   : '5'
			},
			{
					"breed"   :	"Schnauzers",
					"attack"  : '6',
					"defense" : '5',
					"speed"   : '9'
			},
		]
	};

var view = function(){

$.ajax({
    type:"GET", 
    url: "json.json", 
    success: function(data) {
            $("body").append(JSON.stringify(data));
        }, 
    error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status);
        },
   dataType: "json"
});	};

//console.log(json.breeds[0].breed);

//onChange

var checkBreed = function(){
	//Check JSON //Set Stats
		if($('#breed').val()==="Labrador"){
			var n=0;
			setValues(n);
			};
			if($('#breed').val()==="Beagle"){
				var	n=1;
				setValues(n);
				};
				if($('#breed').val()==="Bulldog"){
					var	n=2;
					setValues(n);
					};
					if($('#breed').val()==="Boxer"){
						var	n=3;
						setValues(n);
						};
						if($('#breed').val()==="Schnauzers"){
							var	n=4;
							setValues(n);
							};
};
	
var setValues = function(n){
	var breed = json.breeds[n].breed;	
	var attack = json.breeds[n].attack;
	var defense = json.breeds[n].defense;
	var speed = json.breeds[n].speed;
	//set values
	$('#attack').val(attack);
	$('#defense').val(defense);
	$('#speed').val(speed);
	console.log(breed,attack,defense,speed);
};
	$('#breed').change(checkBreed);
	$('#view').click(view);






$( '#home' ).on( 'pageinit',function(){
var json =
	{ 
		"breeds":	[
			{
					"breed"   :	"Labrador",
					"attack"  : '7',
					"defense" : '7',
					"speed"   : '6'
			},
			{
					"breed"   :	"Beagle",
					"attack"  : '6',
					"defense" : '6',
					"speed"   : '8'
			},
			{
					"breed"   :	"Bulldog",
					"attack"  : '7',
					"defense" : '10',
					"speed"   : '3'
			},
			{
					"breed"   :	"Boxer",
					"attack"  : '9',
					"defense" : '6',
					"speed"   : '5'
			},
			{
					"breed"   :	"Schnauzers",
					"attack"  : '6',
					"defense" : '5',
					"speed"   : '9'
			},
		]
	};
console.log('hello');
	//  console.log(json.breeds.length);
	for(i=0; i<json.breeds.length;i++){
	//	console.log(json.breeds[i].breed);
		$('#display').append('<div id="list'+i+'" data-role="collapsible"></div>');
			$('#list'+i).append('<h3>Title</h3>');
			$('#list'+i).append('<p>Breed: '+json.breeds[i].breed +'</p>');
			$('#list'+i).append('<p>Attack: '+json.breeds[i].attack +'</p>');
			$('#list'+i).append('<p>Defense: '+json.breeds[i].defense +'</p>');
			$('#list'+i).append('<p>Speed: '+json.breeds[i].speed +'</p>');
};

$(function(){
$.ajax({
		url: 'json.json',
		type: 'GET',
		dataType:'json',
		success: function(response){
			console.log(response);
		}
		
	});

});
});


