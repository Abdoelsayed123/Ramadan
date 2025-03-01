const today = new Date();
const eidDate = new Date(today.getTime() + (28 * 24 * 60 * 60 * 1000));

function countdown() {
    const now = new Date().getTime();
    const diff = eidDate - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById("timer").innerHTML = `<span class="badge bg-warning text-dark p-3">${days} يوم</span>`;
}

const duas = [
    "اللهم اجعلنا من المقبولين في هذا الشهر الفضيل",
    "اللهم بلغنا ليلة القدر وارزقنا قيامها",
    "اللهم اعتق رقابنا من النار",
    "اللهم اغفر لنا ولأهلنا وأحبابنا",
    "اللهم اجعل القرآن ربيع قلوبنا"
];

// تغيير الدعاء اليومي تلقائيًا
function changeDua() {
    const index = new Date().getDate() % duas.length;
    document.getElementById("daily-dua").innerHTML = `<em>"${duas[index]}"</em>`;
}

// مشاركة الدعاء على واتساب
function shareDua() {
    const dua = document.getElementById("daily-dua").innerText;
    const url = `https://wa.me/?text=${encodeURIComponent(dua + " 🌙 رمضان كريم!")}`;
    window.open(url, "_blank");
}

countdown();
setInterval(countdown, 1000);
changeDua();
