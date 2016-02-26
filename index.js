var iconImg;
var description; 
var pictures = [ "website", "flyerpicture", "excelpicture", "calculator", "ContactList"];

   var descriptions = [ 
   ("My Website(HTML/CSS/JavaScript)"),
   ("An Advertisement flyer(MS Word)"),
   ("An Invoice(MS Excel)"),
   ("A Calculator application(Java) "), 
   ("A Contact List application(C++)"), 
					  ]; 
   
var index = 0;

function nextImage()
{
	index++;
	  
	if(index > 4)
	  {
		index = 0;
		iconImg.setAttribute("src", pictures[ index ] + ".png" );
		description.innerHTML = descriptions[ index ]
	
	  }
	  
	else
	 {
		iconImg.setAttribute("src", pictures[ index ] + ".png" );
		description.innerHTML = descriptions[ index ]
	 }
   
}

function prevImage()
{
     index--;
	  
	if(index < 0)
	  {
		index = 2;
		iconImg.setAttribute("src", pictures[ index ] + ".png" );
		description.innerHTML = descriptions[ index ]	
	  }
	  
	else
	 {
		iconImg.setAttribute("src", pictures[ index ] + ".png" );
		description.innerHTML = descriptions[ index ]
	 }
   
}



function start()
{
	iconImg     = document.getElementById("picture");
	description = document.getElementById("description"); 
	
   var nextButton = document.getElementById("next");
   var prevButton = document.getElementById("prev");
       nextButton.addEventListener("click", nextImage, false);
	   prevButton.addEventListener("click", prevImage, false);
} 

window.addEventListener( "load", start, false );
