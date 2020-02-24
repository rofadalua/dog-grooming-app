class Api::G1::GroomersController < ApplicationController
    def index
        @groomers = Groomer.all 
        render @json: @groomers
    end

    # def create
    #     @groomer = Groomer.new(groomer_params)
    #     if @groomer.save 
    #         render @json: @groomer
    #     else 
    #         render json: {error: "Please fill all the line"}
    #     end
    # end

    def show 
        @groomer = Groomer.find(params[:id])
        renser @json: @groomer
    end

    def destroy
        @groomer = Groomer.find(params[:id])
        @groomer.destroy
    end

    private

    def groomer_params
        params.require(:groomer).permit(:first_name, :last_name)
    end

end
