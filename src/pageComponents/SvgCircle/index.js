

const getRingPercent = (percent, r) => {
    let perimeter = Math.PI * 2 * r; //周长
    return (percent / 100) * perimeter + ' ' + (perimeter);
};

function Circle({size = 200, per = 100, style, ...other}) {
    // size = size * 0.8
    const strokeWidth = size / 200 * 16
    const r = size / 2 - 2 * strokeWidth
    const c = size / 2
    return (
        <div
            {...other}
            style={{
                width: "100%",
                textAlign: 'center',
                ...style
            }}
        >
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <defs>
                    <linearGradient id='svg_1' x1='0%' y1='0%' x2='100%' y2='64.9%'>
                        <stop offset='0%' stop-color='#FFD84F' />
                        {/* <stop offset='50%' stop-color='#ef9383' /> */}
                        <stop offset='100%' stop-color='#FFED8F' />
                    </linearGradient>
                </defs>
                <defs>
                    <filter id="f1" width="200%" height="200%">
                        <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>
                <circle
                    cx={c}
                    cy={c}
                    r={r}
                    strokeWidth={strokeWidth}
                    stroke='#8AE4FF'
                    fill='none'
                    // filter="url(#f1)"
                ></circle>
                <circle
                    cx={c-20}
                    cy={c}
                    r={r + size / 50}
                    strokeWidth={strokeWidth * 22 / 14}
                    stroke='url(#svg_1)'
                    fill='none'
                    // stroke-linecap='round'
                    transform='matrix(0,-1,1,0,0,180)'
                    strokeDasharray={getRingPercent(per, r + size / 50)}
                ></circle>
            </svg>
        </div>
    )
}


export default Circle