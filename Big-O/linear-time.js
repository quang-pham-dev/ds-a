// O(n): Linear time; the execution time increases linearly with the size of the input.

const myFriends = ["quang", "thu", "nguyen", "toan"];
const findFriend = (friend) => {
  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i] === friend) {
      console.log(`Found ${friend}`);
    }
  }
};

findFriend("thu"); // O(n)

// O(n) is the worst time complexity because the execution time increases linearly with the size of the input.

const searchFriend = (friend) => {
  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i] === friend) {
      console.log(`Found ${friend}`);
    }
  }

  for (let j = 0; j < myFriends.length; j++) {
    if (myFriends[j] === friend) {
      console.log(`Found ${friend}`);
    }
  }

  // n + n = 2n -> O(2n)
  // Drop the constant so it becomes O(n)
};

searchFriend("quang");
