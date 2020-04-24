//Variables
var tweetList = document.getElementById("tweet-list");

// Event Listeners
eventListeners();

function eventListeners() {
  // Form submission
  document.querySelector("#form").addEventListener("submit", newTweet);

  //Event listener to remove tweets
  tweetList.addEventListener("click", removeTweet);
}

// Functions

function newTweet(e) {
  e.preventDefault(); // Prevents what ever it is from doing it's default behaviour

  // Read the textarea value
  var tweet = document.getElementById("tweet").value; // the value gives the actual content (like getting the text from a link in bs4)

  //console.log(tweet);

  // Create an <li> element
  var list = document.createElement("li");
  // These two are used to add text to an element
  list.textContent = tweet;
  //list.innerHTML = tweet;

  // Create the remove button
  var removeBtn = document.createElement("a");
  removeBtn.classList = "remove-tweet";
  removeBtn.textContent = "X";

  // Add to the list
  tweetList.appendChild(list);

  // Add the remove button to each tweet
  list.appendChild(removeBtn);

  //Add to local storage
  tweetSave(tweet);

  this.reset();
}

function removeTweet(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove(); // Removes saved tweet by going one up and deleting the list tag(element)
  }

  // Remove from storage
  removeTweetLocalStorage(tweet);
}

// Saves tweets to local storage
function tweetSave(tweet) {
  var tweets = getTweetsFromLocalStorage();

  //Add the tweet/s to the array(list)
  tweets.push(tweet);

  // Convert tweet array into string
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function getTweetsFromLocalStorage() {
  var tweets;
  var tweetLS = localStorage.getItem("tweets");
  // Get tweets if value = null(0) then create empty array(list)
  if (tweetLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetLS);
  }
  return tweets;
}

function removeTweetLocalStorage(tweet) {
  var tweets = getTweetsFromLocalStorage();

  // Remove the x from the tweet
  var tweetDelete = tweet.substring(0, tweet.length - 1);

  // Loop through the tweets delelt applicable one
  tweets.forEach(function(tweetLS, index) {
    if (tweetDelete === tweetLS) {
      tweets.splice(index, 1);
    }
  });

  //Save the data
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
