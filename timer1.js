//SIMPLE TIMER
/**
 * Function timer beeps after a user-specified duration
 * @param string - Command Line Input
 * Returns - Beep after a specified amount has passed
 */

const alarmDuration = process.argv;
const timer = () => {
  for (let i = 2; i <= alarmDuration.length; i++){
    if(alarmDuration === 2){
      return;
    }
    if(alarmDuration[i] >= 0 && Number(alarmDuration[i] === alarmDuration[i])){
      setTimeout(() => {
      process.stdout.write('\x07');
      }, alarmDuration[i] * 1000);
    }
  }
}

timer()




















// To implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

// const duration = process.argv.slice(2);
// console.log(process.argv)
// const clock = (duration) => {
//   const wait = 0;
//   for(const interval of duration )
//     setTimeout(() => {
//       process.stdout.write('\x07');

//     }, timeout);
  
// };
