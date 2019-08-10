import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(5, 5),
        minHeight:"370px",
        maxHeight:"430px",
        minWidth:"30%"
    },
    top:{
        display:"flex",
        justifyContent: "center",
        alignItems:"top",
    },
    textField:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button:{
        width:"90px"
    },
}));

export default useStyles;