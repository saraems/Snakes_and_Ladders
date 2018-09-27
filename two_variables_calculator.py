import time

while True:
    variables = input("Please, give me two integer numbers separated by coma: ")
    try:
        list = variables.split(",")

        variable_1 = int(list[0])
        variable_2 = int(list[1])

    except ValueError:
        print("Wrong input, try one more time")
        continue

    except IndexError:
        print("Wrong input, try one more time")
        continue

    sum = variable_1 + variable_2
    minus = variable_1 - variable_2
    multiplication = variable_1 * variable_2

    print(""
          "")
    time.sleep(1)
    print("The result of adding your numbers is: ", sum)
    time.sleep(1)
    print("If we subtract", variable_2, "from", variable_1, "we will get: ", minus)
    time.sleep(1)
    print("If we multiplies yours two numbers we will rceive: ", multiplication)
    print(""
          "")
    time.sleep(2)
    print("What a miracle to use a computer for calculations, isn't it?")
    print(""
          "")
    time.sleep(2)

    command = input("If you want to close press q, if you want to choose two new numbers press t and confirm by pressing enter: ")

    if command == "q":
        break

    elif command =="t":
        continue
