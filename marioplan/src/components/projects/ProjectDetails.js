import React from 'react';

const ProjectDetails = (props) => {
    // to get the id from the url 
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, distinctio harum eveniet eum consequuntur animi sit. Nostrum quis, saepe pariatur magnam voluptatibus, labore ducimus, ad expedita ea quaerat quibusdam. Consequuntur.
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Wijdan</div>
                    <div>21 September, 7pm</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
