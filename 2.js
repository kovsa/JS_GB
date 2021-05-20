//1. Дан код:
var a = 1, b = 1, c, d;
	c = ++a; alert(c);           // 2
	d = b++; alert(d);           // 1
	c = (2+ ++a); alert(c);      // 5
	d = (2+ b++); alert(d);      // 4
	alert(a);                    // 3
	alert(b);                    // 3

// В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование. В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.

//2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);
alert(x);
// x=5

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/
var a = 2;
var b = 2;

    if (a >= 0 & b >= 0) {
        alert("Разность: " + (a - b))
    } else if (a < 0 & b < 0) {
        alert("Произведение: " + (a * b))
    } else {
        alert("Сумма: " + (a + b))
    }
//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
var a =10;
    switch (a) {
        case 1:
            alert(a);
            a = ++a;
        case 2:
            alert(a);
            a += 1;
        case 3:
           alert(a);
            a += 1;
        case 4:
            alert(a);
            a += 1;
        case 5:
            alert(a);
            a += 1;
        case 6:
            alert(a);
            a += 1;
        case 7:
            alert(a);
            a += 1;
        case 8:
            alert(a);
            a += 1;
        case 9:
            alert(a);
            a += 1;
        case 10:
            alert(a);
            a += 1;
        case 11:
            alert(a);
            a += 1;
        case 12:
            alert(a);
            a += 1;
        case 13:
            alert(a);
            a += 1;
        case 14:
            alert(a);
            a += 1;
        case 15:
            alert(a);
            break;
    }
    
//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
  function sum(a, b) {
        return a + b
    }
    
    function dif(a, b) {
        return a - b
    }

    function mult(a, b) {
        return a * b
    }

    function div(a, b) {
        return a / b
    }

    function enter(a, b, action) {
        switch (action) {
            case '+':
                return sum(a, b);
            case '-':
                return dif(a, b);
            case '*':
                return mult(a, b);
            case '/':
                return div(a, b);
        }
    }

    let num1 = parseInt(prompt("Введите первое число: "))
    let num2 = parseInt(prompt("Введите второе число: "))
    let operator = prompt("Введите оператор (+, -, *, /):")

    alert(enter(num1, num2, operator))

//7. *Сравнить null и 0. Попробуйте объяснить результат.
// все сложно )) прочитал тут -->> )) https://habr.com/ru/company/ruvds/blog/337732/






    