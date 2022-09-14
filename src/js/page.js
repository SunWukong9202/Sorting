let selectOption = document.getElementById(`${localStorage.getItem('option')}`) ?? document.getElementById('tab1');
let tab = document.querySelector(`${localStorage.getItem('tab')}`) ?? document.querySelector('.tab1');
let list = document.getElementById('list');
list.onclick = function(e) {
  let target = e.target.closest('button');
  if(target?.tagName != 'BUTTON') return;
  select(target)
}
function select(target) {
  if(selectOption && tab){
    tab.classList?.remove('block');
    tab.classList?.add('hidden');
    selectOption.classList?.remove('border-b-2');
    selectOption.classList?.remove('border-sky-500');
    localStorage.setItem('option', target.id);
    localStorage.setItem('tab', target.id);

  }
  selectOption = target;
  tab = document.querySelector(`.${target.id}`);
  tab.classList.add('block');
  tab.classList.remove('hidden');
  selectOption.classList.add('border-b-2');
  selectOption.classList.add('border-sky-500');
}

(function preserveState() {
  select(selectOption);
})();