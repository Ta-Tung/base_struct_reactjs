/* eslint-disable prettier/prettier */
const log = {
  warn: (...message) => {
    console.log('\x1b[33m', ...message, '\x1b[0m');
  },
  error: (...message) => {
    console.log('\x1b[31m', ...message, '\x1b[0m');
  },
  success: (...message) => {
    console.log('\x1b[32m', ...message, '\x1b[0m');
  },
  nomarl: (...message) => {
    console.log('\x1b[0m', ...message);
  },
}

export default log;