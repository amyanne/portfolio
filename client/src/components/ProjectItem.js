import React from 'react';
import Card from './Card';
import CardContent from './CardContent';
import CardTitle from './CardTitle';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
    return (
        <Card>
            <CardContent>

                <CardTitle><Link to={`/projects/${project.id}`}>{project.name}</Link></CardTitle>

            </CardContent>
        </Card>
    );
}

export default ProjectItem;