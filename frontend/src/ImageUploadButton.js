import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function ImageUploadButton(props) {
    let [buttonColor, setButtonColor] = useState("");
    let [buttonText, setButtonText] = useState("Upload Similar Image to Search");
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={event => {
                    if (event.target.files && event.target.files[0]) {
                        setButtonColor('primary');
                        setButtonText('Image Attached')
                        let reader = new FileReader();
                        reader.readAsDataURL(event.target.files[0]);
                        reader.onload = (e) => {
                            let str_base64 = e.target.result;
                            let base64_location = str_base64.indexOf("base64");
                            str_base64 = str_base64.slice(base64_location);
                            str_base64 = str_base64.replace("base64,", "");
                            props.updateSearchImage(str_base64);
                        }
                    }
                }}
            />
            <label htmlFor="contained-button-file">
                <Button
                    variant="contained"
                    color={buttonColor}
                    component="span"
                    startIcon={<ImageIcon/>}
                >
                    {buttonText}
                </Button>
            </label>
        </div>
    );
}
