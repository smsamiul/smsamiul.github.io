
const search = document.querySelector('#pub-search');
const rows = Array.from(document.querySelectorAll('#pub-rows tr'));
if (search){
  search.addEventListener('input', (e)=>{
    const q = e.target.value.toLowerCase();
    rows.forEach(r=>{
      const t = r.innerText.toLowerCase();
      r.style.display = t.includes(q) ? '' : 'none';
    });
  });
}
