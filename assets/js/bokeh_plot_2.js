var source_2 = new Bokeh.ColumnDataSource({
    data: { x: [], y: [], y_1: [], y_2: [] }
});

var plot_2 = Bokeh.Plotting.figure({
    title: 'ML Analysis - Movement Features',
    tools: "pan,wheel_zoom,box_zoom,reset,save",
    sizing_mode: 'scale_width',
    height: 300,
    output_backend: "svg",  // Force SVG rendering!
    // Dark theme styling
    background_fill_color: "#0f172a",
    border_fill_color: "#1e293b",
    outline_line_color: "#475569",
    outline_line_width: 2,
    title_text_color: "#cbd5e1",
    title_text_font_size: "14pt",
    title_text_font_style: "normal"
});

// Add axis labels
plot_2.xaxis.axis_label = "Time (seconds)";
plot_2.yaxis.axis_label = "Similarity Score";

// Style the axes
plot_2.xaxis.axis_label_text_color = "#cbd5e1";
plot_2.yaxis.axis_label_text_color = "#cbd5e1";
plot_2.xaxis.axis_label_text_font_size = "11pt";
plot_2.yaxis.axis_label_text_font_size = "11pt";
plot_2.xaxis.major_label_text_color = "#cbd5e1";
plot_2.yaxis.major_label_text_color = "#cbd5e1";
plot_2.xaxis.major_label_text_font_size = "10pt";
plot_2.yaxis.major_label_text_font_size = "10pt";
plot_2.xaxis.axis_line_color = "#475569";
plot_2.yaxis.axis_line_color = "#475569";
plot_2.xaxis.axis_line_width = 2;
plot_2.yaxis.axis_line_width = 2;
plot_2.xaxis.major_tick_line_color = "#64748b";
plot_2.yaxis.major_tick_line_color = "#64748b";
plot_2.xaxis.minor_tick_line_color = "#475569";
plot_2.yaxis.minor_tick_line_color = "#475569";

// Style the grid
plot_2.xgrid.grid_line_color = "#334155";
plot_2.ygrid.grid_line_color = "#334155";
plot_2.xgrid.grid_line_alpha = 0.4;
plot_2.ygrid.grid_line_alpha = 0.4;
plot_2.xgrid.grid_line_width = 1;
plot_2.ygrid.grid_line_width = 1;

// Add three lines
plot_2.line({ field: "x" }, { field: "y" }, {
    source: source_2,
    line_width: 3,
    color: "#f472b6",
    line_alpha: 0.95,
    legend_label: "Swing"
});

plot_2.line({ field: "x" }, { field: "y_1" }, {
    source: source_2,
    line_width: 3,
    color: "#22d3ee",
    line_alpha: 0.95,
    legend_label: "Snatch"
});

plot_2.line({ field: "x" }, { field: "y_2" }, {
    source: source_2,
    line_width: 3,
    color: "#34d399",
    line_alpha: 0.95,
    legend_label: "Jerk"
});

// Style the legend
plot_2.legend.location = "top_right";
plot_2.legend.click_policy = "hide";
plot_2.legend.background_fill_color = "#1e293b";
plot_2.legend.background_fill_alpha = 0.95;
plot_2.legend.border_line_color = "#475569";
plot_2.legend.border_line_width = 2;
plot_2.legend.label_text_color = "#cbd5e1";
plot_2.legend.label_text_font_size = "10pt";
plot_2.legend.label_standoff = 8;
plot_2.legend.glyph_width = 30;

Bokeh.Plotting.show(plot_2, document.getElementById("plot_2"));

// Nuclear option: brute force after render
setTimeout(function() {
    try {
        var el = document.getElementById("plot_2");
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
