const info = document.querySelector(".js--info");
const btn = document.querySelector(".js--btn");
const app = document.getElementById("app");
const form = document.querySelector(".form-input");
const back = document.querySelector(".form-back");
const send = document.querySelector(".form-btn");
const formWeek = document.querySelector(".js--week");
back.onclick = function () {
  form.style.display = "none";
};
btn.onclick = function () {
  form.style.display = "flex";
};
send.onclick = function () {
  handle();
};
// không viết hàm check thông tin chúng m nhập nên là nhập 
// cho đúng nha :V 
function handle() {
  form.style.display = "none";
  const week = document.getElementById("form-week").value;
  const name = document.getElementById("form-name").value;
  const date = document.getElementById("form-date").value;
  const sex = document.getElementById("form-sex").value;
  const classs = document.getElementById("form-class").value;
 for(i = 1; i <= week; i++) {
     let point = Math.floor(Math.random() * 100);
     let m = Math.floor(Math.random() * 9);
     let s = Math.floor(Math.random() * 59);
     if (s < 10) {
         s= '0' + s;
     }
     if (point < 10) {
         point = '0' + point;
     }
    formWeek.innerHTML += `
    <tr>
    <td> ${i} </td>
    <td>Vòng loại 2021</td>
    <td>Tuần ${i} </td>
    <td>1</td>
    <td>${point} </td>
    <td>0:${m}:${s}</td>`;
 }
  info.innerHTML = `
    <h3>Thông tin thí sinh</h3>
    <div class="row">
<div class="col-lg-4 col-md-6 col-xs-12">
<p style="display: inline-block; margin-left:40px"><label>Họ tên: </label> <strong> ${name} </strong></p>
</div>
<div class="col-lg-4 col-md-6 col-xs-12">
<p style="display: inline-block; margin-left:40px"><label>Ngày sinh: </label><strong>${date}</strong></p>
</div>
<div class="col-lg-4 col-md-6 col-xs-12">
<p style="display: inline-block; margin-left:40px"><label>Giới tính: </label><strong> ${sex} </strong></p>
</div>
<div class="col-lg-4 col-md-6 col-xs-12">
<p style="display: inline-block; margin-left:40px"><label>Bảng: </label><strong>
                                            A
                                    </strong>
</p>
</div>
                    <div class="col-lg-4 col-md-6 col-xs-12">
<p style="display: inline-block; margin-left:40px"><label>Tỉnh/ TP: </label><strong>Hà Tĩnh</strong></p>
</div><div class="col-lg-4 col-md-6 col-xs-12">
<p style="display: inline-block; margin-left:40px"><label>Quận/ Huyện: </label><strong>Can Lộc</strong></p>
</div><div class="col-lg-4 col-md-6 col-xs-12">
<p style="display: inline-block; margin-left:40px"><label>Trường: </label><strong>THPT Can Lộc</strong></p>
</div>
<div class="col-lg-4 col-md-6 col-xs-12">
<p style="display: inline-block; margin-left:40px"><label>Lớp: </label><strong> ${classs} </strong></p>
</div>

</div>

</div>`;
}
