// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm0Tu51wf5hgKR74laEDpxtsAUsk1F27Y",
  authDomain: "pikadu-98f45.firebaseapp.com",
  databaseURL: "https://pikadu-98f45.firebaseio.com",
  projectId: "pikadu-98f45",
  storageBucket: "pikadu-98f45.appspot.com",
  messagingSenderId: "763309057600",
  appId: "1:763309057600:web:60718ca168a5d1330061a5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);
// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
 

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;
const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
console.log(`answer: ${passwordInput.value}`);                // TEST
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');
const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editBtn = document.querySelector('.edit-btn');
const editContainer = document.querySelector('.edit-container');
const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const userAvatarElem = document.querySelector('.user-avatar');
const postsWrapper = document.querySelector('.posts');
const buttonNewPost = document.querySelector('.button-new-post');
const addPostElem = document.querySelector('.add-post');



const listUsers = [
  {
    id: '01',
    email: 'maks@mail.ru',
    password: '12345',
    displayName: 'MaksJS', 
    photo: 'https://sun9-44.userapi.com/mTzxPk8I2YOdlBHpJWFh---lZfCNcStZIFA7_A/96tArb5Hu3s.jpg'   
  },

  { 
    id: '02',
    email: 'kate@mail.ru',
    password: '123456',
    displayName: 'KateKillMaks',    
  }
];

const setUsers = {
  user: null,  
  logIn(email, password, handler) { 
    if (!regExpValidEmail.test(email)) return alert('invalid email');
    const user = this.getUser(email);   
    if (user && user.password === password) {      
      this.authorizedUser(user);
      handler();
    } else {
      alert('Пользователь с такими данными не найден');
    }
  },

  logOut(handler) {
    console.log('logOut');
    this.user = null;
    handler();
  },

  signUp(email, password, handler) {
    if (!regExpValidEmail.test(email)) return alert('invalid email');

    if (!email.trim() || !password.trim()) {
      alert('Неправильно введены данные');
      return;
    }

    if ( !this.getUser(email) ) {
      const user = { email, password, displayName : email.substring(0, email.indexOf('@')) };
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert('Пользователь с таким email уже зарегистрирован');
    }
  },

  getUser(email) {
    return listUsers.find(item => item.email === email);
  },

  authorizedUser(user) {
    this.user = user;
  },

  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }

    handler();
  }
};

const setPosts = {
  allPosts: [
    {
      title: "Заголовок поста",
      text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!",
      tags: [ 'свежее', 'новое', 'горячее', 'мое', 'случайность' ],
      author: {displayName: 'Maks', photo: 'https://sun9-44.userapi.com/mTzxPk8I2YOdlBHpJWFh---lZfCNcStZIFA7_A/96tArb5Hu3s.jpg'},
      date: '11.11.20, 11:21:03',
      likes: 45,
      comments: 12,
    },
    {
      title: "Заголовок поста 2 ",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid eveniet officiis harum eum numquam, sunt dolore excepturi error veritatis vitae ut. Reiciendis asperiores, voluptatem eum ex et dolores modi corrupti ipsum a numquam nemo distinctio placeat omnis ab sunt aliquam vitae, possimus quam, reprehenderit rem beatae. Numquam, assumenda veritatis! Quisquam quasi architecto ut molestias excepturi voluptates sunt eligendi eum!",
      tags: [ 'свежее', 'новое', 'горячее', 'мое', 'случайность' ],
      author: {displayName: 'Kate', photo: 'https://i.pinimg.com/originals/81/a9/4a/81a94a7d0454d9ec58f1ea8db69d9b2e.jpg'},
      date: '04.11.20, 13:46:33',
      likes: 59,
      comments: 22,
    },
    {
      title: "Заголовок поста 3 ",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid eveniet officiis harum eum numquam, sunt dolore excepturi error veritatis vitae ut. Reiciendis asperiores, voluptatem eum ex et dolores modi corrupti ipsum a numquam nemo distinctio placeat omnis ab sunt aliquam vitae, possimus quam, reprehenderit rem beatae. Numquam, assumenda veritatis! Quisquam quasi architecto ut molestias excepturi voluptates sunt eligendi eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid eveniet officiis harum eum numquam, sunt dolore excepturi error veritatis vitae ut. Reiciendis asperiores, voluptatem eum ex et dolores modi corrupti ipsum a numquam nemo distinctio placeat omnis ab sunt aliquam vitae, possimus quam, reprehenderit rem beatae. Numquam, assumenda veritatis! Quisquam quasi architecto ut molestias excepturi voluptates sunt eligendi eum!",
      tags: [ 'свежее', 'новое', 'горячее', 'мое', 'случайность' ],
      author: {displayName: 'Maks', photo: ''},
      date: '04.11.20, 13:46:33',
      likes: 79,
      comments: 92,
    }
  ],

  addPost(title, text, tags, handler) {
    this.allPosts.unshift({
      title,
      text,
      tags: tags.split(',').map(item => item.trim()),
      author: {
        displayName: setUsers.user.displayName,
        photo: setUsers.user.photo,
      },
      date: new Date().toLocaleString(),
      likes: 0,
      comments: 0,
    })

    if (handler) {
      handler();
    };
  }
};

