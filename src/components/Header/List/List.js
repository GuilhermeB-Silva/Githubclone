import { List,ListItem,Link} from '@material-ui/core'
import { makeStyles} from '@material-ui/styles'


export function LinkHeader({marginRight='1rem',icon,href,children}){

    const styles = makeStyles({
        root:{
            width:'max-content',
            marginRight:`${marginRight}`,
            padding:0
        },
        gutters:{
            padding:0
        }
    })

    const classes = styles()
    
    return(
        <List>
            <Link href={href} style={{textDecoration:'none'}}>
                <ListItem classes={{root:classes.root,gutters:classes.gutters}}>{children}{icon}</ListItem>
            </Link>
        </List>
    )
}