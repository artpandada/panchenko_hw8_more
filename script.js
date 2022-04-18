'use strict';


const array = [1, 2, 3, 4, 5, 3, 1, 13, 2];

// вариант с циклом

function deleteSameElem(array) {
    const result = array.slice();

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] === array[j]) {
                result.splice(j, 1);

            }

        }

    }

    return result;

}


// вариант с использованием методов

function deleteSameElem(array) {
    const result = [];

    array.forEach(function (elem) {

        if (!result.includes(elem)) {
            result.push(elem)
        }

    })

    return result;

}


