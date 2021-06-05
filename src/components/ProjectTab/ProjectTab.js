import { makeStyles } from '@material-ui/core/styles';
import {Box,TextField,Button,Grid,Typography, } from '@material-ui/core';


import {ProjectIcon,CheckIcon,TriangleDownIcon} from '@primer/octicons-react';

const styles = makeStyles({
    Padding:{
        padding:'5px 12px',
        background:'#fff',
        borderRadius:'8px'
    }
})


export function ProjectTab({userInfo}){

    const classes = styles()


    return(
        <>
            <form noValidate style={{display:'flex',alignItems:'center',padding:'1rem 0', width:'50%'}}>
                <TextField size="small" fullWidth id="outlined-basic" InputProps={{classes:{inputMarginDense:classes.Padding}}} margin='none' name='search' color='primary' placeholder="Search all projects..." variant="outlined" style={{flexGrow:'1'}}/>
            </form>

            <Box style={{border:'1px solid #fff',borderRadius:'5px'}}>
                <Grid container style={{padding:'1rem',background:'#fff', justifyContent:'space-between'}}>
                    <Grid item>
                        <Button style={{padding:0,marginRight:'10px'}}><ProjectIcon style={{marginRight:'5px'}}/>0 OPEN</Button>
                        <Button style={{padding:0}}><CheckIcon style={{marginRight:'5px'}}/>0 CLOSED</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{padding:0}}>SORT<TriangleDownIcon/></Button>
                    </Grid> 
                </Grid>
                <Typography style={{padding:'2rem', textAlign:'center',fontSize:'1.25rem'}}>{userInfo.login} doesn't have any projects yet.</Typography>
            </Box>
        </>

    )

}