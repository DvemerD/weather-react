const HeaderSvgSelector = ({id}) => {
    switch (id) {
        case 'logo':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 213.708 42.841">
                    <g id="Logo" transform="translate(-149.292 -17.159)">
                        <path id="Контур_1" data-name="Контур 1" d="M588.076-43.217V-86.058l42.841,42.841Z" transform="translate(-438.784 103.216)" fill="#00ff9b" />
                        <path id="Контур_2" data-name="Контур 2" d="M0,42.841V0L42.841,42.841Z" transform="translate(149.292 60) rotate(-90)" fill="#003eff" />
                        <text id="Minimis" transform="translate(236 51)"  fontSize="30" fontFamily="SegoeUI-Semibold, Segoe UI" fontWeight="600" letterSpacing="0.1em"><tspan x="0" y="0">Minimis</tspan></text>
                    </g>
                </svg>
            );
        default:
            return <svg></svg>
    }
}

export default HeaderSvgSelector;