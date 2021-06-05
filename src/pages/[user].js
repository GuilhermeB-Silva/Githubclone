import { makeStyles } from '@material-ui/core/styles';
import {Box,Container,TextField,Button,Grid,Tabs,Typography,AppBar,MenuItem } from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import { useState} from 'react'
import axios from 'axios'

import {ProjectIcon,PackageIcon,RepoIcon,CheckIcon,TriangleDownIcon} from '@primer/octicons-react';

import { Header} from '../components/Header/Header';
import { TabPanel} from '../components/TabPanel/TabPanel'
import { AvatarInfo } from '../components/AvatarInfo/AvatarInfo';
import { RepoBlock } from '../components/RepoBlock/RepoBlock';
import { TabsBar } from '../components/TabsBar/TabsBar';
import { GridItem } from '../components/GridItems/GridItem';
import { RepositoriesForm} from '../components/RepositoriesForm/RepositoriesForm';
import { ProjectTab } from '../components/ProjectTab/ProjectTab';


const styles = makeStyles({
    Indicator:{
        background:'#ffea00',
        width:'100%'
    },
    TabPanel:{
        '&:nth-child(2)':{
            borderTop:'1px solid #fff'
        }
    },
    Padding:{
        padding:'5px 12px',
        background:'#fff',
        borderRadius:'8px'
    },
    BoxTab:{
        borderBottom:'1px solid #fff', 
        marginTop:'1.5rem', 
        textAlign:'center'
    },

    BoxAvatar:{
        color:'#fff',
        maxWidth:'312px', 
        padding:'0 1rem',
        position:'relative', 
        top:'-40px',
        zIndex:'2'
    }
   
})

export default function User({userInfo,repos}){

    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const classes = styles()

    const handleChange = (event, newValue) => {

        setValue(newValue);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };


    function a11yProps(index) {
        return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
        };
    }

    return (
        
        <Box style={{background:'#090c10',minHeight:'100vh',paddingBottom:'3rem'}}>

            <Header/>

            <Box className={classes.BoxTab}>
                <AppBar position="relative" style={{background:'inherit', color:'#fff',zIndex:'1'}}>
                    <Tabs value={value} onChange={handleChange} centered={true} aria-label="tabs project" 
                    TabIndicatorProps={{classes:{colorSecondary:classes.Indicator}}}
                    >
                        <TabsBar icon={<ProjectIcon/>} label={"Overview"} {...a11yProps(0)}/>
                        <TabsBar icon={<ProjectIcon/>} label={'Repositories'} {...a11yProps(1)}/>
                        <TabsBar icon={<PackageIcon/>} label={"Projects"} {...a11yProps(2)}/>
                        <TabsBar icon={<RepoIcon/>} label={"Packages"} {...a11yProps(3)}/>
                    </Tabs>
                </AppBar>
            </Box>


            <Container style={{display:'flex'}}>
                    
                <Box className={classes.BoxAvatar}>
                    <AvatarInfo user={userInfo}/>
                </Box>

                <Box style={{color:'#fff',width:'100%', maxWidth:'936px',padding:'0 1rem'}}>

                    <TabPanel value={value} index={0}>
                        <Typography style={{marginBottom:8, marginTop:20}}>Popular repositories</Typography>
                        <Grid container style={{marginTop:'24px'}} spacing={2}>
                            {repos.map(repo=>(
                               <GridItem key={repo.id} repo={repo}/>
                            ))}
                        </Grid>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <form noValidate style={{display:'flex',alignItems:'center',padding:'1rem 0'}}>
                            <RepositoriesForm/>
                        </form>

                        <Box className={classes.TabPanel}>
                            {repos.map(repo => (
                                <RepoBlock key={repo.name} repo={repo}/>
                            ))}
                        </Box>
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <ProjectTab userInfo={userInfo}/>
                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        <Box style={{marginTop:'1rem',textAlign:'center'}}>
                            <WhatshotIcon style={{fontSize:'4rem',color:'#FF0000',marginTop:'1rem'}}/>
                            <Typography component="h4" variant="h4" style={{paddingBottom:'1rem'}}> Get started with GitHub Packages</Typography>
                            <Typography component="p"> 
                                Safely publish packages, store your packages alongside your code, and share your packages privately with your team.
                            </Typography>
                        </Box>
                    </TabPanel>

                </Box>

            </Container>

        </Box>
    )
}

export async function getServerSideProps(context) {

    const {query} = context

    const userInfo = await axios.get(`https://api.github.com/users/${query.user}`).then(response=> ({
        login:response.data.login,
        name:response.data.name,
        avatar:response.data.avatar_url,
        bio:response.data.bio,
        followers:response.data.followers,
        following:response.data.following,
        location:response.data.location,
        repo:response.data.public_repos,
        loginRedirect:response.data.login.toLowerCase()
    }))
    const repos = await axios.get(`https://api.github.com/users/guilhermeb-silva/repos`).then(response => response.data.map((repo,index)=>({
        id:index + 1,
        repo_name:repo.name,
        language:repo.language,
        updated_at:repo.updated_at
    })))


    return {
      props: {
          userInfo,
          repos
      }, 
    }
  }
  