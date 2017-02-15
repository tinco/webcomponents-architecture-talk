Polymer 'us-view',

  lastParams: null
  loaded: false

  ready: ->
    @dataLoaders = []
    @addEventListener 'registerDataLoader', (ev) =>
      @registerDataLoader(ev.detail)
    @super()

  load: (params, show) ->
    if !@loaded || JSON.stringify(params) != JSON.stringify(@lastParams)
      @loadData(_U.clone(params))
      @dataLoaders.forEach((e)-> e.loadData(_U.clone(params)))

      # Cache views when a user is logged in
      if App.context.currentUser?
        @loaded = true

    @lastParams = params

    if @requiresAuthentication()
      App.user (user) =>
        if @requiresValidEmail() &&
           user.email != user.confirmed_email
          App.goTo('confirm-email')
        else
          if @requiresUsableAccount() &&
             user.organization.state != 'usable'
            App.goTo('organization')
          else if @requiresUsableAccount() &&
             !user.organization.saas_agreement_valid
            App.goTo('sign-license')
          else
            show()
    else
      show()

  # After 30 seconds, if the current view is not visible, unload all data connections.
  unload: () ->
    setTimeout(() =>
      if not @visible
        @unloadData()
        @dataLoaders.forEach((e)-> e.unloadData() if e.unloadData?)
        @loaded = false
    , 30000)

  # Override this to load data for this view. When loading data, old data should always be cleared first.
  loadData: (params) ->
    # When a view is first visited, loadData is called.
    # If the view is left, unloadData is called after a 30 second timeout, unless the view is visible after that timeout.
    # If the view is visited again before the timeout, and the parameters are the same as before, loadData is not called again, and the old data is used.
    # If the view is visited after the timeout, it is treated as if the view is first visited.

  # Override this to unload data for this view. This means clearing the old data, and stopping any outstanding subscriptions.
  unloadData: () ->

  # Override this and return false if your view does not require authentication.
  requiresAuthentication: ->
    true

  # Override this and return false if your view does not require a usable account.
  requiresUsableAccount: ->
    true

  requiresValidEmail: ->
    true

  registerDataLoader: (dataLoader) ->
    @dataLoaders.push(dataLoader)

  show: () ->
    @super()
    # When a view is shown we are not loading anymore. It is important
    # that the not-loaded attribute is always removed. So if this element
    # is extended it has to either call this function or do it manually.
    body = document.getElementsByTagName('body')[0]
    body.className = body.className.replace(/not-loaded/,'')
