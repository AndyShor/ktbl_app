var source_1 = new Bokeh.ColumnDataSource({
    data: { x: [], y: [] }
});

var plot_1 = Bokeh.Plotting.figure({
    title: 'raw data',
    tools: "pan,wheel_zoom,box_zoom,reset,save",
    sizing_mode: 'scale_width',
    height: 300
});

// add a line with data from the source
plot_1.line({ field: "x" }, { field: "y" }, {
    source: source,
    line_width: 2
});

Bokeh.Plotting.show(plot_1, document.getElementById("plot_1"));