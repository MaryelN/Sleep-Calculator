//function that returns any given night’s number of hours of rest. 
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 10
      break;
    case 'tuesday':
      return 8
      break;
    case 'wednesday':
      return 6
      break;
    case 'thursday':
      return 10
      break;
    case 'friday':
      return 6
      break;
    case 'saturday':
      return 9
      break;
    case 'sunday':
      return 10
      break;
    default:
      return 'Error!';
  };
}
//Get the total sleep hours that you actually slept
const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');
  
//Get the ideal sleep hours that you prefer
const getIdealSleepHours = (idealHours) => idealHours * 7;
  
//Calculate the sleep debt, if any.
const calculateSleepDebt = (hours) => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(hours);
  if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of sleep');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) +   'hour(s) less sleep than you needed this week. Get some rest.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours -idealSleepHours ) +   'hour(s) more of sleep than needed.');
    } else {
      console.log(' somenthing is wrong with the code');
    }
  };

//User Input
const userInput = 10;

//Print
console.log('Your ideal total time of sleep is: ' + getIdealSleepHours(userInput));
console.log('Your actual Sleep this week: ' + getActualSleepHours());
calculateSleepDebt(userInput);
