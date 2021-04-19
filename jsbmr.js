let search = document.querySelector(".search");
let p_search = document.querySelector("#search");
//MENU
function showSearch() {
  search.style.display = "block";
  p_search.style.color = "#2d87f3";
}
function closeSearch() {
  search.style.display = "none";
  p_search.style.color = "initial";
}

//STYLE IMAGE
let form = document.getElementById("input1");
let maleimg = document.getElementById("male-img");
let femaleimg = document.getElementById("female-img");
maleimg.onclick = function () {
  maleimg.style.border = "1px solid red";
  femaleimg.style.border = "none";
};
femaleimg.onclick = function () {
  femaleimg.style.border = "1px solid red";
  maleimg.style.border = "none";
};

let age = document.getElementById("age");
let tall = document.getElementById("tall");
let weight = document.getElementById("weight");

let status = document.getElementById("status");
let risk = document.getElementById("risk");
let recommend = document.getElementById("recommend")
let bmr_span = document.getElementById("span_bmr");

function status_click () {
  if (document.querySelector("#status").style.display == "none") {
   document.querySelector("#status").style.display = "block";
    document.querySelector("#status-dropdown").src = "./image/close.png"; 
  } else {
    document.querySelector("#status").style.display = "none";
    document.querySelector("#status-dropdown").src = "./image/dropdown.png"; 
  }
}
function risk_click () {
  if (document.querySelector("#risk").style.display == "none") {
   document.querySelector("#risk").style.display = "block";
    document.querySelector("#risk-dropdown").src = "./image/close.png"; 
  } else {
    document.querySelector("#risk").style.display = "none";
    document.querySelector("#risk-dropdown").src = "./image/dropdown.png"; 
  }
}
function recommend_click () {
  if (document.querySelector("#recommend").style.display == "none") {
   document.querySelector("#recommend").style.display = "block";
    document.querySelector("#recommend-dropdown").src = "./image/close.png"; 
  } else {
    document.querySelector("#recommend").style.display = "none";
    document.querySelector("#recommend-dropdown").src = "./image/dropdown.png"; 
  }
}



