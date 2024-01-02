# Single 

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        print("Properties Given")

    def details(self):
         print(f"Name: {self.name}, Age: {self.age}")


class Student(Person):
    def __init__(self, name, age, section):
       
        super().__init__(name, age)
        self.section = section

    def details(self):
        super().details
        print(f"Section: {self.section}")

student = Student(name="Diya", age=20,section="A")

student.details()


# Multiple

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def details(self):
        print(f"Name: {self.name}, Age: {self.age}")


class Employee:
    def __init__(self, employee_id, department):
        self.employee_id = employee_id
        self.department = department

    def employee_details(self):
        print(f"Employee ID: {self.employee_id}, Department: {self.department}")


class Student:
    def __init__(self, student_id, section):
        self.student_id = student_id
        self.section = section

    def student_details(self):
        print(f"Student ID: {self.student_id}, Section: {self.section}")



class Status(Person, Employee, Student):
    def __init__(self, name, age, employee_id, department, student_id, section):
        Person.__init__(self, name, age)
        Employee.__init__(self, employee_id, department)
        Student.__init__(self, student_id, section)



working_Status = Status(
    name="Varsha",
    age=22,
    employee_id="A1234",
    department="IT",
    student_id="4VM19CS051",
    section="A"
)


working_Status.details()
working_Status.employee_details()
working_Status.student_details()


# Multi level

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def details(self):
        print(f"Name: {self.name}, Age: {self.age}")


class Employee(Person):
    def __init__(self, name, age, employee_id, department):
    
        super().__init__(name, age)
        self.employee_id = employee_id
        self.department = department

    def employee_details(self):
        print(f"Employee ID: {self.employee_id}, Department: {self.department}")


class Teamlead(Employee):
    def __init__(self, name, age, employee_id, department, team_size):
        super().__init__(name, age, employee_id, department)
        self.team_size = team_size

    def teamlead_details(self):
        print(f"Team Size: {self.team_size}")

teamlead = Teamlead(
    name="Mithun",
    age=23,
    employee_id="E1234",
    department="IT",
    team_size=10
)

teamlead.teamlead_details()
teamlead.employee_details()
teamlead.details()


