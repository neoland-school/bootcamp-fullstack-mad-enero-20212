


for(i = 1 ; i <= 100 ; i++){
    if (i % 3 === 0) {
        document.write(i )
        document.write("Fizz " ) 
    }else if (i % 5 === 0) {
        document.write(i)
        document.write("Buzz ")
    }else if (i % 3 === 0 && i % 5 === 0){
        document.write(i)
        document.write("FizzBuzz")
    }

}