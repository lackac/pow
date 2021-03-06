module.exports = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n\t<key>Label</key>\n\t<string>cx.pow.firewall</string>\n\t<key>ProgramArguments</key>\n\t<array>\n\t\t<string>sh</string>\n\t\t<string>-c</string>\n\t\t<string>ipfw add fwd 127.0.0.1,'));
      _print(this.httpPort);
      _print(_safe(' tcp from any to me dst-port '));
      _print(this.dstPort);
      _print(_safe(' in &amp;&amp; sysctl -w net.inet.ip.forwarding=1</string>\n\t</array>\n\t<key>RunAtLoad</key>\n\t<true/>\n\t<key>UserName</key>\n\t<string>root</string>\n</dict>\n</plist>\n'));
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};