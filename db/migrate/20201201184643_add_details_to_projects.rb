class AddDetailsToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :details, :string
    add_column :projects, :git_url, :string
  end
end
