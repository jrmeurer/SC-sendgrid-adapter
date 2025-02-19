'use strict';

var _sendgrid = require('sendgrid');

var _sendgrid2 = _interopRequireDefault(_sendgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleSendGridAdapter = function SimpleSendGridAdapter(mailOptions) {
  if (!mailOptions || !mailOptions.apiKey || !mailOptions.fromAddress) {
    throw 'SimpleSendGridAdapter requires an API Key.';
  }
  var sendgrid = (0, _sendgrid2.default)(mailOptions.apiKey);

  var sendMail = function sendMail(_ref) {
    var to = _ref.to,
        subject = _ref.subject,
        text = _ref.text;

    return new Promise(function (resolve, reject) {
      sendgrid.send({
        from: mailOptions.fromAddress,
        to: to,
        subject: subject,
        // text: text,
        html: text // Modify to use HTML
      }, function (err, json) {
        if (err) {
          reject(err);
        }
        resolve(json);
      });
    });
  };

  return Object.freeze({
    sendMail: sendMail
  });
};

module.exports = SimpleSendGridAdapter;