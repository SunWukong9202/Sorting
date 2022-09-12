let selectOption = document.getElementById(`${localStorage.getItem('option')}`) ?? document.getElementById('tab1');
let tab = document.querySelector(`${localStorage.getItem('tab')}`) ?? document.querySelector('.tab1');
let list = document.getElementById('list');
list.onclick = function(e) {
  console.log(e);
  console.log(e.target.id);
  let target = e.target.closest('button');
  console.log(target.id);
  if(target?.tagName != 'BUTTON') return;
  select(target)
}

function select(target) {
  console.log(target.id)
  if(selectOption && tab){
    if(target.id == 'tab1' || true) {
      tab.classList?.remove('block');
    } 
    // else {
    //   tab.classList?.remove('flex');
    // }
    tab.classList?.add('hidden');
    selectOption.classList?.remove('border-b-2');
    selectOption.classList?.remove('border-sky-500');
    localStorage.setItem('option', target.id);
    localStorage.setItem('tab', target.id);

  }
  selectOption = target;
  tab = document.querySelector(`.${target.id}`);
  console.log(tab);
  if(target.id == 'tab1' || true) {
    tab.classList.add('block');
  } 
  // else {
  //   tab.classList.add('flex');
  // }
  tab.classList.remove('hidden');
  selectOption.classList.add('border-b-2');
  selectOption.classList.add('border-sky-500');
}

(function preserveState() {
  console.log(selectOption);
  console.log(tab);
  select(selectOption);
})();