import datetime

print("Witaj w moim programie, w którym demaskujemy ile wiosen ci pykło!")

while True:
    try:
        birth = int(input("Proszę podaj rok swoich urodzin: "))
    except ValueError:
        print("Niepoprawny format")
        continue

    now = datetime.datetime.now()
    year_str = (now.strftime("%Y"))
    year_int = int(year_str)

    if birth < 1910:
        print("Daj spokoj! Ludzie nie zyja tak dlugo, prosze wpisz poprawna date tym razem:")
    elif birth > year_int:
        print("Dziecko przyszłości !")
    else:
        age = year_int - birth
        break

print("Świetnie staruchu! Teraz wiem o Tobie całkiem sporo. Masz", age, "wiosen.")
print("Przerażające że tyle o Tobie wiem, prawda? Do zobaczenia wkrótce!")

