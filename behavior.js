

document.addEventListener("DOMContentLoaded", function (event)
			  {
			  	    /* alert('Hola');   */


			    document.getElementById ("smart_thumbnail");
			    var thumbnailElement = document.getElementById ("smart_thumbnail");
			    thumbnailElement.addEventListener ("click", function () {
			    	alert('Te vi hacer click');
  
});
			      thumbnailElement.addEventListener("click", function() {
				  if (thumbnailElement.className === "small") {
				      thumbnailElement.className = "";
				  } else {
				      thumbnailElement.className = "small";
				  }
				  thumbnailElement.addEventListener ("click", function () {
  te vi hacer click
});


			      });
			  
