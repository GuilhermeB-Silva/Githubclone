import {Box, Typography,Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import LensIcon from '@material-ui/icons/Lens';

const styles = makeStyles({
    GridContainer:{
        color:'#ffff',
        padding:'1.5rem 0',
        borderBottom:'1px solid #e1e5f9',
        alignItems:'center'
    }
})


export function RepoBlock({repo}){

const classes = styles()



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

    return(
        <Grid container className={classes.GridContainer}>
            <Grid item lg={9} style={{display:'flex',flexDirection:'column'}}>
                <Typography component="h6" variant="h6" style={{marginBottom:'0.75rem'}}>{repo.repo_name}</Typography>

                <Box style={{display:'flex', alignItems:'center',fontSize:'0.8rem'}}>

                    <Box style={{display:'flex',alignItems:'center',marginRight:'1rem'}}>
                        <LensIcon fontSize='small' style={{marginRight:'5px',color:`${color}` }}/>
                        <Typography style={{fontSize:'0.8rem'}}>{repo.language} </Typography>
                    </Box>

                    <Typography style={{fontSize:'0.8rem'}}> Updated on {new Intl.DateTimeFormat('en-us',{day:'2-digit',month:'short'}).format(new Date(repo.updated_at))} </Typography>

                </Box>

            </Grid>

            <Grid item lg={3}>
                <Box style={{borderBottom:'2px solid #00FF00'}}>

                </Box>

            </Grid>

        </Grid>
    )
}