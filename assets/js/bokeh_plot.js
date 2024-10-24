var source = new Bokeh.ColumnDataSource({
    data: { x: [], y: [] }
});

var plot = Bokeh.Plotting.figure({
    title: 'Example of random data',
    tools: "pan,wheel_zoom,box_zoom,reset,save",
    height: 300,
    sizing_mode: 'scale_width',
});

// add a line with data from the source
plot.line({ field: "x" }, { field: "y" }, {
    source: source,
    line_width: 2
});

Bokeh.Plotting.show(plot, document.getElementById("plot"));