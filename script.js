// Constants
const STATE_IMAGE_SELECTOR = "#state-image";
const GUESS_INPUT_SELECTOR = "#guess-input";
const FEEDBACK_SELECTOR = "#feedback";
const FUN_FACT_SELECTOR = "#fun-fact";
const SCORE_DISPLAY_SELECTOR = "#score";
const HIGHSCORE_DISPLAY_SELECTOR = "#highscore";
const SUBMIT_BUTTON_SELECTOR = "#submit";
const BASE_IMAGE_PATH = "state-outline/";
const BASE_ICONIC_PIC_PATH = "state-iconic-pic/";

// Game object to encapsulate state and behavior
const game = {
    states: [
        { name: "Alabama", image: "N7MbfN9mwJd9.png", iconic_pic:"Edmund Pettus Bridge.jpg", capital:"Montgomery", population:"5,024,279", fun_fact: "Alabama is the only state to have a woodpecker as its state bird, also known as the northern flicker." },
        { name: "Alaska", image: "SxQJWUfz4P7Z.png",iconic_pic:"Denali, Denali National Park.jpg",capital:"Juneau", population:"733,391", fun_fact: "Alaska has more than 100 volcanoes and volcanic fields." },
        { name: "Arizona", image: "6mCmwDnXfp9B.png",iconic_pic:"Monument Valley.jpg",capital:"Phoenix", population:"7,151,502", fun_fact: "Arizona is home to the Grand Canyon, one of the Seven Natural Wonders of the World, which is over 277 miles long." },
        { name: "Arkansas", image: "HDskeGe2c4DX.png",iconic_pic:"Crystal Bridges Museum of American Art.jpg",capital:"Little Rock", population:"3,011,524", fun_fact: "Arkansas is the only state where diamonds are found naturally and open to the public at the Crater of Diamonds State Park." },
        { name: "California", image: "YaSsDrzcB996.png",iconic_pic:"Golden State Bridge.jpg",capital:"Sacramento", population:"39,538,223", fun_fact: "California is the birthplace of the Internet, with Silicon Valley being home to many of the world’s largest tech companies." },
        { name: "Colorado", image: "wLbHWAjtJC8E.png",iconic_pic:"Cliff Palace, Mesa Verde National Park.jpg",capital:"Denver", population:"5,773,714", fun_fact: "Colorado is home to the highest paved road in North America, the Mount Evans Scenic Byway, reaching an elevation of 14,130 feet." },
        { name: "Connecticut", image: "9YVGZzsskLUJ.png",iconic_pic:"Yale University.jpg",capital:"Hartford", population:"3,605,944", fun_fact: "Connecticut was the first state to issue a state constitution, adopted in 1639." },
        { name: "Delaware", image: "nDmTXcUnEzs5.png",iconic_pic:"Cape Henlopen State Park, Lewes.jpg",capital:"Dover", population:"989,948", fun_fact: "Delaware was the first state to ratify the U.S. Constitution, doing so on December 7, 1787." },
        { name: "Florida", image: "xu9zMcsbqP6L.png",iconic_pic:"Cinderella Castle, Walt Disney World Resort.jpg",capital:"Tallahassee", population:"21,538,187", fun_fact: "Florida is the only state that has both a tropical and temperate climate, making it one of the most biodiverse states in the U.S." },
        { name: "Georgia", image: "5eSMxv7JmW7W.png",iconic_pic:"Birth Home, Martin Luther King Jr.jpg",capital:"Atlanta", population:"10,711,908", fun_fact: "Georgia is the birthplace of Coca-Cola, which was invented in Atlanta by Dr. John Stith Pemberton in 1886." },
        { name: "Hawaii", image: "qdNx8aW2mQu9.png",iconic_pic:"USS Arizona Memorial, Pearl Harbor.jpg",capital:"Honolulu", population:"1,455,271", fun_fact: "Hawaii is the only U.S. state made up entirely of islands, and it is the only state to be located in the Pacific Ocean." },
        { name: "Idaho", image: "C3KdFYad9q8S.png",iconic_pic:"Shoshone Falls, Twin Falls.jpg",capital:"Boise", population:"1,839,106", fun_fact: "Idaho is known for its potatoes, producing about one-third of the potatoes grown in the U.S. annually." },
        { name: "Illinois", image: "hjdym7TuGxN2.png",iconic_pic:"Cloud Gate.jpg",capital:"Springfield", population:"12,812,508", fun_fact: "Illinois is the birthplace of the modern skyscraper, with the first steel-framed skyscraper built in Chicago in 1885." },
        { name: "Indiana", image: "JJHfxzeg8qam.png",iconic_pic:"Monument Circle.jpg",capital:"Indianapolis", population:"6,785,528", fun_fact: "Indiana is home to the Indy 500, the world’s largest single-day sporting event, which has been held annually since 1911." },
        { name: "Iowa", image: "Q9Pb86pByD7Q.png",iconic_pic:"Birthplace Cottage, Herbert Hoover.jpg",capital:"Des Moines", population:"3,190,369", fun_fact: "Iowa is the nation’s leading producer of corn, providing over a quarter of the total U.S. supply." },
        { name: "Kansas", image: "9qvPYkc2AbMy.png",iconic_pic:"The Keeper of the Plains.jpg",capital:"Topeka", population:"2,937,880", fun_fact: "Kansas is known as the 'Sunflower State,' and the sunflower is its official state flower." },
        { name: "Kentucky", image: "XGyekVquaCL7.png",iconic_pic:"Churchhill Derby.jpg",capital:"Frankfort", population:"4,505,836", fun_fact: "Kentucky is famous for the Kentucky Derby, the longest-running horse race in the U.S., held annually since 1875." },
        { name: "Louisiana", image: "YcWZuJDWvQDy.png",iconic_pic:"St. Louis Cathedral.jpg",capital:"Baton Rouge", population:"4,657,757", fun_fact: "Louisiana is home to the longest continuous bridge over water in the world, the Lake Pontchartrain Causeway." },
        { name: "Maine", image: "5T6eg8GxVWVU.png",iconic_pic:"Bass Harbor Head Lighthouse.jpg",capital:"Augusta", population:"1,362,359", fun_fact: "Maine is known for its lobsters, and it produces around 90% of the lobster catch in the United States." },
        { name: "Maryland", image: "mWqDen3bTgX6.png",iconic_pic:"Fort McHenry.jpg",capital:"Annapolis", population:"6,177,224", fun_fact: "Maryland is the birthplace of the U.S. national anthem, 'The Star-Spangled Banner,' written by Francis Scott Key in 1814." },
        { name: "Massachusetts", image: "6hds6D9Zhdht.png",iconic_pic:"Faneuil Hall Marketplace.jpg",capital:"Boston", population:"7,029,917", fun_fact: "Massachusetts is the site of the first American lighthouse, which was built in the Boston Harbor in 1716." },
        { name: "Michigan", image: "2fBnSqEjfftq.png",iconic_pic:"Henry Ford Museum.jpg",capital:"Lansing", population:"10,077,331", fun_fact: "Michigan is the only state to consist of two peninsulas, the Upper and Lower Peninsulas, which are connected by the Mackinac Bridge." },
        { name: "Minnesota", image: "fY393xKKbnRf.png",iconic_pic:"Spoonbridge and Cherry.jpg",capital:"Saint Paul", population:"5,706,494", fun_fact: "Minnesota is known as the 'Land of 10,000 Lakes,' though it actually has more than 11,000 lakes." },
        { name: "Mississippi", image: "4MCAjnz24UFu.png",iconic_pic:"Elvis Presley Birthplace.jpg",capital:"Jackson", population:"2,961,279", fun_fact: "Mississippi is the birthplace of blues music, with famous musicians like B.B. King and Robert Johnson hailing from the state." },
        { name: "Missouri", image: "5z8tk7sP7jBs.png",iconic_pic:"Gateway Arch.jpg",capital:"Jefferson City", population:"6,154,913", fun_fact: "Missouri is known as the 'Show-Me State,' which reflects its residents’ reputation for being skeptical and wanting proof before believing something." },
        { name: "Montana", image: "L8seBe64Wp4U.png",iconic_pic:"Lake McDonald, Glacier National Park.jpg",capital:"Helena", population:"1,084,225", fun_fact: "Montana has the largest grizzly bear population in the Lower 48 states, with many living in the Rocky Mountains." },
        { name: "Nebraska", image: "FHvWCB7N8qLk.png",iconic_pic:"Chimney Rock.jpg",capital:"lincoln", population:"1,961,504", fun_fact: "Nebraska is the only state with a unicameral (single-chamber) legislature, which was adopted in 1937." },
        { name: "Nevada", image: "dqUdjYqby9v2.png",iconic_pic:"Las Vegas Sign.jpg",capital:"Carson City", population:"3,104,614", fun_fact: "Nevada is home to the world’s largest gold-producing mine, the Carlin Trend, which produces millions of ounces of gold each year." },
        { name: "New Hampshire", image: "JmHuPD4Rwp7L.png",iconic_pic:"Mount Washington.jpg",capital:"Concord", population:"1,377,529", fun_fact: "New Hampshire is the first state to hold a presidential primary every four years, and it is the only state without a general sales tax." },
        { name: "New Jersey", image: "cVbEkbZ674mC.png",iconic_pic:"Lucy the Elephant.jpg",capital:"Trenton", population:"9,288,994", fun_fact: "New Jersey is the diner capital of the world, with over 500 diners in the state." },
        { name: "New Mexico", image: "NujywPHtnuPF.png",iconic_pic:"Big Room, Carlsbad Caverns National Park.jpg",capital:"Santa Fe", population:"2,117,522", fun_fact: "New Mexico is home to the famous Carlsbad Caverns, which contains over 119 caves, including one of the largest chambers in the world." },
        { name: "New York", image: "JRmC4xa83chu.png",iconic_pic:"Statue of Liberty.jpg",capital:"Albany", population:"20,201,249", fun_fact: "New York is home to the world-famous Statue of Liberty, a gift from France in 1886 symbolizing freedom and democracy." },
        { name: "North Carolina", image: "Kwqd5umLavbL.png",iconic_pic:"Biltmore Estate.jpg",capital:"Raleigh", population:"10,439,388", fun_fact: "North Carolina is the birthplace of flight, with the Wright brothers making their first successful powered flight at Kitty Hawk in 1903." },
        { name: "North Dakota", image: "WfP8Vwhx4H2M.png",iconic_pic:"World's Largest Buffalo.jpg",capital:"Bismarck", population:"779,094", fun_fact: "North Dakota is home to the International Peace Garden, located on the border with Canada, symbolizing peace between the two nations." },
        { name: "Ohio", image: "TQMrJahBAfb5.png",iconic_pic:"Rock and Roll Hall of Fame.jpg",capital:"Columbus", population:"11,799,448", fun_fact: "Ohio is known as the 'Mother of Presidents,' being the birthplace of seven U.S. presidents, more than any other state." },
        { name: "Oklahoma", image: "sWfxCwXbMJPQ.png",iconic_pic:"Route 66 Museum.jpg",capital:"Oklahoma City", population:"3,959,353", fun_fact: "Oklahoma is the site of the 1930s Dust Bowl, a period of severe dust storms that devastated the region." },
        { name: "Oregon", image: "5kvtghAQF5z8.png",iconic_pic:"Crater Lake, Crater Lake National Park.jpg",capital:"Salem", population:"4,237,256", fun_fact: "Oregon was the first state to allow women the right to vote in 1912, ahead of the national suffrage movement." },
        { name: "Pennsylvania", image: "npUxwHUdScJ2.png",iconic_pic:"Independence Hall.jpg",capital:"Harrisburg", population:"13,002,700", fun_fact: "Pennsylvania is home to the Liberty Bell, an iconic symbol of American independence located in Philadelphia." },
        { name: "Rhode Island", image: "h9kQVqnTGFpL.png",iconic_pic:"The Breakers.jpg",capital:"Providence", population:"1,097,379", fun_fact: "Rhode Island is the smallest U.S. state by area but has the longest official name: 'The State of Rhode Island and Providence Plantations.'" },
        { name: "South Carolina", image: "4HbRWVppSMNY.png",iconic_pic:"Fort Sumter.jpg",capital:"Columbia", population:"5,118,425", fun_fact: "South Carolina was the first state to secede from the Union, leading to the start of the Civil War in 1861." },
        { name: "South Dakota", image: "QytdWUtmDYKQ.png",iconic_pic:"Mount Rushmore.jpg",capital:"Pierre", population:"886,667", fun_fact: "South Dakota is home to Mount Rushmore, where the faces of four U.S. presidents are carved into granite." },
        { name: "Tennessee", image: "zK6DKpqLBDZ9.png",iconic_pic:"Graceland, Memphis.jpg",capital:"Nashville", population:"6,910,840", fun_fact: "Tennessee is known for its music scene, particularly in Nashville, the 'Country Music Capital of the World.'" },
        { name: "Texas", image: "87C5Y9LGTQJs.png",iconic_pic:"The Alamo.jpg",capital:"Austin", population:"29,145,505", fun_fact: "Texas is the second-largest state in the U.S., both in size and population, and has its own power grid." },
        { name: "Utah", image: "X3zKrCtAyPAj.png",iconic_pic:"Delicate Arch, Arches National Park.jpg",capital:"Salt Lake City", population:"3,271,616", fun_fact: "Utah is home to the Great Salt Lake, the largest saltwater lake in the Western Hemisphere." },
        { name: "Vermont", image: "C3ExEbUmURvG.png",iconic_pic:"Stowe Community Church.jpg",capital:"Montpelier", population:"643,077", fun_fact: "Vermont is the leading producer of maple syrup in the United States, producing over 2 million gallons annually." },
        { name: "Virginia", image: "hsv8av3GTL4K.png",iconic_pic:"George Washington's Mount Vernon.jpg",capital:"Richmond", population:"8,631,393", fun_fact: "Virginia is the site of the first permanent English settlement in America, Jamestown, established in 1607." },
        { name: "Washington", image: "C5CdcVmPA3B2.png",iconic_pic:"Space Needle.jpg",capital:"Olympia", population:"7,705,281", fun_fact: "Washington is home to the largest volcano in North America, Mount Rainier, which stands at 14,411 feet." },
        { name: "West Virginia", image: "bUAnE5qCtzwt.png",iconic_pic:"New River George Bridge.jpg",capital:"Charleston", population:"1,793,716", fun_fact: "West Virginia is known for its Appalachian Mountains and is home to some of the oldest mountains in the world." },
        { name: "Wisconsin", image: "Xm6jDgYJck4Q.png",iconic_pic:"Milwaukee Art Museum.jpg",capital:"Madison", population:"5,893,718", fun_fact: "Wisconsin is famous for its cheese, producing more than 600 varieties of cheese, and is the nation's top cheese producer." },
        { name: "Wyoming", image: "BwaH2MbFmhWn.png",iconic_pic:"Devils Tower National Monument.jpg",capital:"Cheyenne", population:"576,851", fun_fact: "Wyoming is the least populous state in the U.S. and is home to the first national park in the world, Yellowstone National Park." }
    ],

    remainingStates: [],
    currentState: null,
    score: 0,
    highscore: localStorage.getItem("highscore") ? parseInt(localStorage.getItem("highscore")) : 0, // Initialize highscore from localStorage
    guessType: 'name',

    // Initialize the game
    init() {
        this.remainingStates = [...this.states]; // Copy initial states
        this.populateStateList();
        this.updateScoreDisplay();
        this.randomImage();
        this.updateHighscoreDisplay(); // Update highscore display when game starts
        this.addEventListeners();
    },

    // Populate datalist with state names
    populateStateList() {
        const datalist = document.querySelector("#guess-list");
        datalist.innerHTML = ''; // Clear existing options
        this.states.forEach(state => {
            const option = document.createElement("option");
            option.value = state.name;
            datalist.appendChild(option);
        });
    },

    // Select a random state and display its image
    randomImage() {
        if (this.remainingStates.length === 0) {
            this.remainingStates = [...this.states]; // Reset if no states are remaining
        }

        const randomIndex = Math.floor(Math.random() * this.remainingStates.length);
        this.currentState = this.remainingStates.splice(randomIndex, 1)[0]; // Remove selected state from pool

        
        if (this.guessType === 'iconic') {
            document.querySelector(STATE_IMAGE_SELECTOR).classList.remove('hidden');
            document.querySelector('#captial-image').textContent = '';
            document.querySelector(STATE_IMAGE_SELECTOR).src = `${BASE_ICONIC_PIC_PATH}${this.currentState.iconic_pic}`;
            document.querySelector("#iconic-description").textContent = `${this.currentState.iconic_pic}`.replace(".jpg", "");
        }
        else if (this.guessType === 'capital') {
            document.querySelector(STATE_IMAGE_SELECTOR).classList.add('hidden');
            document.querySelector("#iconic-description").textContent = '';
            document.querySelector('#captial-image').textContent = `${this.currentState.capital}`;
        }
        else {
            document.querySelector(STATE_IMAGE_SELECTOR).src = `${BASE_IMAGE_PATH}${this.currentState.image}`;
            document.querySelector(STATE_IMAGE_SELECTOR).classList.remove('hidden');
            document.querySelector("#iconic-description").textContent = '';
            document.querySelector('#captial-image').textContent = '';
        }

        // Reset UI: Hide the try-again button and fun fact box
        document.querySelector('#try-again-button').classList.add('hidden');
        document.querySelector('#fun-fact-box').classList.add('hidden');

        // Show submit section
        document.querySelector('#submit').classList.remove('hidden');
        document.querySelector('#guess-input').classList.remove('hidden');
    },

    // Check the user's guess
    checkGuess() {
        const userGuess = document.querySelector(GUESS_INPUT_SELECTOR).value.trim().toLowerCase();
        const feedback = document.querySelector(FEEDBACK_SELECTOR);
        // Get selected guess type
        const guessType = document.querySelector("#guess-type").value;

        let correctAnswer;
        switch (guessType) {
            case 'capital':
                correctAnswer = this.currentState.capital.toLowerCase();
                break;
            case 'iconic':
                correctAnswer = this.currentState.name.toLowerCase();
                break;
            default: // 'name'
                correctAnswer = this.currentState.name.toLowerCase();
                break;
        }

        // Invalid guess handling
        if (!userGuess || !this.isValidGuess(userGuess, guessType)) {
            alert("Please enter a valid guess.");
            return;
        }

        // Evaluate guess
        if (userGuess === correctAnswer) {
            feedback.textContent = "Correct!";
            this.score++;
            this.randomImage();
            // Hide try-again button and fun fact box if correct
            document.querySelector('#try-again-button').classList.add('hidden');
            document.querySelector('#fun-fact-box').classList.add('hidden');
        } else {
            if (guessType === 'capital') {
                feedback.innerHTML = `Wrong! It was <span class="correct-state"><strong>${this.currentState.capital}</strong></span>.`;
            }
            else {
                feedback.innerHTML = `Wrong! It was <span class="correct-state"><strong>${this.currentState.name}</strong></span>.`;
            }

            // Hide submit section and show try-again button
            document.querySelector('#submit').classList.add('hidden');
            document.querySelector('#guess-input').classList.add('hidden');
            document.querySelector('#try-again-button').classList.remove('hidden');

            // Show the fun fact box
            this.showFunFactBox();
        }

        this.checkHighScore();
        this.updateScoreDisplay();
        this.updateHighscoreDisplay(); // Update highscore display after every guess
        document.querySelector(GUESS_INPUT_SELECTOR).value = "";
    },

    // Update the score display
    updateScoreDisplay() {
        document.querySelector(SCORE_DISPLAY_SELECTOR).textContent = `Score: ${this.score}`;
    },

    // Update the highscore display
    updateHighscoreDisplay() {
        document.querySelector(HIGHSCORE_DISPLAY_SELECTOR).textContent = `Highscore: ${this.highscore}`;
    },

    checkHighScore() {
        if (this.score > this.highscore) {
            this.highscore = this.score;
            window.localStorage.setItem("highscore", this.highscore);
        }
    },

    // Validate the guess based on selected guess type (state, capital, or iconic pic)
    isValidGuess(guess, type) {    
        // If the guessType is 'capital', only accept capital names and not state names
        if (type === 'capital') {
            const validCapitals = this.states.map(state => state.capital.toLowerCase());
            return validCapitals.includes(guess);
        }

        if (type === 'name' || type === 'iconic') {
            const validStateNames = this.states.map(state => state.name.toLowerCase());
            return validStateNames.includes(guess);
        }
    },

    // Display the fun fact box when the guess is incorrect
    showFunFactBox() {
        const funFactBox = document.querySelector("#fun-fact-box");
        const stateCapital = document.querySelector("#state-capital");
        const statePopulation = document.querySelector("#state-population");
        const funFact = document.querySelector("#fun-fact");
        
        funFactBox.classList.remove('hidden'); // Remove hidden
        funFactBox.classList.add('opacity-100'); // Fade-in effect
        document.querySelector("#state-name").textContent = `${this.currentState.name}`;
        stateCapital.textContent = `Capital: ${this.currentState.capital}`;
        statePopulation.textContent = `Population: ${this.currentState.population}`;
        funFact.textContent = `Fun Fact: ${this.currentState.fun_fact}`;
    },


    // Reset the game state
    resetGame() {
        this.score = 0;
        this.updateScoreDisplay();
        this.updateHighscoreDisplay();
        this.remainingStates = [...this.states]; // Reset remaining states
        document.querySelector(GUESS_INPUT_SELECTOR).value = ""; // Clear Guess
        document.querySelector(FEEDBACK_SELECTOR).textContent = ""; // Clear feedback
        this.randomImage();

        // UI reset
        document.querySelector(GUESS_INPUT_SELECTOR).classList.remove('hidden');
        document.querySelector(SUBMIT_BUTTON_SELECTOR).classList.remove('hidden');
        document.querySelector("#fun-fact-box").classList.add('hidden'); // Hide the fun fact box
        document.querySelector('#try-again-button').classList.add('hidden');
    },

    // Add event listeners for user interactions
    addEventListeners() {
        document.querySelector(SUBMIT_BUTTON_SELECTOR).addEventListener("click", () => this.checkGuess());
        document.querySelector('#try-again-button').addEventListener("click", () => this.resetGame());
        document.querySelector(GUESS_INPUT_SELECTOR).addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.checkGuess();
            }
        });
        // Add event listener to the select dropdown to change guess type
        document.querySelector("#guess-type").addEventListener("change", function() {
            game.guessType = this.value; // Update the guessing type in the game object
            game.populateStateList();
            game.resetGame();
        });
    }
};

// Start the game
game.init();
