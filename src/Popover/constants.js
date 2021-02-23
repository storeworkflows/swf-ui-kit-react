export const POPOVER = {
    alignment: {
        TOP: "top",
        CENTER: "center",
        BOTTOM: "bottom",
        START: "start",
        END: "end"
    },
    noArrow: [{target: "top-start", content: "bottom-end"},
        {target: "top-end", content: "bottom-start"},
        {target: "bottom-end", content: "top-start"},
        {target: "bottom-start", content: "top-end"}
    ],
    arrowBorder: {
        RIGHT: '--popover-arrow-border-right',
        LEFT: '--popover-arrow-border-left',
        BOTTOM: '--popover-arrow-border-bottom',
        TOP: '--popover-arrow-border-top',
    },
    arrowAlign : {
        TOP: '--popover-arrow-top',
        LEFT: '--popover-arrow-left',
    },
    arrowSize: 16,
    arrowBorderWidth: 1
}
