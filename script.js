

function getAttrs(DOMelement) {
    var obj = {};
    $.each(DOMelement.attributes, function () {
        if (this.specified) {
            obj[this.name] = this.value;
        }
    });
    return obj;
}



$(document).ready(function(){
	
	$('#btn1').click(function(){
		
		var name = prompt("Form name");
		$('p.title').append("<center>"+"<h1>"+name+" "+"</h1>"+"</center>");
			
			
	});
	
	
	
	$('#btn').click(function(){
		
		
		
		var type = prompt("Enter Input from the given list");
	
		
		
		if(type=="text"){
			
		var label = prompt("Enter Lable");
		var req = prompt("Is required yes/no?");
		var max = prompt("Maximun length of text??");
		if(req == "yes")
		$('p.first').append("<p>"+label+"* "+"<input type='"+type+"' required maxlength='"+max+"'/>"+"</p>");
		
		else
		$('p.first').append("<p>"+label+" "+"<input type='"+type+"' maxlength='"+max+"'/>"+"</p>");

		}
		
		if(type=="password"){
			
		var label = prompt("Enter Lable");
		var req = prompt("Is required yes/no?");
		var max = prompt("Maximun length of text??");

		if(req == "yes")
		$('p.first').append("<p>"+label+"* "+"<input type='"+type+"' required maxlength='"+max+"'/>"+"</p>");
		
		else
		$('p.first').append("<p>"+label+" "+"<input type='"+type+"' maxlength='"+max+"'/>"+"</p>");

		}
		
		
		
		if(type=="email"){
			
		var label = prompt("Enter Lable");
		var req = prompt("Is required yes/no?");

		if(req == "yes")
		$('p.first').append("<p>"+label+"* "+"<input type='"+type+"' required />"+"</p>");
		
		else
		$('p.first').append("<p>"+label+" "+"<input type='"+type+"' />"+"</p>");

		}
		
		if(type=="radio"){
			var label = prompt("Enter Lable");
			var op1 = prompt("Insert value for radio button");
			var req = prompt("Is required yes/no?");

			if(req == "yes")
			$('p.first').append("<p>"+label+"* "+"<input type='"+type+"'required/>"+" "+op1+"</p>");
		
			else
			$('p.first').append("<p>"+label+" "+"<input type='"+type+"'/>"+" "+op1+"</p>");

		}
		
		if(type=="checkbox"){
			
			var op1 = prompt("Insert value for checkboxes");
			var label = prompt("Enter Lable");
			var req = prompt("Is required yes/no?");

			if(req == "yes")
			$('p.first').append("<p>"+label+"* "+"<input type='"+type+"'required/>"+" "+op1+"</p>");
		
			else
			$('p.first').append("<p>"+label+" "+"<input type='"+type+"'/>"+" "+op1+"</p>");
		}
		
		if(type=="button"){
			var op1 = prompt("Button Text");
			var cla = "second";
			$('p.first').append("<p>"+"<input class='"+cla+"' type='"+type+"' value='"+op1+"' />"+" "+"</p>");
		}
		
		
		if(type=="submit"){
			var op1 = "Submit";
			var cla = "second";
			$('p.first').append("<p>"+"<input class='"+cla+"' type='"+type+"' value='"+op1+"'/>"+" "+"</p>");
		}
		
		if(type=="keygen"){
			$('p.first').append("<p>"+"Encryption: "+"<keygen>"+" "+"</p>");
			
		}

		if(type=="file"){
			var label = prompt("Enter Lable");
			var req = prompt("Is required yes/no?");

			if(req == "yes")
			$('p.first').append("<p>"+label+"* "+"<input type='"+type+"' required/>"+" "+"</p>");
		
			else
			$('p.first').append("<p>"+label+" "+"<input type='"+type+"'/>"+" "+"</p>");

		}

		
		if(type=="number"){
			var label = prompt("Enter Lable");
			var min = prompt("min value");
			var max = prompt("max value");
			var req = prompt("Is required yes/no?");

			if(req == "yes")
			$('p.first').append("<p>"+label+"* "+"<input type='"+type+"' min='"+min+"' max='"+max+"' required/>"+" "+"</p>");
		
			else
			$('p.first').append("<p>"+label+" "+"<input type='"+type+"' min='"+min+"'  max='"+max+"'/>"+" "+"</p>");

		}

		
		if(type=="textarea"){
			var label = prompt("Enter Lable");
			var req = prompt("Is required yes/no?");
			var max = prompt("Maximun length of text??");

			if(req == "yes")
			$('p.first').append("<p>"+label+"* "+"<textarea required maxlength='"+max+"'>"+" "+"</textarea>");
		
			else
			$('p.first').append("<p>"+label+" "+"<textarea maxlength='"+max+"'>"+" "+"</textarea>");
		}
		
		if(type=="selectoption"){
			
			
			var op1 = prompt("Enter options, ! to exit");
			var op2 = prompt("Enter options, ! to exit");
			var op3 = prompt("Enter options, ! to exit");
			var op4 = prompt("Enter options, ! to exit");
			var label = prompt("Enter Lable");
			
			$('p.first').append("<p>"+label+" "+"<select required>"+"<option value='"+op1+"'>"+op1+"</option>"+"<option value='"+op2+"'>"+op2+"</option>"+"<option value='"+op3+"'>"+op3+"</option>"+"<option value='"+op4+"'>"+op4+"</option>"+"</p>");
		
		}
			
		

		
	});
	

	
  $("form").submit(function(){
        
		$( "input[type=text]" ).keyup(function() {
		var value = $( this ).val();
		
		if(value.length > 20)
		alert("Text is too long");
	
		if(isNaN(value.length))
		alert("string");

	
	
	
		})
		.keyup();

		
    });
	

$("form").each(function () {
    var json = {
        "form": []
    };
    $(this).find("input").each(function () {
        json.form.push(getAttrs(this));
    });

    $(this).find("select").each(function () {
        var select = getAttrs(this);
        select["type"] = "select";
        var options = [];
        $(this).children().each(function () {
            options.push(getAttrs(this));
        });
        select["options"] = options;
        json.form.push(select);
    });

    console.log(json);
});

	

});
