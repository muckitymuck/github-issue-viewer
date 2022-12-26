import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';

import IssueListItem from './IssueListItem';
import { Message } from '@material-ui/icons';
//import { TablePagination } from '@material-ui/core';
import IssuesLoader from './IssuesLoader';
import Pagination from './Pagination';
//import Message from './Message';

const Loading = () => (
    <List>
        <IssueListItem loading />
    </List>
);

const EmptyState = () => (
    <Message 
        title="there is no issue here"
        description="Looks Empty"
    />
);

class IssueList extends Component {
    static propTypes = {
        owner: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        state: PropTypes.string,
    }
    // static defaultProps = {
    //     state: IssueState.OPEN,
    // }
    render() {
        const { owner, name, state } = this.props;
        return (
            <IssuesLoader
                owner={owner}
                name={name}
                state={state}
                >
                    {({ loading, issues, hasNextPage, onLoadMore }) => {
                        if (loading) return <Loading />;
                        else if (!issues.length) {
                            return <EmptyState />;
                        }
                        return (
                            <div>
                                <List>
                                    {issues.map(issue => (
                                        <Link key={issue.is} to={`/${owner}/${name}/issues/${issue.number}`}>
                                            <IssueListItem
                                                number={issue.number}
                                                title={issue.title}
                                                author={issue.author ? issue.author.login : undefined }
                                                createdAt={issue.createdAt}
                                                commentCount={issue.comment.totalCount}
                                                state={issue.state}
                                                tabIndex={-1}
                                            />

                                        </Link>
                                    ))}
                                </List>
                                <Pagination
                                    onLoadMore={onLoadMore}
                                    hasNextPage={hasNextPage}
                                />
                            </div>
                        )
                    }}
                </IssuesLoader>
        )
    }
}
export default IssueList;