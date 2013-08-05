//Tony Keiser
//ASD 0713
//Week 2
$( '#add' ).on( 'pageinit',function(){
 
var json =
	{ 
		"breeds":	[
			{
					"title"   :	"Larry",
					"breed"   :	"Labrador",
					"attack"  : '7',
					"defense" : '7',
					"speed"   : '6'
			},
			{
					"title"   :	"Mickey",
					"breed"   :	"Beagle",
					"attack"  : '6',
					"defense" : '6',
					"speed"   : '8'
			},
			{
					"title"   :	"Billy",
					"breed"   :	"Bulldog",
					"attack"  : '7',
					"defense" : '10',
					"speed"   : '3'
			},
			{
					"title"   :	"Joe",
					"breed"   :	"Boxer",
					"attack"  : '9',
					"defense" : '6',
					"speed"   : '5'
			},
			{
					"title"   :	"Teddy",
					"breed"   :	"Schnauzers",
					"attack"  : '6',
					"defense" : '5',
					"speed"   : '9'
					
			},
		]
	};

/*
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
*/

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
	var breed = json.breeds[n].title;	
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

function setData(){
	
	var title = $('#title').val();
	var breed = $('#breed').val();
	var attack = $('#attack').val();
	var defense = $('#defense').val();
	var speed = $('#speed').val();
	var plane = $('#plane').val();
	// If no key set new key...else edit current key
	var id       = Math.floor(Math.random()*1000000000);
	
	
	var add = {
		"title"   : title,
		"breed"   : breed,
		"attack"  : attack,
		"defense" : defense,
		"speed"   : speed,
		"plane"   : plane
	};

		
	localStorage.setItem(id, JSON.stringify(add));
	console.log(JSON.stringify(add));

};
// EVENT LISTENERS ####################################	
	$("#submit").click(setData);
	$('#breed').change(checkBreed);
	$('#view').click(view);
	$("#csv").click(viewCSV);
	$("#xml").click(viewXML);
	$("#json").click(viewJSON);

});



$( '#home' ).on( 'pageinit',function(){

// Loading Data #######################################

var viewXML = function() {
console.log('loading xml');
	$.ajax({
	   url      : "data.xml",
	   type     : "GET",
	   dataType : "xml",
	   success  : function(data, status) {
	      console.log(status, data);
	   }
	   });
}

var viewCSV = function() {
console.log('loading csv');
	$.ajax({
	   url      : "data.csv",
	   type     : "GET",
	   dataType : "csv",
	   success  : function(data, status) {
	      console.log(status, data);
	   }
	   });
}

var viewJSON = function() {
console.log(' loadig json');
	$.ajax({
	   url      : "data.json",
	   type     : "GET",
	   dataType : "json",
	   success  : function(data, status) {
	      console.log(status, data);
	   }
	   });
}

var json =
	{ 
		"breeds":	[
			{
					"title"   :	"Larry",
					"breed"   :	"Labrador",
					"attack"  : '7',
					"defense" : '7',
					"speed"   : '6'
			},
			{
					"title"   :	"Mickey",
					"breed"   :	"Beagle",
					"attack"  : '6',
					"defense" : '6',
					"speed"   : '8'
			},
			{
					"title"   :	"Billy",
					"breed"   :	"Bulldog",
					"attack"  : '7',
					"defense" : '10',
					"speed"   : '3'
			},
			{
					"title"   :	"Joe",
					"breed"   :	"Boxer",
					"attack"  : '9',
					"defense" : '6',
					"speed"   : '5'
			},
			{
					"title"   :	"Teddy",
					"breed"   :	"Schnauzers",
					"attack"  : '6',
					"defense" : '5',
					"speed"   : '9'
			},
		]
	};

// DISPLAY VALUES (local json) ########################
	//  console.log(json.breeds.length);
	for(i=0; i<json.breeds.length;i++){
	//	console.log(json.breeds[i].breed);
		$('#display').append('<div id="list'+i+'" data-role="collapsible"></div>');
			$('#list'+i).append('<h3>'+json.breeds[i].title +' the '+json.breeds[i].breed +'</h3>');
			$('#list'+i).append('<p>Breed: '+json.breeds[i].breed +'</p>');
			$('#list'+i).append('<p>Attack: '+json.breeds[i].attack +'</p>');
			$('#list'+i).append('<p>Defense: '+json.breeds[i].defense +'</p>');
			$('#list'+i).append('<p>Speed: '+json.breeds[i].speed +'</p>');
		
};

// EVENT LISTENERS ####################################	
	$('#view').click(view);
	$("#csv").click(viewCSV);
	$("#xml").click(viewXML);
	$("#json").click(viewJSON);

});


