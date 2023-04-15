# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Calling super in a Ruby class is an inheritance property. It allows Child classes to 'borrow' parameters/key instance variable from their Parent/Super class. This allows us to build subclasses that share similar elements and properties with super classes. By borrwing keys, methods can also be passed down. Heres an example of the syntax:

class Animal 
    attr_accessor :alive, :age
    def initialize(age = 0)
        @alive = true
        @age = 0
    end
end

class Salmon < Fish
    attr_accessor :alive, :age, :coldblooded, :species
    def initialize(species, age = 0)
        super(age = 0)  <----------------------- here 'super' calls to 'Animal' to borrow its '@age' key instance variable.
        @species = species
    end
end

Researched answer: Super is a keyword in Ruby that is used to call a method in a parent class to the child class. When using the same method name in the child and parent, and adding it to the 'super', it will invoke the method(s) from the parent class. This is made possible by the Super class using the 'initialize' getter method.

2. What is a gem?

Your answer: A gem is a library that can be donwloaded and added to your Ruby files. Gems consist of code that have built-in features and methods. Gems are created by other developers, which allows for an infinite amount of possibilites and solutions.

Researched answer: Gems are packaged ruby code that gives you access to custom methods. Gems also serve as a way to share code with others. Gems can be isntalled via the terminal by using the 'gem' command tool. RubyGems is the default package manager that has a repository that has thousands of gems that can be installed.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database stores data in the form of tables with rows and columns. Relational databases such as PostgresQL utilize the CRUD properties to perform actions and organize data in tables. Tables in a relational database can be linked to one another by using a foreign ID and primary key, making them related.

Researched answer: A relational database is a type of database that organizes data into one or more tables, where each tables has a set of columns that define data attributes and rows that contain actual data. In a relational database, tables are related to each other through common fields and keys. Other examples of of databases are: Document,oriented databases, Key-value stores, and Graph databases.

4. What are primary keys? Why are they important?

Your answer: Primary keys are used in a relational database to give each instance/object/row a unique identifier. By default, programs like Postgresql will assign integers starting from 1. These are important because it allows models to be connected to other models via primary keys and foreign keys. Models can also have multiple rows with duplicate rows, so having a primary key makes them unique from one another.

Researched answer: Primary keys are a unique indentifier in a database table. Each row has its own primary key and does not repeat. They are important for several reasons, such as: uniqueness, data integrity, efficiency, indexing, and security.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: POST = Create, GET = Read, PUT = update, and DELETE = delete. These 4 verbs allow us to perform CRUD within HTTP 

Researched answer: HTTP verbs also known as HTTP methods, are used perform action  on a resource identified by a URL. Using HTTP verbs, you can perform CRUD on resources in a web application or an API.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: These are rules in a model that check if the data meets certain conditions before it is saved to a database.

2. RESTful routes: URL and HTTP methods used to perform CRUD operations on resources in a web application or API.

3. ERB: A templating engine used in Ruby that allows developers to embed Ruby code in HTML files, similar to React and JSX.

4. Params: The data sent with an HTTP request.

5. API: A set of protocols, tools, and standards used for building software applications. It allows different systems to communicate and exchange data with each other.
