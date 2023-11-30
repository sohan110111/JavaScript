// Permutation with combination
function combination(array = [], text = "") {
  let  sum = 0;
    if (array.length !== 0) {

        for (let i = 0; i < array.length; ++i) {
            const newArray = array.filter((element, index) => index !== i)

            text += array[i];
          sum += array[i];
          if (sum == 0) {
            console.log("pass");
          }
            if (array.length === 1) {
                console.log(text)
            }

            combination(newArray, text)
            text = text.slice(0, -1)
        }
    }
}


const array = [1, -2, 1]

combination(array)
