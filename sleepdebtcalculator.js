const getSleepHours = day => {

  if (day === "monday"){
    return 8;
  }
  else if (day === "tuesday"){
    return 8;
  }
  else if (day === "wednesday"){
    return 7;
  }
  else if (day === "thursday"){
    return 7;
  }
  else if (day === "friday"){
    return 8.0;
  }
  else if (day === "saturday"){
    return 10;
  }
  else if (day === "sunday"){
    return 10;
  }
  else {
    return "Invalid input."
  }
}

const getActualSleepHours = () => {
  return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday")+ getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday")
}

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    console.log("Your sleep was perfect.")
  } else if (actualSleepHours > idealSleepHours){
    console.log(`"You are well rested, You slept ${actualSleepHours - idealSleepHours} hour more than your ideal sleep hours."`)
  } else if (actualSleepHours < idealSleepHours){
    console.log(`"You lack ${idealSleepHours - actualSleepHours} hours of sleep, get some more rest."`)
  } else {
    console.log ('Error! Invalid input.')
  }
}

calculateSleepDebt()

