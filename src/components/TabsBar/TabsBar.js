import { Tab} from '@material-ui/core'
import { makeStyles} from '@material-ui/styles'

import {BookIcon,ProjectIcon,PackageIcon,RepoIcon,CheckIcon,TriangleDownIcon,SearchIcon} from '@primer/octicons-react';

const override = makeStyles({
    Wrapper:{
        flexDirection:'row',
        '& svg:first-child':{
            marginRight:'5px',
        }
    },
    Tab:{
        minWidth:'132px',
        textTransform:'none'
    },
    LabelIcon:{
        minHeight:'0',
        '& .MuiTab-wrapper > :first-child':{
            marginBottom:'1px'
        }
    }
})

export function TabsBar({icon,label,...rest}){

    const overrideClasses = override()

    return(

        <Tab 
        icon={icon}
        label={label} 
        classes={{
            root:overrideClasses.Tab,
            labelIcon:overrideClasses.LabelIcon,
            wrapper:overrideClasses.Wrapper,
        }} 
            {...rest}
        />
    )
}