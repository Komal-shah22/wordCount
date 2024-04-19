
import inquirer from "inquirer";
async function result(fun:Function) {
   let condition :boolean = true ;
do{
    await fun()
   let input = await inquirer.prompt([{
    name:"answer",
    type:"list",
    message:"Do you want to countinue...",
    choices:["Yes","No"]
   }])
   if(input.answer === "No"){
    condition = false
}
}while(condition);
}export default result