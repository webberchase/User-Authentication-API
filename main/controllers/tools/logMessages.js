/**
 * Author
 * Joseph Hentges
 * September 2019
 * https://joeyhentges.com
 *
 * This holds a JSON object of pre-set log messages.
 * New log messages should be entered here, or one could use the
 * 'custom[0] value, which allows a custom log message
 */

module.exports.getLogMessage = {
  custom: {
    0: 'CUSTOM MESSAGE | ',
  },
  // Authentication Messages
  authentication: {
    1: 'AUTHENTICATION | Successfully logged in.',
    2: 'AUTHENTICATION | Failed to logged in.',
    3: 'AUTHENTICATION | LOCKED | Failed to logged in.',
    4: 'AUTHENTICATION | ACCOUNT DISABLED | Blocked from logging in.',
    5: 'AUTHENTICATION | Successfully verified account - email address verified',
    6: 'AUTHENTICATION | Successfully reset password - reset password through "Forgot Password"',
    7: 'AUTHENTICATION | Successfully unlocked account - unlocked account through "Forgot Password"',
    8: 'AUTHENTICATION | 3 FAILED LOGIN ATTEMPTS | LOCKED | Account Now Locked',
    9: 'AUTHENTICATION | Successfully completed profile information'
  },
};
