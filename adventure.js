let first_answer = prompt("Hi, welcome to McDonald's. Do you want the a burger or chicken sandwich?").toLowerCase();
let second_answer
let third_answer

if (first_answer === "burger") {
    alert("Alright one burger coming up!")
    second_answer = prompt("Would you like fries or apple slices on the side?").toLowerCase()
    if (second_answer === "fries") {
        alert("I knew you were already going to pick that! Fries it is.")
        third_answer = prompt("What's the bev? Apple or orange juice?").toLowerCase()
        if (third_answer === "apple") {
            alert("Orange juice is better, but at least you're not drinking soda. Your order is a burger, fries, and apple juice! The end.")
        } else {
            alert("Great choice!, orange juice is better than apple for sure. Your order is a burger, fries, and orange juice! The end.")
        }
    } else {
        alert("Ewww apple slices, but okay.")
        third_answer = prompt("What's the bev? Apple or orange juice?").toLowerCase()
        if (third_answer === "apple") {
            alert("Orange juice is better, but at least you're not drinking soda. Your order is a burger, apple slices, and apple juice! The end.")
        } else {
            alert("Great choice! Orange juice is better than apple for sure. Your order is a burger, apple slices, and orange juice! The end.")
        }
    }
} else {
    alert("Chicken sandwich is the wave nowadays. Good choice!")
    second_answer = prompt("Would you like fries or apple slices on the side?").toLowerCase()
    if (second_answer === "fries") {
        alert("I knew you were already going to pick that! Fries it is.")
        third_answer = prompt("What's the bev? Apple or orange juice?").toLowerCase()
        if (third_answer === "apple") {
            alert("Orange juice is better, but at least you're not drinking soda. Your order is a chicken sandwich, fries, and apple juice! The end.")
        } else {
            alert("Great choice! Orange juice is better than apple for sure. Your order is a chicken sandwich, fries, and orange juice! Your order is also free because you picked the best options! Congrats! The end.")
        }
    } else {
        alert("Ewww apple slices, but okay.")
        third_answer = prompt("What's the bev? Apple or orange juice?").toLowerCase()
        if (third_answer === "apple") {
            alert("Orange juice is better, but at least you're not drinking soda. Your order is a chicken sandwich, apple slices, and apple juice! The end.")
        } else {
            alert("Great choice again! Orange juice is better than apple for sure. Your order is a chicken sandwich, apple slices, and orange juice! The end.")
        }
    }
}