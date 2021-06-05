import Head from 'next/head';
import {Box,TextField,Button,CircularProgress,Container, Typography} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import { Header } from '../components/Header/Header';
import Image from 'next/image'
import { useEffect,useRef} from 'react'
import { useRouter } from 'next/router'


const styles = makeStyles({
  Container:{
    height:'100vh',
    background:'#000',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  }
})


export default function Home() {

  const classes = styles()
  const newRef = useRef()
  const router = useRouter()


  useEffect(()=>{

    const text = 'Você será redirecionado para meu clone do Github.'
    let i = 0

    function typeWriter() {
        if (i < text.length) {
          newRef.current.textContent += text.charAt(i);
          i++;
           setTimeout(typeWriter, 100);
        }
    }

    function redirect(){
      setTimeout(() => {
        router.push('/guilhermeb-silva')
      }, 4000);

    }

    typeWriter()
    redirect()
  },[])


  return (
    <Box className={classes.Container}> 

      <Head>
        <title>Home</title>
      </Head>

        <Image src='/images/octocat.png' width={400} height={400}/>
        <Typography ref={newRef} color='primary' style={{marginTop:'1rem'}} ></Typography>

    </Box>
  )
}

