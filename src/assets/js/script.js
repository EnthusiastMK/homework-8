document.addEventListener("DOMContentLoaded", (event) => {

    // Underline the active link in the header

    const menuHomeActive = document.getElementById('menuHome');
    const menuCompanyActive = document.getElementById('menuCompany');
    const menuFeaturesActive = document.getElementById('menuFeatures');

    const handleMenuHome = () => {
        menuHomeActive.classList.add('menu-item--active');
        menuCompanyActive.classList.remove('menu-item--active');
        menuFeaturesActive.classList.remove('menu-item--active');
    };
    
    const handleMenuCompany = () => {
        menuCompanyActive.classList.add('menu-item--active');
        menuFeaturesActive.classList.remove('menu-item--active');
        menuHomeActive.classList.remove('menu-item--active');
    };

    const handleMenuFeatures = () => {
        menuFeaturesActive.classList.add('menu-item--active');
        menuHomeActive.classList.remove('menu-item--active');
        menuCompanyActive.classList.remove('menu-item--active');
    };

    menuHomeActive.addEventListener('click', handleMenuHome);
    menuCompanyActive.addEventListener('click', handleMenuCompany);
    menuFeaturesActive.addEventListener('click', handleMenuFeatures);

    // Burger Menu

    const burgerMenuBtn = document.getElementById('burgerMenuBtn');
    const headerBurgerList = document.getElementById('headerBurgerList');
    const closeBurgerMenu = document.getElementById('closeBurgerMenu');

    const handleBurgerMenuOpen = () => {
        headerBurgerList.style.display = 'block';
    };

    const handleBurgerMenuClose = () => {
        headerBurgerList.style.display = 'none';
    };

    burgerMenuBtn.addEventListener('click', handleBurgerMenuOpen);
    closeBurgerMenu.addEventListener('click', handleBurgerMenuClose);

    // Sent Form Submit

    const exploreEmail = document.getElementById('exploreEmail');
    const exploreForm = document.querySelector('.explore__form');
    
    const handleSubmitEmail = (e) => {
        e.preventDefault();
        console.log('Email:', exploreEmail.value);
    };

    exploreForm.addEventListener('submit', handleSubmitEmail);
    
    // Everyone click show anything in console.log 

    document.getElementById('headerAuthBtn').addEventListener('click', () => console.log('Sign In'));
    document.getElementById('heroBtnGet').addEventListener('click', () => console.log('Get It Now'));
    document.getElementById('heroBtnExplore').addEventListener('click', () => console.log('Explore Device'));
    document.getElementById('menuHome').addEventListener('click', () => console.log('Home'));
    document.getElementById('menuCompany').addEventListener('click', () => console.log('Company'));
    document.getElementById('menuFeatures').addEventListener('click', () => console.log('Features'));
    document.getElementById('contentBtn').addEventListener('click', () => console.log('Get It Now'));
    document.getElementById('exploreFormBtn').addEventListener('click', () => console.log('Start'));


    // Close modal
    const overlay = document.getElementById('overlay');
    const closeSignIn = document.getElementById('closeSignIn');
    const closeAddingCard = document.getElementById('closeAddingCard');
    const closeUserMenu = document.getElementById('closeUserMenu');
    const addingCardDialog = document.getElementById('addingCardDialog');

    const handleCloseDialog = (dialogName) => {
        document.getElementById(dialogName).style.display = 'none';
        overlay.style.display = 'none';
    };

    closeSignIn.addEventListener("click", handleCloseDialog.bind(event, 'signInModal'));
    closeAddingCard.addEventListener("click", handleCloseDialog.bind(event, 'addingCardDialog'));
    closeUserMenu.addEventListener("click", handleCloseDialog.bind(event, 'authedUserMenu'));
    overlay.addEventListener("click", handleCloseDialog.bind(event, 'signInModal'));
    overlay.addEventListener("click", handleCloseDialog.bind(event, 'addingCardDialog'));
    overlay.addEventListener("click", handleCloseDialog.bind(event, 'authedUserMenu'));

    // SignIn Modal
    const signInForm = document.getElementById('signInForm');
    const signInUser = document.getElementById('signInUser');
    const signInPassword = document.getElementById('signInPassword');
    
    const headerAuthBtn = document.getElementById('headerAuthBtn');

    let userDataSignIn = '';

    const handleInputChangeSignIn = (e) => {
        userDataSignIn = { ...userDataSignIn, [e.target.name]: e.target.value };
    };

    signInUser.addEventListener("change", handleInputChangeSignIn);
    signInPassword.addEventListener("change", handleInputChangeSignIn);

    const handleDialogSignIn = (e) => {
        e.preventDefault();
        console.log('email/username and pass = ', { userDataSignIn });
        handleCloseDialog('signInModal');
    };

    signInForm.addEventListener("submit", handleDialogSignIn);

    // LocalStorage User and Email
    
    const submitSignIn = document.getElementById('submitSignIn');
    const headerUser = document.getElementById('headerUser');

    const handleSignInFormBtn = () => {
        localStorage.setItem("user data:", JSON.stringify({
            email: signInUser.value,
            password: signInPassword.value
        }));
    };

    let user = JSON.parse(localStorage.getItem("user data:") || null);
    if (user != null) {
        headerUser.style.display = "block";
        headerAuthBtn.style.display = "none";
    }
    console.log(localStorage.getItem("user"));

    submitSignIn.addEventListener("click", handleSignInFormBtn);

    // Addincard Modal
    const addincardForm = document.getElementById('addincardForm');
    const addincardName = document.getElementById('addincardName');
    const addincardDescr = document.getElementById('addincardDescr');
    const addincardImage = document.getElementById('addincardImage');
    
    let userDataAddingCard = '';

    const handleInputChangeAddingCard = (e) => {
        userDataAddingCard = { ...userDataAddingCard, [e.target.name]: e.target.value };
    };

    addincardName.addEventListener("change", handleInputChangeAddingCard);
    addincardDescr.addEventListener("change", handleInputChangeAddingCard);
    addincardImage.addEventListener("change", handleInputChangeAddingCard);

    const handleDialogAddingCard = (e) => {
        e.preventDefault();
        let dateCreateCard = new Date().getTime();
        const cartData = { ...userDataAddingCard, dateCreateCard };
        console.log('name, description, image name and date = ', cartData);
        handleCloseDialog('addingCardDialog'); 
    };

    addincardForm.addEventListener("submit", handleDialogAddingCard);

    // Show Modal
    
    const heroBtnGet = document.getElementById('heroBtnGet');
    const contentBtn = document.getElementById('contentBtn');

    const handleOpenDialog = (dialogName) => {
        document.getElementById(dialogName).style.display = 'block';
        overlay.style.display = 'block';
    };
    
    const handeleNewCard = () => {
        if (headerUser.style.display != "block") {
            addingCardDialog.style.display = "none";
            overlay.style.display = "none";

            alert("Sign in, please");
        } else {
            addingCardDialog.style.display = "block";
            overlay.style.display = "block";
        }

    };
  

    // heroBtnAddNewCard.addEventListener("click", handeleNewCard);
    // userMenuAddNewCard.addEventListener("click", handeleNewCard);
    // burgerAddNewCard.addEventListener("click", handeleNewCard);

    headerAuthBtn.addEventListener('click', handleOpenDialog.bind(event, 'signInModal'));
    heroBtnGet.addEventListener('click', handeleNewCard);
    contentBtn.addEventListener('click', handeleNewCard);
    
    
    // After click SignIn show userPhoto

    const authedUserMenu = document.getElementById('authedUserMenu');
    const chevronUp = document.getElementById('chevronUp');

    const handleAuthUser = () => {
        headerUser.style.display = 'block';
        headerAuthBtn.style.display = 'none';
    };

    submitSignIn.addEventListener('click', handleAuthUser);


    const handleShowUserMenu = () => {
        authedUserMenu.style.display = 'block';
        overlay.style.display = 'block';
    };

    const handleCloseUserMenu = () => {
        authedUserMenu.style.display = 'none';
        overlay.style.display = 'none';
    };

    headerUser.addEventListener('click', handleShowUserMenu);
    chevronUp.addEventListener('click', handleCloseUserMenu);

    // JS Dynamic Cards
    const generateSets = (defHeadSets = CARDS) => {
        const setsDiv = document.createElement("div");
        setsDiv.classList.add("listitems");

        defHeadSets.forEach((article) => {
            const setHTML = `
                <li class="listitems__item">
                    <div class="item__details">
                        <img src="./src/assets/images/ListItems/${article.img}" alt="${article.imgAlt}" class="item__photo">
                        <div class="item__text">
                            <h6 class="item__name">${article.title}</h6>
                            <p class="item__descr">${article.caption}</p>      
                        </div>
                    </div>
                </li>`;
            setsDiv.innerHTML += setHTML;
        });
        headSets.appendChild(setsDiv);
    };
    generateSets();

    // JS Dynamic Feedback
    const generateCards = () => {
        const cardsDiv = document.createElement("div");
        cardsDiv.classList.add("clients__review");
    
        CLIENTS.forEach((article) => {
        const cardHTML = `
            <li class="review-info">
            <p class="review-header"><span>starstar</span>star</p>
            <p class="review-text">“${article.caption}”</p>
            <div class="review-contacts">
                <img src="./src/assets/images/Clients/${article.img}" alt="${article.imgAlt}" class="review-contacts__photo">
                <div class="review-contacts__details">
                <p class="review-contacts__name">${article.userName}</p>
                <address class="review-contacts__address">${article.address}</address>
                </div>
            </div>
            </li>`;
            cardsDiv.innerHTML += cardHTML;
        });
        clientsReview.appendChild(cardsDiv);
    };

    generateCards();
    // Select sort show in console.log
    
    // const handleSortSelectChange = (e) => {
    //     let sortType = e.target.value;
    //     console.log(sortType);
    // };

    const sortSelect = document.getElementById("sortSelect");

    const handleSortSelectChange = (e) => {
        headSets.innerHTML = "";

        switch (e.target.value) {
            case "newFirst":
                const sortedNewFirst = CARDS.sort((a, b) => a.Date - b.Date);
                generateSets(sortedNewFirst);
                break;
            case "newLast":
                const sortedNewLast = CARDS.sort((a, b) => b.Date - a.Date);
                generateSets(sortedNewLast);
                break;
            default:
                generateSets(CARDS);
                break;
        }
    };

    sortSelect.addEventListener('change', handleSortSelectChange);


});