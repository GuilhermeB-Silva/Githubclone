import { TextField,MenuItem} from '@material-ui/core'
import { makeStyles} from '@material-ui/styles'


const styles = makeStyles({
    Indicator:{
        background:'#ffea00',
        width:'100%'
    },
    Select:{
        backgroundColor:'none',
        '&::focus':{
            backgroundColor:'none'
        },
    },
    Padding:{
        padding:'5px 12px',
        background:'#fff',
        borderRadius:'8px'
    }
   
})



export function RepositoriesForm(){
    
    const classes = styles()

    return(

        <>
            <TextField size="small" id="outlined-basic" InputProps={{classes:{inputMarginDense:classes.Padding}}} margin='none' name='search' color='primary' placeholder="Find a repository..." variant="outlined" style={{flexGrow:'1',marginRight:'1rem'}}/>

            <TextField size='small' id="select" SelectProps={{classes:{select:classes.Select}}} InputProps={{classes:{inputMarginDense:classes.Padding}}} label="Select" value="" style={{ width:'100px',marginLeft:'4px',background:'#fff',borderRadius:'10px'}} select variant='outlined'>
                <MenuItem value=""> select type</MenuItem>
            </TextField>
        </>

    )
}