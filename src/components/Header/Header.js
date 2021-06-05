import {ExpandMore,GitHub} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import {Box,Container,TextField,LinearProgress,ListItem,Button,AppBar,Toolbar  } from '@material-ui/core';
import { LinkHeader} from '../Header/List/List';
import { SearchField } from './SearchForm/SearchField';

const style = makeStyles({
    Toolbar:{
        width:'100%',
        maxWidth:'1280px',
        margin:'0 auto',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0 1rem'
    },
    Box:{
        display:'flex',
        color:'#fff',
        alignItems:'center',
        fontSize:'1rem',
    },
    Icon:{
        fill:' currentColor',
        width: '2rem',
        height: '2rem',
        display: 'inline-block',
        fontSize: '1.5rem',
        transition:' fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        flexShrink: 0,
        mozUserSelect: 'none',
        MarginRight:'1.5rem',
        color:'#fff'
    },
    OverrideToolBarMinHeight:{
        minHeight:'0'
    },
    SignInButton:{
        textTransform:'none',
        marginRight:'0',
        color:"#fff",
        '&:hover':{
            color:'#fffa'
        }
    },
    SignUpButton:{
        textTransform:'none',
        color:'#fff',
        border:'1px solid #fff',
        '&:hover':{
            color:"#fffa",
            borderColor:'#fffa'
        }
    }
})

const override = makeStyles({})

export function Header(){

    const classes = style()
    const overrideClasses = override() 

    return(

        <AppBar position='static' style={{background:'#24292e',height:'4.5rem', padding:'0.5rem 0'}}>
            <Toolbar className={classes.Toolbar} classes={{regular:classes.OverrideToolBarMinHeight}}>

                <Box className={classes.Box} >

                    <LinkHeader href="#" marginRight={'1rem'}>
                         <GitHub className={classes.Icon}/>
                    </LinkHeader>

                    <LinkHeader href={'#'} icon={<ExpandMore style={{fontSize:'1rem'}}/>}>
                         Why Github ?
                    </LinkHeader>

                    <LinkHeader href={'#'}>
                        Team
                    </LinkHeader>

                    <LinkHeader href={'#'}>
                        Enterprise
                    </LinkHeader>

                    <LinkHeader href={'#'} icon={<ExpandMore style={{fontSize:'1rem'}}/>}>
                        Explorer
                    </LinkHeader>

                    <LinkHeader href={'#'}>
                        Marketplace
                    </LinkHeader>

                    <LinkHeader href={'#'} icon={<ExpandMore style={{fontSize:'1rem'}}/>}>
                        Pricing
                    </LinkHeader>

                </Box>

                <Box style={{display:'flex',color:'#fff',alignItems:'center'}}>
                    <SearchField />

                    <LinkHeader href="#" marginRight={'0.5rem'}>
                        <Button className={classes.SignInButton}>Sign In</Button>
                    </LinkHeader>

                    <LinkHeader href="#">
                        <Button className={classes.SignUpButton}>Sign Up</Button>
                    </LinkHeader>

                </Box>
            
            </Toolbar>

        </AppBar>

    )
}