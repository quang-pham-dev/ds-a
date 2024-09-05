// Data Structure 👇
const myFriends = ["quang", "thu", "nguyen", "toan"];

// Algorithm for finding a specific friend
const findFriend = (friends, friendName) => {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i] === friendName) {
      console.log(`Found ${friendName}`);
    }
  }
};

findFriend(myFriends, "quang"); // O(n) time complexity as it iterates once through the array
// ❓what happen if we have 1000 friends?
