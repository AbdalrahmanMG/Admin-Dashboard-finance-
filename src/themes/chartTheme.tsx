import { Theme } from "@mui/material";


export const theme=(Theme: Theme)=> ({
    "text": {
        "fontSize": 11,
        "fill": "#333333",
        "outlineWidth": 0,
        "outlineColor": "transparent"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": "red",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": Theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "ticks": {
            "line": {
                "stroke": Theme.palette.text.secondary,
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": Theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": Theme.palette.text.disabled,
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": Theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": Theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#333333",
            "outlineWidth": 2,
            "outlineColor": Theme.palette.background.default,
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "wrapper": {},
        "container": {
            "background": Theme.palette.background.default,
            "color": Theme.palette.text.primary,
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
})