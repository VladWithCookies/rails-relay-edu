class Api::V1::GraphqlsController < ApplicationController
  def create
    query_string = params[:query]
    query_variables = params[:variables] || {}
    context = {}
    result = Schema.execute(query_string, variables: query_variables, context: context)
    render json: result
  end
end