const showAddPost = () => {
  addPostElem.classList.add('visible');
  postsWrapper.classList.remove('visible');
}

const toggleAuthDom = function() {
  const user = setUsers.user;

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;    
    userAvatarElem.src = user.photo || userAvatarElem.src;
    buttonNewPost.classList.add('visible');
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none'; 
    buttonNewPost.classList.remove('visible');
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
  }
};

const showAllPosts = function () {
  
  let postsHTML = '';
  
  setPosts.allPosts.forEach( ({title, text, date, tags, author, likes, comments} ) => {  

    postsHTML += `
    <section class="post">
    <div class="post-body">
      <h2 class="post-title"> ${title} </h2>
      <p class="post-text"> ${text} </p>
      <div class="tags">
        ${ tags.map(tag => `<a href=# class="tag">#${tag}</a>`) }
      </div>
    </div>
    <div class="post-footer">
      <div class="post-buttons">
        <button class="post-button likes">
          <svg width="19" height="20" class="icon icon-like">
            <use xlink:href="img/icons.svg#like"></use>
          </svg>
          <span class="likes-counter">${likes}</span>
        </button>
        <button class="post-button comments">
          <svg width="21" height="21" class="icon icon-comment">
            <use xlink:href="img/icons.svg#comment"></use>
          </svg>
          <span class="comments-counter">${comments}</span>
        </button>
        <button class="post-button save">
          <svg width="19" height="19" class="icon icon-save">
            <use xlink:href="img/icons.svg#save"></use>
          </svg>
        </button>
        <button class="post-button share">
          <svg width="17" height="19" class="icon icon-share">
            <use xlink:href="img/icons.svg#share"></use>
          </svg>
        </button>
      </div>
      <!-- /.post-buttons -->
      <div class="post-author">
        <div class="author-about">
          <a href="#" class="author-username">${author.displayName}</a>
          <span class="post-time">${date}</span>
        </div>
        <a href="#" class="author-link"><img src=${author.photo || "img/avatar.jpeg"}  alt="avatar" class="author-avatar"></a>
      </div>
      <!-- /.post-author -->
    </div>
    <!-- /.post-footer -->
  </section>
  `;

  
  addPostElem.classList.remove('visible');
  postsWrapper.classList.add('visible');

  postsWrapper.innerHTML = postsHTML;  
  });
};

const init = () => {
  // отслеживаем клик по кнопке меню и запускаем функцию
  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  })

  loginForm.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
  
    loginForm.reset();
  });
  
  loginSignup.addEventListener('click', event => {
    event.preventDefault();
    setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);
  
  });
  
  exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });
  
  editElem.addEventListener('click', event => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });
  
  editContainer.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
    editContainer.classList.remove('visible');
  })

  buttonNewPost.addEventListener('click', event => {
    event.preventDefault();
    showAddPost();
  })

  addPostElem.addEventListener('submit', event => {
    event.preventDefault();
    const { title, text, tags } = addPostElem.elements;
    if ( title.value.length < 4 ) {
      alert('Заголовок слишком короткий (минимум 4 символа)');
      return;
    }
    if ( text.value.length < 50 ) {
      alert('Пост слишком короткий (минимум 50 символов)'); 
      return;
    }

    setPosts.addPost(title.value, text.value, tags.value, showAllPosts);
    addPostElem.reset();
  });

  showAllPosts();
  toggleAuthDom();
}

document.addEventListener('DOMContentLoaded', init);





