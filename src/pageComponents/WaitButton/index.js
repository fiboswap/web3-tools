
import {
    Button,

} from '../../components'

import { useSmiCountdown } from '../../hook/useCountdown'

// function Countdown({ end, ...other }) {
//     const res = useSmiCountdown(end)
//     return <Button {...other} disabled={true} b='600'>{res.str}</Button>
// }

function WaitButton({children, end, ...other}) {
    const res = useSmiCountdown(end)
    return res.end ? children : <Button {...other} disabled={true} b='600'>{res.str}</Button>
}

export default WaitButton