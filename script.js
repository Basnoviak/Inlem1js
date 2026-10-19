// min array
const members = [
    {
        id: 1,
        name: "Sid Wilson #0",
        instrument: "DJ",
        years: "1998-2026",
        joinYear: 1998,
        image: "sid-wilson-slipknot.jpeg",
        description: "Var bandets DJ fram till 2026, känd för sin crowd surfing och sin audition då han klättra upp på scen under en spelning och skallade Shawn Crahan 6 gånger för o visa att han var galen nog att vara med i bandet."
    },
    {
        id: 2,
        name: "Joey Jordison #1",
        instrument: "Trummor",
        years: "1995-2013",
        joinYear: 1995,
        image: "joey.webp",
        description: "Han var en av grundarna till bandet och spelade trummor fram till avhoppet i december 2013, gick bort 2021 av en sjukdom."
    },
    {
        id: 3,
        name: "Paul Gray #2",
        instrument: "Bass",
        years: "1995-2010",
        joinYear: 1995,
        image: "paul.webp",
        description: "En av grundarna till bandet och var bandets bassist, gick bort 2010 av en överdosering."
    },
    {
        id: 4,
        name: "Chris Fehn #3",
        instrument: "Slagverk/Bakgrundssång",
        years: "1998-2019",
        joinYear: 1998,
        image: "chris.jpg",
        description: "Han hade nummer tre och var bandets andra slagverkare samt bakgrundssångare. Han kallas oftast för \"Pinnochio\" eller \"Mr. Picklenose\" samt \"Dicknose\""
    },
    {
        id: 5,
        name: "Jim Root #4",
        instrument: "Gitarr",
        years: "1999-Present",
        joinYear: 1999,
        image: "Jim.jpg",
        description: "Jim Root ersatte Slipknots förre gitarrist Josh Brainard i februari 1999 under inspelningen av deras debutalbum Slipknot"
    },
    {
        id: 6,
        name: "Craig Jones #5",
        instrument: "Samplare/Keyboard",
        years: "1996-2023",
        joinYear: 1996,
        image: "craig.jpg",
        description: "Jones var medlem i bandet Slipknot mellan 1996 och 2023, och där var han den mest tillbakadragne bandmedlemmen. Han brukar aldrig ge intervjuer. Han har fått smeknamnet \"133\" efter hastigheten på den dator som han hade när han blev medlem i Slipknot."
    },
    {
        id: 7,
        name: "Shawn \"Clown\" Crahan #6",        
        instrument: "Slagverk/Bakgrundssång",
        years: "1995-Present",
        joinYear: 1995,
        image: "shawn.jpg",
        description: "Den äldste av medlemmarna i bandet Slipknot. Han har nummer sex och är den första slagverkaren. Shawn är den enda nuvarande medlemmen som varit med sedan bandet skapades."
    },
    {
        id: 8,
        name: "Mick Thomson #7",
        instrument: "Gitarr",
        years: "1996-Present",
        joinYear: 1996,
        image: "mick.jpg",
        description: "Han gick med i Slipknot 1996. Utanför Slipknot gav Thomson under en tid gitarrlektioner i \"Ye olde guitar shop\" och jobbar för gitarrtillverkaren Ibanez."
    },
    {
        id: 9,
        name: "Corey Taylor #8",
        instrument: "Sång",
        years: "1997-Present",
        joinYear: 1997,
        image: "corey.jpg",
        description: "Han är sångare i både Slipknot och bandet Stone Sour samt andra solo-projekt, han efterträdde Anders Colsefni i Slipknot 1997 innan deras debutalbum Slipknot."
    },
];
// lista med konstanta variabler som refererar till DOM-elementen
const memberList = document.getElementById("member-list");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const sortSelect = document.querySelector("#sort");
const gillaCount = document.getElementById("gilla-count");
const emptyMessage = document.querySelector("#empty-message");

