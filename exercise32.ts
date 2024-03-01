// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//Step 1 Array
const current_users: string[] = ["Kamran","Ashu","Farhan","Usman","Ameen"];

const new_users: string[] = ["ayesha","asad","Ameen","kamran","usama"];

//Step 2 function

function checkUserNames(current_users: string[], new_users: string[]): void
{
    //1st Step of function
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());

    //2nd Step of function

    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`Username "${newUser}" is already taken.Please enter a new username.`);
        } else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}

//console.log(current_users)

//Test the function

checkUserNames(current_users, new_users);