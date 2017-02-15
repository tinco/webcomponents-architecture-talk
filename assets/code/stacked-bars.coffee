Polymer('phusion-chart-stacked-bars',
  update: ->
    return if @ran || @graph.height == 0 || @graph.width == 0
    @ran = true

    x = @graph.domain.x

    data = @data.filter (d) => @getX(d) >= x(x.domain()[0]) && @getX(d) < x(x.domain()[1])

    availableWidth = @graph.width - @graph.margin.left - @graph.margin.right

    barWidth = (availableWidth / data.length) - @barSpace

    preprocessData = (data) ->
      new_data = []
      for d in data
        row = []
        currentHeight = 0
        for key, value of d.v
          row.push
            h: value
            y0: currentHeight
            t: d.t
            c: key
          currentHeight += value
        new_data.push row
      new_data

    data = preprocessData(data)

stack = @chart.selectAll(".stack").data(data, (d,i) -> d[0].t)
stackEnter = stack.enter().append("g")
bar = stackEnter.selectAll(".bar").data( ((d,i) -> d))
bar.enter().append("rect")
  .attr("class", "bar")
  .attr("width", barWidth)
stack
  .attr("transform", (d,i) => "translate(#{@getX(d[0]) + 1},-1)")

    getX = @graph.domain.getX
    getY = @graph.domain.getY

    if @barOnClick
      stack.attr('onclick', (d)=> "var f = #{@barOnClick}; f(#{JSON.stringify(d)})" )
      stack.attr('class', 'clickable')

    bar
      .attr("y", (d) => @graph.domain.y(d.y0 + d.h))
      .attr("height", (d) => (@graph.height - @graph.margin.bottom - @graph.margin.top) - @getY(d))
      .attr("class", (d) => "bar cat-#{d.c}")

    # remove other elements
    bar.exit().remove()
    stack.exit().remove()

  initialize: (graph) ->
    @ran = false
    @graph = graph
    @hash = 0

    @barSpace ||= 2

    getX = @graph.domain.getX
    getY = @graph.domain.getY

    @getX = (d) => @graph.domain.x(getX(d))
    @getY = (d) => @graph.domain.y(getY(d))

    @line = line = d3.svg.line()
      .x(@getX)
      .y(@getY)

    @chart = graph.svg
      .append('g')
        .attr('transform', "translate(#{graph.margin.left},#{graph.margin.top})")

  onElementResized: ->
    @clearData()
    @initialize(@graph)

  clearData: ->
    @chart?.remove()

  setSubscription: (subscription) ->
    @subscription = subscription
    @data = []
    subscription.processData (data) -> ({ t: key, v: value } for key, value of data.timeSlots)
    subscription.on 'data', (data) =>
      @data = data
      @ran = false
      @fire('data')
)