let getData = [
  {
    bmr_min: 0,
    bmr_max: 1499,
    status:
      "Một chỉ số BMR thấp là khi kết quả đo được thấp hơn mức thông thường – thường là thấp hơn 1.500 Kcal/ngày. Ý nghĩa của chỉ số BMR thấp chỉ đơn giản là bạn cần năng lượng ít hơn để duy trì sự sống so với một người bình thường. Chỉ số BMR thấp có thể dẫn đến cảm giác ít thèm ăn và khi ăn, nhu cầu tăng cân của cơ thể cũng sẽ ít hơn người bình thường (vì dễ đạt đến tình trạng thừa cân hơn).",
    risk:
      "Tỷ lệ trao đổi chất cơ bản thấp là một yếu tố nguy cơ cho sự phát triển của kháng insulin và tiểu đường tuýp 2. Tình trạng này chủ yếu gây ra do mất cân bằng hormone, như nồng độ hormone tuyến giáp thấp hoặc do không nạp đủ năng lượng trong thời gian dài. Cơ thể bạn thích nghi với môi trường đang tồn tại. Nếu không được cung cấp đủ năng lượng, cơ thể sẽ tự tiêu hao năng lượng bên trong để bù vào khoảng thiếu hụt. Đến một thời điểm nhất định, cơ thể sẽ giảm mức sử dụng năng lượng để kéo dài sự sống.",
    recommend:
      "Bạn cần 2.520 Kcal/ngày. Ở mức độ Vận Động Nhẹ (ít vận động), cơ thể bạn cần 2.520 Kcal mỗi ngày để duy trì cân nặng hiện có.",
  },
  {
    bmr_min: 1500,
    bmr_max: 1799,
    status:
      "Chỉ số BMR bình thường dao động trong khoảng từ -15% đến 5%. Hầu hết những người bị cường giáp có BMR từ 20% trở lên và những người bị suy giáp là từ 20% trở xuống.",
    risk:
      "Những người có chỉ số BMR trung bình có thể vẫn muốn tăng Tỷ lệ Trao đổi chất Cơ bản (BMR) hoặc Tỷ lệ Trao đổi chất khi Nghỉ ngơi (RMR), đặc biệt là khi có nhu cầu giảm cân và tăng mức độ năng lượng của cơ thể. Mặc dù không dẫn đến nhiều rủi ro về sức khoẻ như khi có BMR thấp, người có RMR thấp vẫn cần tham khảo ý kiến bác sĩ để đánh giá tình trạng sức khoẻ hiện tại. Các yếu tố khác thuộc về thói quen sinh hoạt có thể ảnh hưởng đến nguy cơ mắc các bệnh khác trong tương lai như tiểu đường tuýp 2 và béo phì.",
    recommend:
      "Mặc dù có một số loại thực phẩm – như cà phê và một số loại gia vị – có thể làm tăng tỷ lệ trao đổi chất cơ bản của một người, nhưng sự thay đổi này thường khó nhận thấy và chỉ diễn ra trong thời gian ngắn nên hiếm khi ảnh hưởng đến việc giảm cân. Tuy nhiên, việc tạo nhiều cơ bắp hơn có thể có tác dụng hơn một chút. Lý do là vì: Một trong những biến số ảnh hưởng đến BMR hoặc RMR (Tỷ lệ Trao đổi chất khi Nghỉ ngơi) là lượng cơ nạc mà cơ thể có được. Ở bất kỳ mức cân nặng nào, bạn càng có nhiều cơ và càng ít mỡ thì tỷ lệ trao đổi chất của bạn càng cao. Đó là do cơ bắp có xu hướng sử dụng nhiều năng lượng hơn là chất béo trong khi cơ thể nghỉ ngơi. Vậy nên theo logic: nếu bạn có thể tạo ra cơ bắp và giảm lượng mỡ trong cơ thể, bạn sẽ có Tỷ lệ Trao đổi chất khi Nghỉ ngơi cao hơn và cơ thể có thể đốt cháy chất béo nhanh chóng và hiệu quả.",
  },
  {
    bmr_min: 1800,
    bmr_max: 10000,
    status:
      "Có chỉ số BMR cao hơn nghĩa là bạn cần đốt cháy nhiều calo hơn để duy trì cơ thể cả ngày. Bất kể cân nặng hiện tại là bao nhiêu, người có BMR cao có nhiều cơ bắp và ít mỡ. Lý do chính là vì cơ bắp có xu hướng sử dụng nhiều năng lượng hơn trong khi nghỉ ngơi còn chất béo thì ngược lại.",
    risk:
      "Một nguyên nhân bệnh lý phổ biến khiến BMR cao là do sốt, vì nhiệt độ cơ thể tăng lên làm tăng tốc độ của các chức năng trao đổi chất trong cơ thể. Các chuyên gia ước cứ mỗi độ F tăng lên thì nhiệt độ cơ thể tăng lên 7%. Bệnh về tuyến giáp cũng ảnh hưởng sâu sắc đến BMR. Lý do là các hormone tuyến giáp chịu trách nhiệm điều chỉnh tỉ lệ trao đổi chất của các tế bào. BMR cao là kết quả của bệnh cường giáp (việc tạo ra quá mức các hormone tuyến giáp), còn suy giáp thì dẫn đến BMR thấp.",
    recommend:
      "Để duy trì BMR cao, hãy tiếp tục vận động và có thói quen sinh hoạt lành mạnh. Bao gồm ăn uống đúng cách (bổ sung khẩu phần protein nạc, rau củ và trái cây), thực hiện các hình thức tập luyện hợp lý nhằm mục đích đốt cháy mỡ thừa và tạo ra nhiều cơ nạc. Hãy nhớ rằng vì có BMR cao, bạn cần có khả năng đốt cháy nhiều calo để suy trì chức năng của cơ thể suốt cả ngày. Điều này cũng đóng vai trò cần thiết đối với sức khoẻ tổng thể của bạn.",
  },
];

form.onsubmit = (e) => {
  e.preventDefault();
  let getGender = document.querySelector("[type = 'radio']:checked");
  let gender= "";
  console.log(getGender.id);
  let bmrMale = 10 * weight.value + 6.25 * tall.value - 5 * age.value + 5;
  let bmrFemale = 10 * weight.value + 6.25 * tall.value - 5 * age.value -161;
  let bmr = 0;
  
  document.getElementById("tab1").style.display ="none";
  document.getElementById("how").style.display ="block";

  if (getGender.id == "male") {
    bmr = bmrMale;
    gender = "Nam";
  } else {
    bmr = bmrFemale;
    gender ="Nữ"
  }
  console.log(age.value);
  console.log(tall.value);
  console.log(weight.value);
  console.log(bmr);
  for (let i = 0; i < getData.length; i++) {
    if (getData[i].bmr_min < bmr && getData[i].bmr_max > bmr) {
       
      bmr_span.innerHTML = `Bạn là ${gender} và chỉ số BMR của bạn là: ${bmr}`;
      status.innerHTML = getData[i].status;
      risk.innerHTML = getData[i].risk;
      recommend.innerHTML = getData[i].recommend;
    }
  }

};
