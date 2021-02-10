console.log('It works')

$(document).ready(function () {
	$('.send-btn').click(function (event) {
		event.preventDefault()
		console.log('Clicked button');

		var name = $('.name').val()
		var email = $('.email').val()
		var message = $('.message').val()
		var	statusElm = $('.status')
		statusElm.empty()

		if (email.length >= 5 && email.includes('@') && email.includes('.')) {
			statusElm.append('<div>Email is valid</div>')
		} else {
			statusElm.append('<div>Email is not valid</div>')
		}

		if (name.length >= 3) {
			statusElm.append('<div>name is valid</div>')
		} else {
			statusElm.append('<div>name is not valid</div>')
		}

		if (message.length >= 25) {
			statusElm.append('<div>message is valid</div>')
		} else {
			statusElm.append('<div>message is not valid</div>')
		}


	})

})