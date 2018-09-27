variables = input("Please, give me tree integer numbers separated by coma. I will tell you if we can built a triangle made of such long sides: ")

list = variables.split(",")
variable_1 = int(list[0])
variable_2 = int(list[1])
variable_3 = int(list[2])

if variable_1 + variable_2 > variable_3 and variable_2 + variable_1 > variable_3 and variable_3 + variable_2 > variable_1:
    print("Yes, it is possible to built a triangle with yours sticks!")
else:
    print("Unfortunetally you could not built a triangle made of such sticks ")


# except ValueError:
    # print("Wrong input, try one more time")

#except IndexError:
   # print("Wrong input, try one more time")
    #continue