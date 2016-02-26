var iconImg;
var description; 
var pictures = [ "invoice", "payroll", "calendar", "flyer", "website"];

   var descriptions = [ 
   ("An Invoice(MS Excel)"),
   ("A payroll sheet(MS Excel)"),
   ("A business Calendar(MS Excel)"),
   ("An Advertisement flyer(MS Word)"), 
   ("My Website(HTML5/CSS3/JavaScript)"), 
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
