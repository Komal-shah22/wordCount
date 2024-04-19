import inquirer from "inquirer";
import chalk from "chalk";
  const countvowels = async() =>{
  let input = await inquirer.prompt([{
    name:"str",
    message:"enter the text.....",
    type:"input"
  }]);
  let count:number=0
  for(let i of input.str){
    if(i==="a"|| i==="e" || i==="i"|| i==="o"|| i==="u"){
      count++
    }
  }
  console.log(`The number of vowels you used in this text is :  "${chalk.bold.greenBright(count)}"`)
}
export default countvowels;