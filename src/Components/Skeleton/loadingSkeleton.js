import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function SkeletonChildrenDemo(props) {
    return (
        <div style={{margin: '50px'}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ margin: 2 }}>
                    <Skeleton variant="circular">
                        <Avatar  sx={{width: '50px', height: '50px'}}/>
                    </Skeleton>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Skeleton width="100%" sx={{height: '35px'}}>
                        <Typography>.</Typography>
                    </Skeleton>
                </Box>
            </Box>
            <Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: '15%' }} />
            </Skeleton>
        </div>
    );
}

SkeletonChildrenDemo.propTypes = {
    loading: PropTypes.bool,
};

export default function SkeletonChildren() {
    return (
        <Grid container spacing={8}>
            <Grid item xs>
                <SkeletonChildrenDemo loading />
            </Grid>
        </Grid>
    );
}