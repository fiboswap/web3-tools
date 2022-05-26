
import {
    Container,
    FlexBlock,
    Icon,
    // TextMD,
    WhiteSpace
} from '../../components'

// import { } from '../../'

function Page({children, align}) {
    return (
        <Container align={align}>
            <FlexBlock
                flex
                justify='start'
                onClick={() => {
                    window.history.go(-1)
                }}
            >
                <Icon
                    style={{
                        color:'#323558',
                        marginRight:'6px',
                        borderRadius: '100px',
                        background: '#c0c2db'
                    }}
                    size='28'
                    type='icon-fanhui5'
                />
            </FlexBlock>
            <WhiteSpace size='1'/>
            {children}
        </Container>
    )
}

export default Page