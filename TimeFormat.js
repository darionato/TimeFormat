(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    timeFormat: function(options) {
      var defaults;
      defaults = {
        separator: ':'
      };
      options = $.extend(defaults, options);
      return this.each(function() {
        var format00, key_check, obj, opt, time_it;
        obj = $(this);
        opt = options;
        format00 = function(value) {
          var zero;
          zero = value.length === 1 ? '0' : '';
          return "" + zero + value;
        };
        time_it = function() {
          var hours, minutes, str;
          str = obj.val().replace(opt.separator, '');
          hours = minutes = '0';
          if (str.length === 1) {
            hours = str;
          } else if (str.length === 2) {
            hours = str;
          } else if (str.length === 3) {
            hours = str.substr(0, 1);
            minutes = str.substr(1);
          } else if (str.length > 3) {
            hours = str.substr(0, 2);
            minutes = str.substr(2, 2);
          }
          return obj.val("" + (format00(hours)) + opt.separator + (format00(minutes)));
        };
        key_check = function(e) {
          var code, functional;
          code = e.keyCode ? e.keyCode : e.which;
          functional = false;
          if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) {
            functional = true;
          }
          if (code === 8 || code === 9 || code === 13 || code === 46 || code === 37 || code === 39) {
            functional = true;
          }
          if (!functional) {
            e.preventDefault();
            return e.stopPropagation();
          }
        };
        $(this).bind('keydown.time_format', key_check);
        return $(this).bind('focusout.time_format', time_it);
      });
    }
  });

}).call(this);
