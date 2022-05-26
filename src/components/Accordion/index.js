import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const AccordionBlock = withStyles({
    root: {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        margin: 0,
        padding: 0,
        '&:not(:last-child)': {
        borderBottom: 0,
        },
        '&:before,&:after': {
        display: 'none',
        },
        '&$expanded': {
            margin: 0,
        }
    },
    expanded: {},
})(MuiAccordion);


const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: 0,
        backgroundColor: 'transparent'
    },
}))(MuiAccordionDetails);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'transparent',
        // borderBottom: '1px solid rgba(0, 0, 0, .125)',
        // marginBottom: -1,
        // minHeight: 56,
        padding: 0,
        display: 'inline-block',
        width: '100%',
        "&$expanded": {
            minHeight: 36,
        },
    },
    content: {
        margin: '0',
        '&$expanded': {
        margin: '0',
        minHeight: 'unset'
        },
    },
    expanded: {},
})(MuiAccordionSummary);

function Accordion({title='',list=[],...other}) {
    return (
        <AccordionBlock {...other}>
            <AccordionSummary>
                {title}
            </AccordionSummary>
            {
                list.map((v,i) => <AccordionDetails key={i}>{v}</AccordionDetails>)
            }
        </AccordionBlock>
    );
}

export default Accordion