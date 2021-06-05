import { Avatar,Box,Typography,Button,Container,Link,Grid } from '@material-ui/core';
import {makeStyles } from '@material-ui/styles'
import {PeopleIcon,StarIcon,LocationIcon,MailIcon} from '@primer/octicons-react';



const styles = makeStyles({
    Avatar:{
        width:'280px',
        height:'280px'
    },
    FollowButton:{
        flexGrow:'1',
        border:'1px solid #fff',
        background:'#DCDCDC',
        marginBottom:'2rem',
        borderRadius:'4px',
        '&:hover':{
            background:'#C0C0C0'
        }
    },
    LinkHover:{
        margin:'0.5rem 0',
        fontSize:'0.4rem',
        display:'inline-block',
        "&:hover":{
            color:'#808080'
        },
        textDecoration:'none'
    }
})

const override = makeStyles({
    root:{
        textTransform:'none',
        padding:'5px 16px',
        lineHeight:'normal'
    }
})


export function AvatarInfo({user}){

    const classes = styles()
    const overrideClass = override()

    return(
        <Box>
            <Avatar alt="Guilherme" className={classes.Avatar} src={user.avatar} variant="circle" sizes="280"/>

            <Box style={{padding:'1rem 0'}}>
                <Typography component="h4" variant="h4">{user.name}</Typography>
                <Typography style={{fontSize:'20px'}}>{user.login}</Typography>
            </Box>

            <Button fullWidth className={classes.FollowButton} classes={{root:overrideClass.root}}>Follow</Button>
            <Typography component="p" style={{marginBottom:'1rem'}}>{user.bio}</Typography>

            <Box style={{marginBottom:'1rem'}}> 
                <Link href="/" underline="none"><PeopleIcon/> {user.followers} fallowers </Link>
                <span> · </span>
                <Link href="/" underline="none">{user.following} fallowing</Link>
                <span> · </span>
                <Link href="/" underline="none"><StarIcon/> 0 </Link>
            </Box>

            <Grid container direction='column' justify='center'>

                <Grid item style={{display:'flex', alignItems:'center'}}>
                    <LocationIcon/> <Typography component="p"  style={{marginLeft:'5px'}}> {user.location}</Typography>
                </Grid>

                <Grid item>
                    <Link href={`https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2F${user.loginRedirect}%3Ftab%3Drepositories`} style={{display:'flex',alignItems:'center'}}>
                        <MailIcon/> <Typography component="p" style={{marginLeft:'5px'}}>Sign in to view email</Typography>
                    </Link>
                </Grid>

            </Grid>
            <Link href='#' underline="none" className={classes.LinkHover}>
                <Typography component="span" style={{fontSize:'0.9rem'}}>Block or report</Typography>
            </Link>


        </Box>
        
    )
}