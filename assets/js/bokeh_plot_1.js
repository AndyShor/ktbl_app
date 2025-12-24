var source_1 = new Bokeh.ColumnDataSource({
    data: { x: [], y: [] }
});

var plot_1 = Bokeh.Plotting.figure({
    title: 'Raw Data Stream - Total G-Force',
    tools: "pan,wheel_zoom,box_zoom,reset,save",
    sizing_mode: 'scale_width',
    height: 300,
    output_backend: "svg",  // Force SVG rendering!
    // Dark theme styling
    background_fill_color: "#0f172a",
    border_fill_color: "#1e293b",
    outline_line_color: "#cbd5e1",
    outline_line_width: 2,
    title_text_color: "#cbd5e1",
    title_text_font_size: "14pt",
    title_text_font_style: "normal"
});

// Add axis labels
plot_1.xaxis.axis_label = "Time (seconds)";
plot_1.yaxis.axis_label = "G-Force";

// Style the axes - setting BOTH text_color and using correct property names
plot_1.xaxis.axis_label_text_color = "#cbd5e1";
plot_1.yaxis.axis_label_text_color = "#cbd5e1";
plot_1.xaxis.axis_label_text_font_size = "11pt";
plot_1.yaxis.axis_label_text_font_size = "11pt";

// Major labels (tick numbers) - THIS IS THE KEY!
plot_1.xaxis.major_label_text_color = "#cbd5e1";
plot_1.yaxis.major_label_text_color = "#cbd5e1";
plot_1.xaxis.major_label_text_font_size = "10pt";
plot_1.yaxis.major_label_text_font_size = "10pt";

// Axis lines and ticks
plot_1.xaxis.axis_line_color = "#cbd5e1";
plot_1.yaxis.axis_line_color = "#cbd5e1";
plot_1.xaxis.axis_line_width = 2;
plot_1.yaxis.axis_line_width = 2;
plot_1.xaxis.major_tick_line_color = "#cbd5e1";
plot_1.yaxis.major_tick_line_color = "#cbd5e1";
plot_1.xaxis.minor_tick_line_color = "#cbd5e1";
plot_1.yaxis.minor_tick_line_color = "#cbd5e1";

// Style the grid
plot_1.xgrid.grid_line_color = "#cbd5e1";
plot_1.ygrid.grid_line_color = "#cbd5e1";
plot_1.xgrid.grid_line_alpha = 0.4;
plot_1.ygrid.grid_line_alpha = 0.4;
plot_1.xgrid.grid_line_width = 1;
plot_1.ygrid.grid_line_width = 1;

// Add line
plot_1.line({ field: "x" }, { field: "y" }, {
    source: source_1,
    line_width: 3,
    color: "#22d3ee",
    line_alpha: 0.95
});

Bokeh.Plotting.show(plot_1, document.getElementById("plot_1"));

// Nuclear option: brute force after render
setTimeout(function() {
    try {
        var el = document.getElementById("plot_1");
        if (el) {
            var texts = el.querySelectorAll("text, .bk-text");
            for (var i = 0; i < texts.length; i++) {
                texts[i].style.fill = "#cbd5e1";
                texts[i].style.color = "#cbd5e1";
                texts[i].setAttribute("fill", "#cbd5e1");
            }
        }
    } catch(e) { console.log("Text color fix error:", e); }
}, 500);
