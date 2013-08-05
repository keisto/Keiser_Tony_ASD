function(doc){
	if(doc._id.substr(0)!="_"){
		emit(doc._id,{
			"title": doc.title,
			"breed": doc.breed,
			"attack": doc.attack,
			"defense": doc.defense,
			"speed": doc.speed,
			"plane": doc.plane
		});
	}
};