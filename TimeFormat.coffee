$ = jQuery

$.fn.extend

	timeFormat: (options) ->

		defaults =
			separator: ':'

		options = $.extend defaults, options

		return @each () ->


			# set the object
			obj = $(this)
			opt = options


			format00 = (value) ->

				zero = if value.length is 1 then '0' else ''

				"#{zero}#{value}"


			# return the value formated like 00:00
			time_it = () ->

				str = obj.val().replace opt.separator, ''
				hours = minutes = '0'

				if str.length is 1

					hours = str

				else if str.length is 2

					hours = str

				else if str.length is 3

					hours = str.substr 0, 1
					minutes = str.substr 1

				else if str.length > 3

					hours = str.substr 0, 2
					minutes = str.substr 2, 2

				obj.val "#{format00(hours)}#{opt.separator}#{format00(minutes)}"


			# check to not input alphabetical chars
			key_check = (e) ->

				code = if e.keyCode then e.keyCode else e.which
				functional = off

				# allow key numbers, 0 to 9
				functional = on if (code >= 48 and code <= 57) or (code >= 96 and code <= 105)

				functional = on if code in [8,9,13,46,37,39]

				if not functional

					e.preventDefault()
					e.stopPropagation()



			# bind the action
			$(@).bind 'keydown.time_format', key_check
			$(@).bind 'focusout.time_format', time_it