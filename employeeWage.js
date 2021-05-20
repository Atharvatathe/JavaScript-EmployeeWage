//UC6: calculate Employee wage till number of working Days using array
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HOUR;
    }

let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH
	&& totalWorkingDays < NUM_OF_WORKING_DAYS){
		totalWorkingDays++;
		let empCheck = Math.floor(Math.random() * 10) % 3;
		let empHrs = getWorkingHours(empCheck);
		totalEmpHrs += empHrs;
		empDailyWageArr.push(calcDailyWage(empHrs));
	}
	let empWage = calcDailyWage(totalEmpHrs);
	console.log("UC6 - Total Days: " + totalWorkingDays +
				"Total Hrs: " + totalEmpHrs + " Emp Wage: " +empWage);

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        
         case IS_FULL_TIME:
             return FULL_TIME_HOURS;
              
         default:
             return 0;
		}
}

//Array Helper function
//UC 7A - calc total wage using Array forEach traversal or reduce method

let totEmpWage = 0 ;
function sum (dailyWage){
totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + "Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage){
	return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC 7B - show the day along with Daily eage using Array map helper function

let dailyCntr = 0;
function mapDauwithWage(dailyWage){
	dailyCntr++;
	return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDauwithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);


//UC 7C - Show Days when full time wage of 160 were earned
function fulltimeWage(dailyWage){
	return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC7D - Find the first occurrence when full Time earned using find function

function findFulltimeWage(dailyWage){
	return dailyWage.includes("160");
}

console.log("UC7D - First time Fulltime wage was earned on Day: "+ mapDayWithWageArr.find(fulltimeWage));

//UC 7E - check if Every Element of Full Time wage is truely holding fukk time wage
function isAllFulltimeWage(dailyWage){
	return dailyWage.includes("160");
}

console.log("UC 7E - check All Element have full Time Wage: " +
fullDayWageArr.every(isAllFulltimeWage));


//UC 7F - check if there is any Part time wage
function isAnyPartTimeWage(dailyWage){
	return dailyWage.includes("80");
}

console.log("UC 7F - check if any Part time wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numofDays, dailyWage){
	if(dailyWage > 0) return numofDays+1;
	return numofDays;
}
	
	console.log("UC 7G - Number of Days Emp Worked: "+ empDailyWageArr.reduce(totalDaysWorked,0));