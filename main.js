	/** Create Form */
	$('form').on('submit',function(e){
		e.preventDefault()
		
		var subcat = []
		for (var i = 1; i <= 24; i++) {
			var aux = '#'+i
			
			if ($(aux).is(':checked')) {
				subcat.push( $(aux).val() )	
			}
		}

		console.log(subcat)
		var formData = new FormData;
				formData.append('id', $('#id').val())
				formData.append('salt', $('#salt').val())		
				formData.append('subcat', subcat)		

			$.ajax({
				beforeSend: function (){
					$('#sub').html('<i class="fa fa-spin fa-circle-o-notch" aria-hidden="true"></i>')

				},
				url: 'main.php',
				type: 'POST',
				data: formData,
				processData: false,
				contentType: false,
				cache: false,
				success: function (resp) {
					res = JSON.parse(resp)

					if (!res.empty) {
						$('#sub').html('Done <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>')
					} else {
						$('#sub').html('Submit')
						alert("Ha ocurrido un error")
					}
					console.log(res)
				},
				error: function (jqXHR,estado,error) {
					console.log('----------------------')
					console.log('Status: Entro en error')
					console.log(estado)
					console.log(error)
				}
			})
	})