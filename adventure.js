let entree = prompt("Hi, welcome to McDonald's. Do you want the a burger or chicken?").toLowerCase();
let side
let drink

if (entree === "burger") {
    alert("Alright one burger coming up!")
    side = prompt("Would you like fries or apple slices on the side?").toLowerCase()
    if (side === "fries") {
        alert("I knew you were already going to pick that! Fries it is.")
        drink = prompt("What's the bev? Apple or orange juice?").toLowerCase()
        if (drink === "apple" || drink === "apple juice") {
            alert("Orange juice is better, but at least you're not drinking soda. Your order is a burger, fries, and apple juice! The end.")
        } else if (drink === "orange" || drink === "orange juice") {
            alert("Great choice!, orange juice is better than apple for sure. Your order is a burger, fries, and orange juice! The end.")
        } else {
            alert("Sorry we don't serve that here. Bye.")
        }
    } else if (side === "apples" || side === "apple slices") {
        alert("Ewww apple slices, but okay.")
        drink = prompt("What's the bev? Apple or orange juice?").toLowerCase()
        if (drink === "apple" || drink === "apple juice") {
            alert("Orange juice is better, but at least you're not drinking soda. Your order is a burger, apple slices, and apple juice! The end.")
        } else if (drink === "orange" || drink === "orange juice") {
            alert("Great choice! Orange juice is better than apple for sure. Your order is a burger, apple slices, and orange juice! The end.")
        } else {
            alert("Sorry we don't serve that here. Bye.")
        }
    } else {
        alert("Sorry we don't serve that here. Bye.")
    }
} else if (entree === "chicken") {
    alert("Chicken sandwich is the wave nowadays. Good choice!")
    side = prompt("Would you like fries or apple slices on the side?").toLowerCase()
    if (side === "fries") {
        alert("I knew you were already going to pick that! Fries it is.")
        drink = prompt("What's the bev? Apple or orange juice?").toLowerCase()
        if (drink === "apple" || drink === "apple juice") {
            alert("Orange juice is better, but at least you're not drinking soda. Your order is a chicken sandwich, fries, and apple juice! The end.")
        } else if (drink === "orange" || drink === "orange juice") {
            alert("Great choice! Orange juice is better than apple for sure. Your order is a chicken sandwich, fries, and orange juice! Your order is also free because you picked the best options! Congrats! The end.")
        } else {
            alert("Sorry we don't serve that here. Bye.")
        }
    } else if (side === "apples" || side === "apple slices") {
        alert("Ewww apple slices, but okay.")
        drink = prompt("What's the bev? Apple or orange juice?").toLowerCase()
        if (drink === "apple" || drink === "apple juice") {
            alert("Orange juice is better, but at least you're not drinking soda. Your order is a chicken sandwich, apple slices, and apple juice! The end.")
        } else if (drink === "orange" || drink === "orange juice") {
            alert("Great choice again! Orange juice is better than apple for sure. Your order is a chicken sandwich, apple slices, and orange juice! The end.")
        } else {
            alert("Sorry we don't serve that here. Bye.")
        }
    } else {
        alert("Sorry we don't serve that here. Bye.")
    }
} else {
    alert("Sorry we don't serve that here. Bye.")
}