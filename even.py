x = int(input("Please insert any integer number, and I will tell you if it is even: "))
rest = x % 2
if rest == 0:
    print("Your number is even")
if rest != 0:
    print(x, "is not even!")