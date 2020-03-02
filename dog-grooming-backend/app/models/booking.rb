class Booking < ApplicationRecord
    belongs_to :user
    # validates :first_name, :last_name, :pet_name, :phone_number, :date, :email, :description, presense: true 
end
