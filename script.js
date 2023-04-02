var obj=[];

function CreateList() 
{
        var emp_no = document.getElementById('first').value;
        var emp_name = document.getElementById('second').value;
        var emp_add = document.getElementById('third').value;
        var emp_gender = document.querySelector("input[type='radio'][name=Gender]:checked").value;
        var emp_age = document.getElementById('fifth').value;
        var emp_dept_name = document.getElementById('sixth').value;
        var emp_salary = document.getElementById('seventh').value;

        obj.push({"Employee_Number":emp_no,
                    "Employee_Name":emp_name,
                    "Employee_Address":emp_add,
                    "Employee_Gender":emp_gender,
                    "Employee_Age":emp_age,
                    "Employee_Department_Name":emp_dept_name,
                    "Employee_Salary":emp_salary,
                    });

        console.log(obj);
        CreateHtml(obj);

        return false;
}

function CreateHtml(_data){
    var html = "";
    
    _data.forEach(function(e){

        html += "<tr>";

        html += "<td>" + e.Employee_Number + "</td>";
        html += "<td>" + e.Employee_Name + "</td>";
        html += "<td>" + e.Employee_Address + "</td>";
        html += "<td>" + e.Employee_Gender + "</td>";
        html += "<td>" + e.Employee_Age + "</td>";
        html += "<td>" + e.Employee_Department_Name + "</td>";
        html += "<td>" + e.Employee_Salary + "</td>";

        html += "</tr>";
    })

    document.getElementById("table1").innerHTML = html;
}

function SearchClick() 
{
    var _SearchType = document.getElementById("search").value;
    var _search = document.getElementById("eight").value;

    if (_search != "") 
    { 
        var _SearchData = [];
        _SearchData = obj;

            switch(_SearchType)
            {
            case "Number":
                _SearchData = _SearchData.filter(function(e){
                    return e.Employee_Number.includes(_search);
                })                
            break; 
            
            case "Name":
                _SearchData = _SearchData.filter(function(e){
                    return e.Employee_Name.toLowerCase().includes(_search.toLowerCase()); 
                })                
            break;
        
            case "Address":
                _SearchData = _SearchData.filter(function(e){
                    return e.Employee_Address.toLowerCase().includes(_search.toLowerCase());
                })                    
            break;
        
            case "Gender":
                _SearchData = _SearchData.filter(function(e){
                    return e.Employee_Gender.toLowerCase() == _search.toLowerCase();
                })                    
            break;
        
            case "Age":
                _SearchData = _SearchData.filter(function(e){
                    return e.Employee_Age.includes(_search);
                })                    
            break;
        
            case "Department":
                _SearchData = _SearchData.filter(function(e){
                    return e.Employee_Department_Name.toLowerCase() == _search.toLowerCase();
                })                        
            break;
        
            case "Salary":
                _SearchData = _SearchData.filter(function(e){
                    return e.Employee_Salary == _search;
                })                                
            break;            
        }
        
        CreateHtml(_SearchData);
    }            
    else {                
        alert("Please enter some value to search..");            
    } 
    
    return false;
}

function ClearClick()
{
    document.getElementById("eight").value = "";
    CreateHtml(obj);

    return false;
}

