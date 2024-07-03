// @flow 
import * as React from 'react';
import { Outlet } from 'react-router-dom';

type CrossesProps = {};
export const Crosses = ( props: CrossesProps ) => {
    return (
        <div>
            <div>Header</div>
            <Outlet />
            <div>Footer</div>
        </div>
    );
};