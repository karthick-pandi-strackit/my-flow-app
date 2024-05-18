import React from "react";
import { Input, Dropdown, Button } from 'semantic-ui-react'

export const Login = () => {
    const bikeOptions = [
        {
            key: 'Bike1',
            text: 'Bike1',
            value: 'Bike1',
        },
        {
            key: 'Bike2',
            text: 'Bike2',
            value: 'Bike2',
        },
        {
            key: 'Bike3',
            text: 'Bike3',
            value: 'Bike3',
        },
    ];

    return <div>
        <h3>Login</h3>
        <div>
            <Input style={{width:"15%",marginBottom:"3%"}} placeholder="Name" />
        </div>
        <div>
            <Dropdown
                style={{width:"15%"}}
                placeholder='Select Bike'
                selection
                options={bikeOptions}
            /></div>
        <Button style={{width:"15%",marginTop:"3%"}}>Submit</Button>
    </div>
}