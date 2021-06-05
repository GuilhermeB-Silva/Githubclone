import { TextField} from '@material-ui/core';
import { makeStyles} from '@material-ui/styles';


const override = makeStyles({
    MarginDense:{
        background:'transparent',
        borderRadius:'4px',
        padding:'8px 12px',
    },
    RootInput:{
        padding:0,
        color:'#fff',
        border:'1px solid #fff'    
    },
    Focused:{
        outline:'5px',
        borderInline:'0'
    }
})

export function SearchField(){

    const classes = override()

    return(
    <form style={{marginRight:'0.5rem'}} noValidate>
        <TextField id="filled-basic" 
        name='search'
        size="small" 
        placeholder="Search" 
        variant="outlined" 
        style={{border:'1px solid #485159',borderRadius:'5px'}}
        InputProps={{classes:{root:classes.RootInput,inputMarginDense:classes.MarginDense,focused:classes.Focused}}} 
        />
    </form>

    )
}