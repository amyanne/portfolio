class ProjectsController < ApplicationController

    def index
        @projects = Project.all
        render json: @projects
    end 

    def create

        @project = Project.new(project_params)
  
        if @project.save
            render json: @project
        end 
    end 

    private

    def project_params
        params.permit(:url)
    end 
end

