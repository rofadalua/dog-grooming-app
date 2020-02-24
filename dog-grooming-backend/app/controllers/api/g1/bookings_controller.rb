class Api::G1::BookingsController < ApplicationController
     
    def index
        @bookings = Booking.all 
        render @json: @bookings
    end

    def create
        @booking = Booking.new(booking_params)
        if @booking.save 
            render @json: @account
        else 
            render json: {error: "Please fill all the line"}
        end
    end

    def show 
        @booking = Booking.find(params[:id])
        renser @json: @booking
    end

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
    end

    private

    def booking_params
        params.require(:booking).permit(:groomer_id, :first_name, :last_name, :pet_name, :phone_number, :email, :date, :description)
    end

end
