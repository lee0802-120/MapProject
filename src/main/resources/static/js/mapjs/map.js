var container = document.querySelector("#map");
const menu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close_btn");
const over = document.querySelector(".over");
const sarchBtn = document.querySelector(".sarch_btn");

var options = {
  center: new kakao.maps.LatLng(36.47393942086304, 127.85943079338124),
  level: 13,
};

var map = new kakao.maps.Map(container, options),
  customOverlay = new kakao.maps.CustomOverlay({}),
  infowindow = new kakao.maps.InfoWindow({ removable: true });

axios.get("/static/json/main2.json").then(function (response) {
  response.data.forEach((element) => {
    const name = element.name;

    const paths = [];
    element.path.forEach((element) => {
      element.forEach((item) => {
        paths.push(new kakao.maps.LatLng(item[1], item[0]));
      });
    });

    new kakao.maps.Polygon({
      map: map, // 다각형을 표시할 지도 객체
      path: paths,
      strokeWeight: 2,
      strokeColor: "#004c80",
      strokeOpacity: 0.8,
      fillColor: "#fff",
      fillOpacity: 0.7,
    });

    console.log(name);
  });
});

// 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
// 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
//kakao.maps.event.addListener(polygon, "mouseover", function (mouseEvent) {
//	polygon.setOptions({ fillColor: "#09f" });
//
//	customOverlay.setContent('<div class="area">' + area.name + "</div>");
//
//	customOverlay.setPosition(mouseEvent.latLng);
//	customOverlay.setMap(map);
//});

// 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다
//kakao.maps.event.addListener(polygon, "mousemove", function (mouseEvent) {
//    customOverlay.setPosition(mouseEvent.latLng);
//});

// 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
// 커스텀 오버레이를 지도에서 제거합니다
//kakao.maps.event.addListener(polygon, "mouseout", function () {
//	polygon.setOptions({ fillColor: "#fff" });
//	customOverlay.setMap(null);
//});

// 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다
//kakao.maps.event.addListener(polygon, "click", function (mouseEvent) {
//	var content =
//	    '<div class="info">' +
//	    '   <div class="title">' +
//	    area.name +
//	    "</div>" +
//	    '   <div class="size">총 면적 : 약 ' +
//	    Math.floor(polygon.getArea()) +
//	    " m<sup>2</sup></div>" +
//	    "</div>";
//
//	infowindow.setContent(content);
//	infowindow.setPosition(mouseEvent.latLng);
//	infowindow.setMap(map);
//});

menu.addEventListener("click", () => {
  menu.classList.add("active");
  navMenu.classList.add("active");
  over.classList.add("active");

  let menuOpen = navMenu.classList.contains("active");
  let newMenuOpenStatus = menuOpen;
  menu.setAttribute("aria-expanded", newMenuOpenStatus);
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  navMenu.classList.remove("active");
  over.classList.remove("active");

  let menuOpen = navMenu.classList.contains("active");
  let newMenuOpenStatus = menuOpen;
  menu.setAttribute("aria-expanded", newMenuOpenStatus);
});

sarchBtn.addEventListener("click", () => {
  // 검색 버튼 추후 구현....
});
