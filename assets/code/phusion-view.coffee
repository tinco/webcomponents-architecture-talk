Polymer('phusion-view',
	visit: (params) ->
		window.scrollTo(0,0);
		@load(params, => @show())

	leave: (params, new_view) ->
		@hide(new_view)
		@unload()

	load: (params, show) ->
		show()

	unload: () ->

	show: () ->
		@visible = true
		@.classList.add 'active'

	hide: () ->
		@visible = false
		@.classList.remove 'active'
)




#
