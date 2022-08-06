import {alpha, styled} from "@mui/material/styles"

const InputWrapperWidget = (props) => {
    const InputWrapper = styled('div')(({ theme }) => ({
        position: 'relative',
        margin:theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha('#4b4e5f', 1),
        '&:hover': {
            backgroundColor: alpha('#4b4e5f', 0.9),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            width: 'auto',
        },
    }))

    return(
        <InputWrapper>
            {props.content}
        </InputWrapper>
    )
}

export default InputWrapperWidget