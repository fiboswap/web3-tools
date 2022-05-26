export function getUrlParams() {
    const r = {}
    const ps1 = (window.location.href).split('?').splice(1)
    if (ps1.length === 0) return r
    ps1.map(v => v.replace('#/', '').split('&').map(v => {
        const [key, value] = v.split('=')
        r[key] = value
        return v
    }))
    return r
}

let day = 24 * 3600
let hours = 3600
let minute = 60
export const DateFormat = num => {
    let d = ~~(num / day)
    let h = ~~(num % day / hours)
    let m = ~~(num % day % hours / minute)
    let s = ~~(num % day % hours % minute)
    return `${d} D ${h}:${m}:${s}`
}

// 节流

// 节流
export function debounce(wait) {
    let timeout;
    return function (fun) {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            fun()
        }, wait)
    };
}

export function checkLpToken0(token0, token1) {
    const isToken0 = token0.slice(0, 6) * 1 < token1.slice(0, 6) * 1
    return isToken0
}