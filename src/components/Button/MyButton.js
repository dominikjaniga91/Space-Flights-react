import React from 'react';
import { Button } from "react-bootstrap";
import styles from './MyButton.module.scss';

const MyButton = ({ children, ...props }) => (

        <Button 
            className={styles.button} 
            variant="primary" 
            type="submit"  
            size="sm"
            {...props}>
                {children}
        </Button>



);

export default MyButton;