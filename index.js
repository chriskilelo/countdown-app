// Import the required modules using ES module syntax
import moment from 'moment';
import chalk from 'chalk';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Get the target date from the .env file
const targetDate = moment(process.env.PROMISED_DATE);

// Function to calculate and log the time left
const logCountdown = () => {
  const now = moment();
  const duration = moment.duration(targetDate.diff(now));

  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  console.log(chalk.blue(`Time left until ${process.env.PROMISED_DATE}:`));
  console.log(chalk.green(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`));
};

// Log the countdown every 2 minutes (120000 milliseconds)
setInterval(logCountdown, process.env.COUNT_DOWN_INTERVAL);

// Initial log when the app starts
logCountdown();
