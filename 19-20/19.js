// Задание №19
//   Реализовать виджет, отображающий список постов из любого паблика в VK
//   (подойдет любой паблик, где постов очень много).
//   Например, с помощью этой [функции API VK](https://dev.vk.com/ru/method/wall.get).
//   Виджет должен иметь фиксированные размеры и возможность прокрутки.
//   При прокрутке содержимого виджета до конца должны подгружаться новые посты.
//   Необходимо реализовать возможность кэширования уже загруженных данных:
//   если пользователь закрыл страницу, а потом снова открыл ее,
//   виджет должен отображать все загруженные ранее данные (новые данные
//   должны подгружаться из учетом уже загруженных ранее).

// При переполнении `localStorage`, данные, загруженные последними должны вытеснять данные загруженные первыми.

// Задание №20
//    Реализовать функцию подсчета объема памяти занимаемого данными
//    в LocalStorage для предыдущей задачи. При изменении данных в localStorage
//    в консоль должен выводиться объем занятой памяти / максимальный размер хранилища.

// ==================================================



let posts = [];
let count = 20;
let localStorageMaxSize;

const widget = document.querySelector(".widget");

const callbackFunc = (result) => {
  result.response.items.forEach((item) => {
    posts.push(item);
  })
  renderPosts(result.response.items);
  setLocalStoragePosts(posts);
};

const getPosts = (offset) => {
  const script = document.createElement("SCRIPT");
  script.src = `https://api.vk.com/method/wall.get?owner_id=-120075923&domain=thememeblog&offset=${offset}&count=${count}&filter=all&access_token=2914c1c32914c1c32914c1c30d2a0143a8229142914c1c34de7a3b7b2d6996882e55c7b&v=5.131&callback=callbackFunc`;
//   script.src = VK.Api.call('wall.get', {
//     owner_id: -120075923,
//     domain: 'thememeblog',
//     count: count,
//     offset: offset,
//     access_token: '2914c1c32914c1c32914c1c30d2a0143a8229142914c1c34de7a3b7b2d6996882e55c7b',
//     v: 5.131
//   })
  document.getElementsByTagName("head")[0].appendChild(script);
};

const createPost = () => {
  const postTemplate = document.querySelector("#post-template").content;
  const post = postTemplate.querySelector(".post").cloneNode(true);

  return post;
};

const addPost = ({ attachments, text, likes, reposts, views }) => {
  const post = createPost();

  post.querySelector(".text").textContent = text;

  if (attachments.length > 0) {
    if (attachments[0].type === "photo") {
      post.querySelector(".image").src = attachments[0].photo.sizes.find(
        (size) => size.type === "q"
      ).url;
      post.querySelector(".image").alt = attachments[0].photo.text;
    }
  }

  post.querySelector(".likes").textContent = likes.count;
  post.querySelector(".reposts").textContent = reposts.count;
  post.querySelector(".views").textContent = views.count;

  document.querySelector(".posts").append(post);
};

const renderPosts = (data) => {
  data.forEach((post) => {
    addPost(post);
  });
};

const setLocalStoragePosts = (posts) => {
  try {
    localStorage.setItem("posts", JSON.stringify(posts));
    console.log(`Занято ${(JSON.stringify(posts).length / 1000000).toFixed(1)} Мб из ${maxSize} Мб`);
  } catch {
    posts = posts.slice(count);
    setLocalStoragePosts(posts);
  }
};

const renderWidget = () => {
  if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
    renderPosts(posts);
    console.log(`Занято ${(JSON.stringify(posts).length / 1000000).toFixed(1)} Мб из ${maxSize} Мб`);
  } else {
    getPosts(0);
    console.log(`Занято ${(JSON.stringify(posts).length / 1000000)} Мб из ${maxSize} Мб`);
  }
};

const trySetItem = (testData, step) => {
  try {
    localStorage.setItem("test", testData);
    testData+=step;
    trySetItem(testData, step);
  } catch {
    localStorage.removeItem("test");
    if (localStorage.getItem("posts")) {
      maxSize = ((testData.length + localStorage.getItem("posts").length) / 1000000).toFixed(1);
    } else {
      maxSize = testData.length / 1000000;
    }
  }
}

const countMaxLocalStorageSize = () => {
  let testData = "";
  for (let i = 0; i < 100000; i++) {
    testData+="aaaaaaaa";
  }
  const step = testData;
  
  trySetItem(testData, step);
}

countMaxLocalStorageSize();
renderWidget();

widget.addEventListener("scroll", () => {
  if (widget.scrollHeight - widget.scrollTop < 550) {
    getPosts(posts.length);
  }
});