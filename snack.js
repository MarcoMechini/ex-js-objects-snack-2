// question 1 

// hamburger.name = 'Double Cheese Burger'; weight = 500
// secondBurger.name = 'Double Cheese Burger'; weight = 500
// gli oggetti creati in memoria sono solo 1 che puntano alla stessa cella di memoria


// question 2 CORRETTO

// hamburger.ingredients = 'Salad'
// secondBurger.ingredients = 'Salad'
// sono stati creati 3 oggetti PERCHE HANNO L'ARRAY IN COMUNE


// question 3 CORRETTO

// sono stati creati 9 oggetti in memoria(3 secondBurger, 3 restaurant, 3 maker)


// question 4

// per clonare l'oggetti chef il miglior metodo è spread operator perchè fa una copia superficiale e si porta dietro le funzioni

// mentre per clonare restaurant il migliore è structuredClone per mantenere il frmato della data


// question 5 CORRETTO

// in memoria sono salvati 5 oggetti

// chef Hyur
// chef Hyur

// Hyur's II
// Hyur's II

// question 6

// il miglior metodo è fare spread operator su chef, restaurant e Address, in modo da non avere il riferiemnto in memoria e poter utilizzare le funzioni


// question 7

function deepCopy(oby) {
    if (typrof obj !== 'object') {
        return obj
    }
    const copy = {}
    for (const key in obj) {
        const value = obj[key];
        if (typeof value !== 'object') {
            copi[key] = value;
        } else {
            copy[key] = deepCopy(value);
        }
    }
    return copy
}