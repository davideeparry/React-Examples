import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    content="Oh my gosh!" 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    content="Wowzers." 
                    author="George" 
                    timeAgo="Today at 6:55PM" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    content="That is so craaay cray." 
                    author="Alex" 
                    timeAgo="Today at 8:45PM" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    ); 
};

ReactDOM.render(<App />, document.querySelector('#root'));