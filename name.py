import time

while True:
    name = str(input("Hello, please tell me what is your name: "))
    if name == len(name) * name[0]:
        print("It is too short, please insert it one more time")
    else: break

print("Hello,", name, "it is nice to meet you darling!")
timer = time.time()
time.sleep(1)
print(name, "I hope we will get know each other better very soon.")
time.sleep(3)
quit()
