const loadCategory = async (catId) => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();

  const categoryBarContainer = document.getElementById(
    "category-bar-container"
  );

  const findData = data.data.news_category;
  findData.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<button onClick="loadNews('${item.category_id}')"> ${item.category_name}</button>`;

    categoryBarContainer.appendChild(div);
  });
};

// function getID(catId){
//     console.log(catId)
// }

/* load news */
const loadNews = async (catId) => {
/* load-spinner */
document.getElementById('loading-spiner').style.display="block"


  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catId}`
  );
  const data = await response.json();
  const findData = data.data;
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML= " "
if(findData.length >0){

    document.getElementById('loading-spiner').style.display="none"
}

  findData.forEach((item) => {
    // console.log(item)

    // document.getElementById('loading-spiner').style.display="none"


    const div = document.createElement("div");

    div.classList.add("singleNews");

    div.innerHTML = `


<div class="news-photo">
<img class="photos"
  src=${item.image_url}
  alt=""
/>
</div>
<div class="news-info">
<div class="news-header">
  <h4 id="none">${item.title}</h4>
  <p class="news-badge">
  ${item.rating.badge}
<sup> <h6 class="news-rating">
    ${item.rating.number}
    </h6></sup>
  </p>
</div>
<p>${item.details.slice(0, 80)}</p>

     <h6> </h6>
      <p>Date:32/12/2023</p>
    </div>
  </div>
  <div class="Views author">
    <img
      class="view-img"
      src="https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"
      alt=""
    />
    <p></p>
  </div>
  <div class="details-btn-container">
    <button  class="details-btn" onclick="check('${item.title}')">Details</button>
  </div>
</div>
</div>         </p>

<div class="news-footer">
  <div class="author">
    <div class="">
      <img
        class="author-img"
        src=
      />
    </div>
    <div class="author-info">





`;


    newsContainer.appendChild(div);
  });


 
};

const check=(text)=>{
return text
// const none=document.getElementById('none').innerText=text;
// console.log(none)

  }

/* handle-search */

const handleSearch=()=>{
    const value=document.getElementById('search-box').value;

    if(value){
loadNews(value)
    }else{
     alert("please your enter")
    }
}




loadNews("01");
loadCategory();

