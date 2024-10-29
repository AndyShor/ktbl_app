var source_2 = new Bokeh.ColumnDataSource({
    data: { x: [], y: [] }
});

var plot_2 = Bokeh.Plotting.figure({
    title: 'Post processed data',
    tools: "pan,wheel_zoom,box_zoom,reset,save",
    sizing_mode: 'scale_width',
    height: 300
});

// add a line with data from the source
plot_2.line({ field: "x" }, { field: "y" }, {
    source: source,
    line_width: 2
});

Bokeh.Plotting.show(plot_2, document.getElementById("plot_2"));