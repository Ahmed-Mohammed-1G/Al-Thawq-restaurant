// الصفحات بنفس ترتيب الازرار: 0 مشروبات - 1 وجبات - 2 عروض
var panels = document.querySelectorAll(".panel");
var tabs = document.querySelectorAll(".tab");

function showMenu(active) {
    for (var i = 0; i < panels.length; i++) {
        // الصفحة الي على الشمال بتروح شمال والي على اليمين بتروح يمين
        // (الصفحة بتتحرك بنفس اتجاه زرارها بالنسبة للصفحة الظاهرة)
        panels[i].style.transform = "translateX(" + (i - active) * 100 + "%)";
        panels[i].style.opacity = (i === active) ? 1 : 0;
        panels[i].inert = (i !== active);
        tabs[i].classList.toggle("active", i === active);
    }
}

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        showMenu(Number(this.dataset.i));
    });
}

// الافتراضي: الوجبات
showMenu(1);
