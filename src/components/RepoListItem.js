import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import cx from 'classnames';
import  { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarBorder from '@material-ui/icons/Star';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { withSkeleton, withSkeletonProvider, Span, placeholder } from './Skeleton';
import { ListItemText } from '@material-ui/core';

const styles = theme => ({
    root: {
        '&.loading': {
            pointerEvents: 'none',
        },   
    },
    title: { 
        fontWeight: 500,
    },
    starIcon: {
        height: 18,
        width: 18,
        marginRight: 4,
    },
    starCount: {
        lineHeight: '18px',
    },
    listItemIcon: {
        marginRight: 0,
    }
    
});

const  StarIcon = withSkeleton(StarBorder);

const formatStarCount = (value) => {
    if (!value) return null;
    return value > 999 ? Number((value / 1000).toFixed(1)) + 'k' : value;
};

const RepoListItem = ({ classes, className, title, description, starCount, loading }) => (
    <ListItem className={cx(classes.root, className, { loading })} button>
        <ListItemText
            disableTypography
            primary={
                <Typography className={cx(classes.root, className, { loading })} button>
                    <Span>{title}</Span>
                </Typography>
            }
            secondary={
                <Typography color="textSecondary">
                    <Span>{description}</Span>
                </Typography>
            }
            />
        <ListItemIcon className={classes.listItemIcon}>
            <>
                <Typography color="textSecondary" className={classes.starCount}>
                    {formatStarCount(starCount)}
                </Typography>
            </>
        </ListItemIcon>
    </ListItem>
);

RepoListItem.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    className: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    starCount: PropTypes.number,
    loading: PropTypes.bool,
};

export default compose(
    withSkeletonProvider({
        title: placeholder(14),
        description: placeholder(90),

    }),
    withStyles(styles),

)(RepoListItem)