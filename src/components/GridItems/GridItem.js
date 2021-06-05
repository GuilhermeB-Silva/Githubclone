import { Grid,Paper,Box,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LensIcon from '@material-ui/icons/Lens';


const styles = makeStyles({
    Paper:{
        padding:'1rem',
        background:'#fff',
        borderRadius:'6px',
        flexGrow:1
    },
    Typography:{
        marginBottom:'2rem'
    },
    Box:{
        display:'flex', 
        alignItems:'center',
        fontSize:'0.5rem'
    }
})

export function GridItem({repo}){

    let color = '#7B68EE'

    switch(repo.language){
        case 'TypeScript': color = '#0000FF'; 
        break;
        case 'JavaScript': color = '#00FFFF';
        break;
        case 'Nunjucks': color = '#00FA9A';
        break;
        case 'CSS' : color = '#ADFF2F'
        break;
        default : color;
    }

    const classes = styles()

    return (

    <Grid item xs={6}>
            <Paper className={classes.Paper}>
                <Typography className={classes.Typography}>{repo.repo_name}</Typography>
                <Box className={classes.Box}>
                    <LensIcon fontSize='small' style={{marginRight:'5px',color:`${color}` }}/>
                    <Typography style={{fontSize:'0.8rem'}}>{repo.language}</Typography>
                </Box>
            </Paper>
    </Grid >

    )
}