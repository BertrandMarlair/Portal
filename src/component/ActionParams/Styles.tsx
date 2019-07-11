import { Theme } from '@material-ui/core/styles';


const Styles = (theme: Theme): any => {
    return {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        dense: {
            marginTop: theme.spacing(2),
        },
        menu: {
            width: 200,
        },
        root: {
            display: 'flex',
        },
        formControl: {
            margin: theme.spacing(3),
        },
        group: {
            margin: theme.spacing(1, 0),
        },
    }
}

export default Styles
