# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#Pseudocode:
#Create a function called 'contains_letter' and pass an array and a letter as parameters
#Use 'select' method to filter through the array
#Use conditional statement with '.includes?' method to see if the word(s) in the array contains the chosen letter
#Return all words that meet that condition in an array

def contains_letter (array, letter)
    array.select do |value|
        if value.include?(letter)
            value
        end
    end
end

# p contains_letter(beverages_array, letter_o) #output: ['coffee', 'soda water']
# p contains_letter(beverages_array, letter_t) #output: ['tea', 'water', 'soda water']


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

#Create a method called 'value_collector_sorter' that takes in a hash as a parameter
#Create an object called 'keys' to hold all the keys in the hash
#Create an object called key_values to hold all the key values
#Use '.values_at' to extract all values
#Use '*' to extract from all 'keys'
#Use '.flatten' to get rid of nested arrays, and make it into one array
#Use '.sort' to sort by alphabetical order
#Return array with all key values in alphabetical order

def value_collector_sorter (hash)
    keys = hash.keys
    key_values = hash.values_at(*keys) 
    key_values.flatten.sort
end

# p value_collector_sorter(us_states) #output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

#Pseudocode
#Create a class called 'Bike'
#Create setter/getter with 'attr_accessor', add all keys
#Create setter with initialze and add all valid parameters
#Create key instances '@model, @wheels, @current_speed'
#Create method 'bike_info' and return a string interpolation with key instances

# class Bike
#     attr_accessor :model, :wheels, :current_speed
#     def initialize (model)
#     @model = model
#     @wheels = 2
#     @current_speed = 0
#     end

#     def bike_info
#         "This #{@model} has #{@wheels} wheels and is going #{@current_speed} mph"
#     end
# end

# #test
# trek = Bike.new('Trek')
# p trek.bike_info #outcome: "This Trek has 2 wheels and is going 0 mph"




# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

#Pseudocode
#Create a class called 'Bike'
#Create setter/getter with 'attr_accessor', add all keys
#Create setter with initialze and add all valid parameters
#Create key instances '@model, @wheels, @current_speed'
#Create method 'bike_info' and return a string interpolation with key instances
#Create method 'increase_speed' with 'mph' as a parameter. Add 'mph' value to @current_speed
#Create method 'decrease_speed' with 'mph' as a parameter. Add 'mph' value to @current_speed. Speed cannot go negative since @current_speed is defaulted to 0.

class Bike
    attr_accessor :model, :wheels, :current_speed
    
    def initialize (model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "This #{@model} has #{@wheels} wheels and is going #{@current_speed} mph"
    end

    def increase_speed mph
       @current_speed += mph
    end

    def decrease_speed mph
        @current_speed -= mph
    end
end


#test
trek = Bike.new('Trek')

trek.increase_speed(10)
p trek.bike_info #output: "This Trek has 2 wheels and is going 10 mph"
trek.increase_speed(5)
p trek.bike_info #output: "This Trek has 2 wheels and is going 15 mph"
trek.decrease_speed(10)
p trek.bike_info #output: "This Trek has 2 wheels and is going 5 mph"
trek.decrease_speed(5)
p trek.bike_info #output: "This Trek has 2 wheels and is going 0 mph"





