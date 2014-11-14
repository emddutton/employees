var employees = [
        {
            name : "David",
            phone: "800-555-5555"

        },

        {
            name : "Bob",
            phone: "303-123-4567"

        }
    ];



/*
                       d8b          
                       Y8P          
                                    
88888b.d88b.   8888b.  888 88888b.  
888 "888 "88b     "88b 888 888 "88b 
888  888  888 .d888888 888 888  888 
888  888  888 888  888 888 888  888 
888  888  888 "Y888888 888 888  888 

)
*/


$(document).ready(function(){
    render_employee_table(employees)
    


    $("#add").click(function() {
         console.log('clicked!');
         render_edit_box('add');
    });



})


function terminate_employee(index){ 
    console.log(index);

    employees.splice(index, 1);

    render_employee_table(employees)
   


}





function render_edit_box(type, employee, index){
    var pre_name = "";
    var pre_phone = "";

    if (type == "edit") { 
        console.log(employee);

        pre_name = employee.name;
        pre_phone = employee.phone;
    }


    var html = '<div><label>name</label><input id="edit_name" value="' + pre_name + '"></div><div><label>phone</label> <input id="edit_phone" value="'+ pre_phone + '"></div>';

    var button_name = type == "add" ? "add it" : "update it"; 

    html += "<button id='saveit'>"+ button_name + "</button>";
    
    $('#edit_box').html(html); 


    $('#saveit').click(function(){
        var e = { 
            name : $("#edit_name").val(),
            phone: $("#edit_phone").val()
        }
        if(type=="add") {
            add_employee(e);
        }
        else if (type=="edit") { 
            update_employee(e, index);
        }

         $("#edit_box").html('');

    })

      
}
function update_employee(data, index){
    console.log("update Employee " + index);
    console.log(data);

    // employees[index].name = data.name;
    // employees[index].phone = data.phone; 


    employees[index] = data; 
    render_employee_table(employees);
}

function add_employee(data){

        
        employees.push(data);
        render_employee_table(employees)
         
       


}


function render_employee_table(data){


    console.log('render employee table')
    var html;

    html = "<table>";


    data.forEach(function(employee, index){

        html += "<tr>";
        html += "<td>"+ employee.name +"</td>";
        html += "<td>"+ employee.phone +"</td>";
        html += "<td><button class='delete' index='"+index+"'>Del</button></td>";
        html += "<td><button index="+ index +" class='edit'>Edit</button></td>";

        html += "</tr>";
    })


    html += "</table>";

    $("#employee_list").html(html); 

    $(".delete").click(function(){
       console.log('delete clicked');
       terminate_employee($(this).attr("index"));
    });

    $('.edit').click(function(){
        console.log('clicked to update existing');


         render_edit_box('edit', employees[$(this).attr("index")] , $(this).attr("index"));
   


    })

    


}