const gilladeMembers = new Set();
// funktion som visar medlemmarna i katalogen 
function displayMembers(memberArray) {
    memberList.innerHTML = "";
// loopar igenom varje medlem i arrayen och skapar ett kort för varje medlem
    memberArray.forEach(function(member) {
        const card = document.createElement("article");
        card.classList.add("member-card");

        const poster = document.createElement("img");
        poster.classList.add("member-poster");
        poster.src = member.image;
        poster.alt = "Medlemsbild " + member.name;

        poster.onerror = function() {
            poster.style.display = "none";
        };

        const info = document.createElement("div");
        info.classList.add("member-info");

        const title = document.createElement("h3");
        title.textContent = member.name;

        const meta = document.createElement("div");
        meta.classList.add("member-meta");

        const year = document.createElement("span");
        year.textContent = member.years;

        const instrument = document.createElement("span");
        instrument.classList.add("instrument");
        instrument.textContent = member.instrument;

        meta.append(year, instrument);

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = member.description;

        const actions = document.createElement("div");
        actions.classList.add("card-actions");

        const gillaButton = document.createElement("button");
        gillaButton.classList.add("gilla-btn");

        // funktion som uppdaterar gilla-knappen baserat på om medlemmen är gillad eller inte
        function updateGillaButton() {
            const isGillad = gilladeMembers.has(member.id);
            gillaButton.textContent = isGillad
                ? "Gillad 🤘"
                : "Gilla medlem";

            gillaButton.classList.toggle("Gillad", isGillad);
            gillaButton.setAttribute("aria-pressed", isGillad);
        }
        // anropar funktionen för att uppdatera gilla-knappen
        updateGillaButton();

        gillaButton.addEventListener("click", function() {
            if (gilladeMembers.has(member.id)) {
                gilladeMembers.delete(member.id);
            } else {
                gilladeMembers.add(member.id);
            }

            updateGillaButton();
            updateGillaCount();
        });
        //knapp för att visa detaljer om medlemmen och lägger till en händelselyssnare som visar information om medlemmen när knappen klickas
        const detailsButton = document.createElement("button");
        detailsButton.classList.add("details-btn");
        detailsButton.textContent = "Detaljer";

        detailsButton.addEventListener("click", function() {
            alert(
                member.name + "\n\n" +
                "Instrument: " + member.instrument + "\n" +
                "År: " + member.years + "\n" +
                "Beskrivning: "+ member.description
            );
        });

        actions.append(gillaButton, detailsButton);
        info.append(title, meta, description, actions);
        card.append(poster, info);

        memberList.appendChild(card);
    });
    // visar ett meddelande om det inte finns några medlemmar att visa
    emptyMessage.hidden = memberArray.length > 0;
}
// funktion som uppdaterar antalet gillade medlemmar
function updateGillaCount() {
    gillaCount.textContent = "Gillade medlemmar: " + gilladeMembers.size;
}
// funktion som filtrerar medlemmarna baserat på söktext, kategori och sorteringsordning
function filterMembers() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;
    const sortOrder = sortSelect.value;

    let filteredMembers = members.filter(function(member) {
        const matchesSearch =
            member.name.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "Alla" ||
            member.instrument === selectedCategory;

        return matchesSearch && matchesCategory;
    });
// sorterar de filtrerade medlemmarna baserat på sorteringsordningen

    if (sortOrder === "newest") {
    filteredMembers.sort((a, b) => b.joinYear - a.joinYear);

} else if (sortOrder === "oldest") {
    filteredMembers.sort((a, b) => a.joinYear - b.joinYear);

} else {
    filteredMembers.sort((a, b) =>
        a.name.localeCompare(b.name, "sv")
    );
}

displayMembers(filteredMembers);
}

searchInput.addEventListener("input", filterMembers);
categorySelect.addEventListener("change", filterMembers);
sortSelect.addEventListener("change", filterMembers);

displayMembers(members);
updateGillaCount();
