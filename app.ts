import inquirer from "inquirer";
import chalk from "chalk";
const wordCounter = async()=>{
        let result = await inquirer.prompt([{
            type:"input",
            message:`please write the pragraph here.......`,
            name:"pragraph"
        }]);
       console.log(`only total word in text this is  :${chalk.bold.greenBright()}`, result.pragraph.trim().split(" ").join("").length);
}

export default wordCounter