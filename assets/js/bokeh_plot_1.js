var source = new Bokeh.ColumnDataSource({
    data: { x: [], y: [] }
});

var plot = Bokeh.Plotting.figure({
    title: 'raw data',
    tools: "pan,wheel_zoom,box_zoom,reset,save",
    sizing_mode: 'scale_width',
    height: 300
});

// add a line with data from the source
plot.line({ field: "x" }, { field: "y" }, {
    source: source,
    line_width: 2
});

Bokeh.Plotting.show(plot, document.getElementById("plot_1"));