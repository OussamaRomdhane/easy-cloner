var cloner = module.exports = function(source) {

  var
    queue = [],
    depth = 0;

  queue.add = function(element) {
    depth ++;
    queue.push(element);
  };

  queue.remove = function(element) {
    depth --;
    queue.pop(element);
  };

  var cloner = function(source) {

    // In case of a date
    if (source instanceof Date) {
      return new Date(source.getTime());
    }

    // In case of a Buffer
    if (source instanceof Buffer) {
      return new Buffer(source);
    }

    // In case of a function
    if (typeof source === 'function') {

      // Init function copy
      var fun = function temporary() {
        return source.apply(source.this, source.arguments);
      };

      // In case of a circular
      if (depth !== 0 && queue.indexOf(source) !== -1) {
        return '[circular]';
      }

      // Add properties
      for (var propKey in this) {

        if (source.hasOwnProperty(propKey)) {

          if (typeof source[propKey] === 'object') {
            queue.add(source);
            fun[propKey] = cloner(source[propKey]);
            queue.remove();
          } else {
            fun[propKey] = source[propKey];
          }

        }

      }

      // Return the function copy
      return fun;

    }

    // In case of an array
    if (Array.isArray(source)) {

      // Init array copy
      var array = [];

      if (depth !== 0 && queue.indexOf(source) !== -1) {
        return '[circular]';
      }

      // Fill the copy
      for (var i = 0; i < source.length; i++) {

        if (typeof source[i] === 'object') {
          queue.add(source);
          array[i] = cloner(source[i]);
          queue.remove();
        } else {
          array[i] = source[i];
        }

      }

      // Return the copy
      return array;

    }

    // In case of an object
    if (typeof source === 'object') {

      // Init object copy
      var obj = {};

      // Avoid the circle for the circle is long and full of terrors
      if (depth !== 0 && queue.indexOf(source) !== -1) {
        return '[circular]';
      } else {
        queue.add(source);
      }

      // Fill the object copy
      for (var key in source) {
        if (typeof source[key] === 'object') {
          queue.add(source);
          obj[key] = cloner(source[key]);
          queue.remove();
        } else {
          obj[key] = source[key];
        }
      }

      // Return the object copy
      return obj;

    }

    // Return the source because it's a primitive type
    return source;

  };

  return cloner(source);

};
