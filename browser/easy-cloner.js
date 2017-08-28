var easyCloner = function(source) {

  var queue = [source];

  return (function cloner(source) {

    // TO DO clone functions too
    if (typeof source === 'function') {

      return '[function]';

    } else if (Array.isArray(source)) {

      var array = [];

      for (var i = 0; i < source.length; i++) {
        array[i] = (typeof source[i] === 'object') ? array[i] = easyCloner(source[i]) : array[i] = source[i];
      }

      return array;

    } else if (typeof source === 'object') {

      var obj = {};

      if (queue.indexOf(source) !== -1) {
        return '[circular]';
      }

      queue.push(source);
      console.log(queue);

      for (var key in source) {
        obj[key] = (typeof source[key] === 'object') ? easyCloner(source[key]) : source[key];
      }

      return obj;

    } else {

      return source;

    }

  })(source);

};
