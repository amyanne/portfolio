class ProjectsController < ApplicationController

    before_action :set_project


    def index
        @projects = Project.all
        render json: @projects
    end 

    def show
        render json: @project
    end

    def create

        @project = Project.new(project_params)
  
        if @project.save
            render json: @project
        end 
    end 

    private

    def set_project
        @project = Project.find_by_id(params[:id])
    end

    def project_params
        params.permit(:url)
    end 
end

