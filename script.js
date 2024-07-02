var resume = {
    Name: "Nishand RM",
    Age : 23,
    Educational_Qualification : "B.E in Electronics and communication Engineering",
    year_of_pass_out : 2022
}
//for-in loop
for(var key in resume)
    {
      console.log(resume[key]);
    }
    
//for
var res = object.Keys(resume);
for(var i=0;i<res.length;i++)
{
      console.log(resume[res[i]]);
}

//for-off cannot be used for objects
//only used to iterate the arrays

